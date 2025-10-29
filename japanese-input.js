const DIV_ANSWERTEXT = document.getElementById("answertext2");
const DIV_ANIMATIONTABLE = document.getElementById("animationtable");

const FORM_CONFIG = document.getElementById("formconfig");

const INPUT_ID = document.getElementById("studentid");
const INPUT_EMAIL = document.getElementById("email");
const INPUT_URL = document.getElementById("url");

const AUDIO_TYPE = document.getElementById("audiotype");
const AUDIO_MISS = document.getElementById("audiomiss");
const AUDIO_COUNT = document.getElementById("audiocount");
const AUDIO_NEW_TEXT = document.getElementById("audionewtext");

const STATUS_TIME = document.getElementById("statustime");
const STATUS_COUNT = document.getElementById("statusquestion");
const STATUS_SCORE = document.getElementById("statuslength");
// const STATUS_MISS = document.getElementById("statusmiss");
// const STATUS_RATE = document.getElementById("statuspercent");

const BTN_HOWTO = document.getElementById("btnhowto");
const BTN_CONFIG = document.getElementById("btnconfig");
const BTN_QR = document.getElementById("btnqr");
const BTN_CREATEQR = document.getElementById("btncreateqr");

const BTN_START = document.getElementById("btnstart");
const BTN_CLEAR = document.getElementById("btnclear");
const BTN_PASS = document.getElementById("btnpass");

const config = {
    time:'m5',
    level:'s2',
    mode:'m0',
    ruby:'r1',
    order: 'o1',
    audio: 'off',
    pass: 'on',
    qr: 'off',
 
    email:'',
    studentId: ''
}


const initConfig = {
    time:'m5',
    level:'s2',
    mode:'m0',
    ruby:'r1',
    order: 'o1',
    audio: 'off',
    pass: 'on',
    qr: 'off',
 
    email:'',
    studentId: ''
}

const information = {
    durationTime:0,
    displayTime:'',
    sentencesCount:0,
    characterCount:0,
    // unCorrectCount:0,
    // correctRate:''
}

let romajiText = '';
let confirmedText = '';
// let untransferText = '';
let missText = '';
// let fullTypeText = '';

let mondaiText = '';
let correctText = '';
let order = [];

let level = '';

let lastScore = 0;

let startTime = 0; 

let endTime = 0; // 秒
let endCount = 0; // 秒

let remainTime = ''; // 秒

let lastUnCorrectflag = false;
let intervalID = null;

// document.addEventListener('keydown', keydown_event);

document.addEventListener('keyup', keyup_event);
document.addEventListener('compositionend', keyup_event);

cleanMondaiTexts();
let mode = 'title'; // title →　typing → result
modeTitle();
setConfig(getUrlQueries());
setFormValue();
getFormValue();

// let displayText = '<ruby><rb>練習</rb><rt>れんしゅう</rt><rt>ばかりしていると</rt><rb>疲</rb><rt>つか</rt><rt>れます。</rt></ruby>';
// let kanjiText = '練習ばかりしていると疲れます。'
// let correctText = 'れんしゅうばかりしているとつかれます。'

function setConfig(params) {
    for(key of Object.keys(config)) {
        if (key in params === true) {
            config[key] = params[key];            
        }        
    }
}

function getFormValue() {
    config.time = FORM_CONFIG.elements['practicetime'].value;
    config.level = FORM_CONFIG.elements['practicelevel'].value;
    config.mode = FORM_CONFIG.elements['practicemode'].value;
    config.ruby = FORM_CONFIG.elements['displayruby'].value;
    config.order = FORM_CONFIG.elements['order'].value;
    config.audio = FORM_CONFIG.elements['playaudio'].value;
    config.pass = FORM_CONFIG.elements['pass'].value;
    config.qr = FORM_CONFIG.elements['displayqr'].value;

    $('#statusremain').html(`練習時間<br>${configTexts.time[config.time]}`);
    $('#statuslevel').html(`レベル<br>${configTexts.level[config.level]}`);
    $('#statusmode').html(`モード<br>${configTexts.mode[config.mode]}`);
    $('#statusruby').html(`ふりがな<br>${configTexts.ruby[config.ruby]}`);
    $('#statusorder').html(`順番<br>${configTexts.order[config.order]}`);

    playAudio(AUDIO_TYPE);

    let urlText = location.href.replace(/\?.*$/,"");
    let firstparam = true;
    for(key of Object.keys(config)) {
        if (config[key] !== initConfig[key]) {
            if (firstparam) {
                urlText += "?" + key + '=' + config[key];
                firstparam = false;
            } else {
                urlText += '&' + key + '=' + config[key];
            }
       }
    }
    INPUT_URL.value = urlText;
}

function setFormValue() {
    FORM_CONFIG.elements['practicetime'].value = config.time;
    FORM_CONFIG.elements['practicelevel'].value = config.level;
    FORM_CONFIG.elements['practicemode'].value = config.mode;
    FORM_CONFIG.elements['displayruby'].value = config.ruby;
    FORM_CONFIG.elements['order'].value = config.order;
    FORM_CONFIG.elements['playaudio'].value = config.audio;
    FORM_CONFIG.elements['pass'].value = config.pass;
    FORM_CONFIG.elements['displayqr'].value = config.qr;
}

function playAudio(audio) {
    if (config.audio === 'on') {
        audio.currentTime = 0;
        audio.volume = 0.1;
        audio.play();
    }
}

BTN_QR.onclick = function (e) {
    $('#howtoTab').collapse('hide');
    $('#configTab').collapse('hide');
    // $('#qrTab').collapse('show');
}

BTN_CONFIG.onclick = function (e) {
    $('#howtoTab').collapse('hide');
    // $('#configTab').collapse('show');
    $('#qrTab').collapse('hide');
}

BTN_HOWTO.onclick = function (e) {
    // $('#howtoTab').collapse('show');
    $('#configTab').collapse('hide');
    $('#qrTab').collapse('hide');
}

function closeAllTab() {
    $('#howtoTab').collapse('hide');
    $('#configTab').collapse('hide');
    $('#qrTab').collapse('hide');
}

function cleanMondaiTexts(){
    for (let i = 0; i < mondaiTexts.length; i++) {
        for (let j = 0; j < mondaiTexts[i].length; j++) {
            if (!mondaiTexts[i][j]) {
                mondaiTexts[i].splice(j, 1);
            }
        }
    }
}

function makeOrder(){
    order = [];
    for (let i=0; i < mondaiTexts[level].length; i++) {
        order.push(i);
    }
    if (config.order === 'o1' && config.level[0] !=='a' ) {   
        for (let i=0; i < order.length; i++) {
            const j = Math.floor(order.length * Math.random());
            [order[i], order[j]] = [order[j], order[i]];
        }
    } 
}

function setNextMondaiText() {

    mondaiText = '';

    while (!mondaiText) {
        let test;

        text = mondaiTexts[level][order[information.sentencesCount % order.length]];

        if (config.level[0] !== 's') {
            mondaiText = text;
        } else if (config.level[0] === 's') {
            if (config.mode === 'm0') {    // ふつう
                mondaiText = text.split('/')[1]||text;
            } else if (config.mode === 'm1') { // 単語くりかえし
                mondaiText = text.replace('/','。');
            } else {
                mondaiText = text.split('/')[0];
            }
        }
    }

    information.sentencesCount++;

    correctText = getCorrectText(mondaiText);
    romajiText = '';
    // missText = '';
    confirmedText = '';
    // untransferText = '';

    DIV_ANSWERTEXT.value = '';
    DIV_ANSWERTEXT.focus();
    dummy.innerText = '';

    while (DIV_ANIMATIONTABLE.firstChild) {
        DIV_ANIMATIONTABLE.removeChild(DIV_ANIMATIONTABLE.firstChild);
    }

    const tableAnime = document.createElement("table");
    tableAnime.classList.add('table-responsive');
    tableAnime.innerHTML = getAnimationTable(mondaiText);
    DIV_ANIMATIONTABLE.appendChild(tableAnime);

    $("#animationtable").stop(); 
    $("#animationtable").scrollLeft(0); 

    displayAll();
}

function getCorrectText(inputText) {
    let outputText = '';
    // let nonKanjiTexts = inputText.match(/[^\u3005\u3007\u4E00-\u9FFF（）　]+/g);

    let kanjiText = inputText.replaceAll(/(（.*?）|　)/g,"");
    kanjiText = replaceHalfToFull(kanjiText);


    return kanjiText;
}

function displayInfomation() {
    STATUS_TIME.innerText = `経過時間： ${information.displayTime}`;
    STATUS_COUNT.innerText = `問題数：${information.sentencesCount}`;
    STATUS_SCORE.innerText = `文字数：${information.characterCount}`;
    // STATUS_MISS.innerText = `ミス回数：${information.unCorrectCount}`;
    // STATUS_RATE.innerText = `正答率：${information.correctRate}%`;
}


function displayAll() {
    displayInfomation();

    // DIV_ANSWERTEXT.value = fullTypeText;
    // DIV_ANSWERTEXT.focus();
    

    for (let i = 0; i < correctText.length; i++) {     
        const span = document.getElementById('k' + i);
        if (i < confirmedText.length) {
            span.classList.add('red');
            // span.classList.remove('white');
        } else {
            span.classList.remove('red');
        }
    }
    scrollAnimationTable();
    // scrollTexts();
}

let oldscrollLeft;

function scrollAnimationTable() {
    const sw = DIV_ANIMATIONTABLE.scrollWidth;
    const cw = DIV_ANIMATIONTABLE.clientWidth;
    // let scrollLeft = (sw - cw) * (hiraganaText.length - (DIV_ANIMATIONTABLE.clientWidth/(DIV_ANIMATIONTABLE.scrollWidth/correctText.length))*.2) / (correctText.length - (DIV_ANIMATIONTABLE.clientWidth/(DIV_ANIMATIONTABLE.scrollWidth/correctText.length)*.5))

    let scrollLeft = (sw - cw) * (confirmedText.length - (cw/(sw/correctText.length))*.1) / (correctText.length - (cw/(sw/correctText.length)*.7))

    if (oldscrollLeft === scrollLeft) {
        return
    }

    oldscrollLeft = scrollLeft;

    // $("#animationtable").scrollLeft(rate); 

    $("#animationtable").stop(); 
    $("#animationtable").animate({  scrollLeft: scrollLeft },5000,'easeOutCubic'); 

}

let oldHiraganaLength;

function scrollTexts() {
    if (oldHiraganaLength === confirmedText.length) {
        return
    }

    // scrollDiv('#animationtable');
    scrollDiv('#answertext');

    oldHiraganaLength = confirmedText.length;
}

function scrollDiv(divName) {
    div = $(divName);
    const sw = div.scrollWidth;
    const cw = div.clientWidth;
    let scrollLeft = (sw - cw) * (confirmedText.length - 5) / (correctText.length - 15)

    div.stop(); 
    // if (scrollLeft === 0) {
    //     div.animate({  scrollLeft: scrollLeft },10,'linear'); 
    // } else {
        div.animate({  scrollLeft: scrollLeft },2000,'swing'); 
        // div.animate({  scrollLeft: scrollLeft },2000,'easeOutCubic'); 
    // }
}


// 問題文から、漢字と漢字以外の連続をとる。（）は区切り文字。
// 漢字の場合、書き出し。
// 漢字以外の場合、
//   文字数を数えて、 カーソル位置を含む場合、spanをぶち込む
//   rtで囲む。

// function getDispayText(inputText, spanIndex) {
//     let outputText = '';
//     let nonKnajiIndex = 0;
//     let tempTexts = inputText.match(/(（[^\u3005\u3007\u4E00-\u9FFF]+）|[^\u3005\u3007\u4E00-\u9FFF（）]+|[\u3005\u3007\u4E00-\u9FFF]+)/g);
//     // let tempTexts = inputText.match(/([^\u3005\u3007\u4E00-\u9FFF（）]+|[\u3005\u3007\u4E00-\u9FFF（）]+)/g);

//     for (let str of tempTexts) {
//         if (str.length === 0) continue;
//         if (str.search(/[\u3005\u3007\u4E00-\u9FFF]/) === 0) {
//             outputText += str;
//         } else {
//             if (str.search(/[（）]/) != -1) {
//                 str = str.replace(/[（）]/g, '');
//             } else {
//                 outputText += str;
//             }

//             str = str.replace(/[\u30a1-\u30f6]/g, function (match) {
//                 var chr = match.charCodeAt(0) - 0x60;
//                 return String.fromCharCode(chr); zu
//             });

//             outputText += '<rt>';
//             for (let char of str) {

//                 if (nonKnajiIndex < spanIndex) {
//                     outputText += `<span class="red">${char}</span>`;
//                 } else {
//                     if (config.ruby === 'r1') {
//                         outputText += char;
//                     } else {
//                         outputText += `<span class="white">${char}</span>`;
//                     }
//                 }
//                 nonKnajiIndex++;
//             }
//             outputText += '</rt>';
//         }
//     }
//     return `<ruby>${outputText}</ruby>`;
// }

function getAnimationTable(inputText) {
    let kjText = '';
    let rbText = '';
    let kjIndex = 0;
    let rbIndex = 0;
    // 漢字、ふりがな、ひらがなブロックに分割
    let tempTexts = inputText.match(/(（[^\u3005\u3007\u4E00-\u9FFF]+）|[^\u3005\u3007\u4E00-\u9FFF（）]+|[\u3005\u3007\u4E00-\u9FFF]+)/g);

    for (let str of tempTexts) {
        if (str.length === 0) continue;
        //漢字ブロックの場合
        if (str.search(/[\u3005\u3007\u4E00-\u9FFF]/) === 0) {
            kjText += '<td>';
            for (let char of str) {
                let delay = Math.floor(Math.random() * 4);
                kjText += `<span id="k${kjIndex}" class="fs${delay}">${char}</span>`;
                kjIndex++;
            }
            kjText += '</td>';
        } else {
            //ひらがなブロックの場合
            if (str.search(/[（）]/) === -1) {
                // 漢字テキストに追加
                for (let char of str) {

                    if (char !== '　') {
                        let delay = Math.floor(Math.random() * 4);
                        kjText += `<td><span id="k${kjIndex}" class="fs${delay}">${char}</span></td>`;
                        kjIndex++;
                    } else {
                        kjText += `<td><span class="space">_</span></td>`;
                    }
                }
                //　カタカナをひらがなに変換
                str = str.replace(/[\u30a1-\u30f6]/g, function (match) {
                    var chr = match.charCodeAt(0) - 0x60;
                    return String.fromCharCode(chr);
                });

                //ふりがなテキストに追加
                for (let char of str) {
                    if (char !== '　') {
                        if (config.ruby === 'r0') {  // ふりがなすべての時は、見える
                            rbText += `<th><span id="r${rbIndex}">${char}</span></th>`;
                        } else {                    // ふりがなすべて以外は、見えない
                            rbText += `<th><span id="r${rbIndex}" class="white">${char}</span></th>`;
                        }
                        rbIndex++;
                    } else {
                        rbText += `<th><span></span></th>`;
                    }
                }
            //ふりがなブロックの場合
            } else {
                // （）を削除
                str = str.replace(/[（）]/g, '');

                //　カタカナをひらがなに変換
                str = str.replace(/[\u30a1-\u30f6]/g, function (match) {
                    var chr = match.charCodeAt(0) - 0x60;
                    return String.fromCharCode(chr);
                });

                //ふりがなテキストに追加
                rbText += '<th class="narrow">'
                for (let char of str) {
                    if (config.ruby !== 'r2') {  // ふりがななし以外は、見える
                        rbText += `<span id="r${rbIndex}">${char}</span>`;
                    } else {                    // ふりがななしの時は、見えない
                        rbText += `<span id="r${rbIndex}" class="white">${char}</span>`;
                    }
                    rbIndex++;
                }
                rbText += '</th>'
            }
        }
    }
    return `<tr>${rbText}</tr><tr>${kjText}</tr>`;
}


BTN_CLEAR.onclick = function () {
    if (mode === 'title') {
        closeAllTab();
        mondaiText = '';
        romajiText = '';
        confirmedText = '';
        displayAll();
    }
    if (mode === 'result') {
        closeAllTab();
        DIV_ANIMATIONTABLE.innerHTML = '';
        mode = 'title';
        modeTitle();
    }
    if (mode === 'typing') {
        DIV_ANIMATIONTABLE.innerHTML = '<table><tr><td><div class="message"><span class="fs">中</span><span class="fs">断</span></div></td></tr></table>';
        body2.classList.remove('highlight');
        window.clearInterval(intervalID);
        mode = 'result';
        modeResult();
    }
};

BTN_PASS.onclick = function () {
    if (mode !== 'typing') return;
    // information.sentencesCount--;
    setNextMondaiText();
}

BTN_START.onclick = function () {
    if (mode !== 'title') return;
    gtag('event', 'start-japanese-input', {'event_category': 'execute'});

    closeAllTab();

    mode = 'countdown';
    modeTyping();

    information.durationTime = 0;
    information.displayTime = '00:00';
    information.sentencesCount = 0;
    // information.unCorrectCount = 0;
    // information.correctRate = '100.0'

    lastScore = 0;
    lastUnCorrectflag = false;

    level = config.level;

    DIV_ANIMATIONTABLE.innerHTML = '<table><tr><td><div class="message"><span class="res">3</span><div></td></tr></table>';
    playAudio(AUDIO_COUNT);

    setTimeout(function () {
        DIV_ANIMATIONTABLE.innerHTML = '<table><tr><td><div class="message"><span class="res">2</span><div></td></tr></table>';
        playAudio(AUDIO_COUNT);


        setTimeout(function () {
            DIV_ANIMATIONTABLE.innerHTML = '<table><tr><td><div class="message"><span class="res">1</span><div></td></tr></table>';
            playAudio(AUDIO_COUNT);

            setTimeout(function () {

                // AUDIO_COUNT.currentTime = 0;
                // AUDIO_COUNT.play();
    
                mode = 'typing';
                makeOrder();

                startTime = new Date().getTime();
                if (config.time[0] === 's') {
                    if (config.time[1] === 'a') {
                        endCount = order.length;
                        endTime = 0;
                    } else {
                        endCount = parseInt(config.time[1]) * 10;
                        endTime = 0;
                    }
                } else if (config.time[0] === 'c') {
                    endCount = parseInt(config.time[1]) * 100;
                    endTime = 0;
            } else {
                    endCount = 0;
                    endTime = parseInt(config.time[1]) * 60 * 1000;
                    endTime = startTime + (endTime === 0 ? 6000 : endTime);
                }

                setNextMondaiText();
                intervalID = window.setInterval(intervalEvent, 100);
            
            }, 1000)

        }, 1000)

    }, 1000)

};


function intervalEvent() {
    if (mode !== 'typing') return;

    const nowTime =new Date();
    information.durationTime = Math.floor((nowTime.getTime() - startTime) / 1000);
    information.displayTime = `${(Math.floor(information.durationTime / 60)).toString().padStart(2,'0')}:${(information.durationTime % 60).toString().padStart(2,'0')}`;

    displayInfomation();

    if (config.time[0] ==='m' && nowTime >= endTime) {
        displayReult();
        modeResult();
    }
}

function modeTitle() {
    BTN_START.disabled = false;
    BTN_CLEAR.disabled = true;
    // BTN_PASS.disabled = true;
    // BTN_START.style.display = 'inline'
    // BTN_CLEAR.style.display = 'none';
    BTN_PASS.style.display = 'none';

};

function modeTyping() {
    BTN_START.disabled = true;
    BTN_CLEAR.disabled = false;
    // BTN_START.style.display = 'none';
    // BTN_CLEAR.style.display = 'inline'
    if (config.pass === "on") { BTN_PASS.style.display = 'inline'; }

};

function modeResult() {
    BTN_START.disabled = true;
    BTN_CLEAR.disabled = false;
    // BTN_START.style.display = 'none';
    // BTN_CLEAR.style.display = 'inline'
    BTN_PASS.style.display = 'none'
}

function displayReult() {

    DIV_ANIMATIONTABLE.innerHTML = '<table><tr><td><div class="message"><span class="res">お</span><span class="res">し</span><span class="res">ま</span><span class="res">い</span></div></td></tr></table>';
    DIV_ANSWERTEXT.value = '';

    body2.classList.remove('highlight');
    window.clearInterval(intervalID);
    mode = 'result';

    createQRcode() ;

    if (config.qr === 'on'){
        $('#qrTab').collapse('show');
    }
    // $("#qrimage").addClass('res');
}

BTN_CREATEQR.onclick = function () {

    createQRcode() ;

}

function createQRcode() {

    const body = {
        id: INPUT_ID.value,
        tim: config.time,
        lvl: config.level,
        mod: config.mode,
        rub: config.ruby,
        dur: information.displayTime,
        txt: information.sentencesCount,
        chr: information.characterCount,
        // mis: information.unCorrectCount,
        // rat: information.correctRate
    }

    var qrtext = `mailto:${INPUT_EMAIL.value}?subject=RT-RESULT&body=${JSON.stringify(body)}`;
    // var utf8qrtext = decodeURI(encodeURIComponent(qrtext));
    var utf8qrtext = qrtext;

    $("#qrimage").html('');
    $("#qrimage").qrcode({ text: utf8qrtext });

}

var textarea = document.querySelector(".twrap textarea");
var dummy = document.querySelector(".twrap pre code");

textarea.oninput = function(e) {
    checkText(e);

    if (!missText) {
        body2.classList.remove('highlight');
    }

}

function keyup_event(e) {

    if (e.isComposing) return;

    checkText(e);

    if (missText) {
        body2.classList.add('highlight');
    } else {
        body2.classList.remove('highlight');
    }

    let inputText = replaceHalfToFull(DIV_ANSWERTEXT.value);

    if (correctText === inputText) {
        lastScore += correctText.length;

        if (config.time[0] === 's' && information.sentencesCount >= endCount) {
            displayReult();
            return;
        } else {
            if (config.level[0] === 's') {
                playAudio(AUDIO_NEW_TEXT);
            }
            setNextMondaiText();
        }
    } else {

    }
}

function checkText(e) {
    if (mode !== 'typing') return;

    // if (e.isComposing) return;

    DIV_ANSWERTEXT.value = DIV_ANSWERTEXT.value.trim();

    missText = '';

    // DIV_ANIMATIONTABLE.classList.remove('highlight');

    if (config.time[0] === 'c' && information.characterCount >= endCount) {
        displayReult();
        return;
    }

    let inputText = replaceHalfToFull(DIV_ANSWERTEXT.value);

    confirmedText = '';

    for (let i = 0 ; i < inputText.length ; i++) {
        if (correctText[i] === inputText[i]) {
            confirmedText += DIV_ANSWERTEXT.value[i];
        } else {
        // DIV_ANIMATIONTABLE.classList.add('highlight');
            missText = DIV_ANSWERTEXT.value.substring(i);
            break;
        }
    }

    dummy.innerHTML = confirmedText + '<span class="red">' +  missText + '</span>';

    information.characterCount = lastScore + confirmedText.length;

    displayAll();

}

function keydown_event(e) {
    if (mode !== 'typing') return;

    return false;
}


/**
 * 半角の英数記号を、全角英数記号に置換する
 * @param {*} str 置換文字列
 * @returns 
 */
function replaceHalfToFull(str) {
    return str.replace(/[!-~]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
    });
}




function getUrlQueries() {
    var queryStr = window.location.search.slice(1);  // 文頭?を除外
        queries = {};
  
    // クエリがない場合は空のオブジェクトを返す
    if (!queryStr) {
      return queries;
    }
  
    // クエリ文字列を & で分割して処理
    queryStr.split('&').forEach(function(queryStr) {
      // = で分割してkey,valueをオブジェクトに格納
      var queryArr = queryStr.split('=');
      queries[queryArr[0]] = queryArr[1];
    });
  
    return queries;
  }
  