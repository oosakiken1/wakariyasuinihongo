const DIV_ANSWERTEXT = document.getElementById("answertext");
const DIV_QUESTIONTEXT = document.getElementById("questiontext");
const DIV_ANIMATIONTEXT = document.getElementById("animationtext");
const DIV_ANIMATIONTABLE = document.getElementById("animationtable");

const FORM_CONFIG = document.getElementById("formconfig");

const INPUT_ID = document.getElementById("studentid");
const INPUT_EMAIL = document.getElementById("email");

const AUDIO_TYPE = document.getElementById("audiotype");
const AUDIO_MISS = document.getElementById("audiomiss");
const AUDIO_COUNT = document.getElementById("audiocount");
const AUDIO_NEW_TEXT = document.getElementById("audionewtext");

const STATUS_TIME = document.getElementById("statustime");
const STATUS_COUNT = document.getElementById("statusquestion");
const STATUS_SCORE = document.getElementById("statuslength");
const STATUS_MISS = document.getElementById("statusmiss");
const STATUS_RATE = document.getElementById("statuspercent");

const BTN_HOWTO = document.getElementById("btnhowto");
const BTN_CONFIG = document.getElementById("btnconfig");
const BTN_QR = document.getElementById("btnqr");
const BTN_CREATEQR = document.getElementById("btncreateqr");

const BTN_START = document.getElementById("btnstart");
const BTN_CLEAR = document.getElementById("btnclear");
const BTN_PASS = document.getElementById("btnpass");

const config = {
    time:'M5',
    level:'s2',
    ruby:'1',
    useRandom: 'on',
    playAudio: 'off',
    displayQR: 'off',
 
    email:'',
    studentId: ''
}

const information = {
    durationTime:0,
    displayTime:'',
    sentencesCount:0,
    characterCount:0,
    unCorrectCount:0,
    correctRate:''
}

let romajiText = '';
let hiraganaText = '';
let untransferText = '';
let missText = '';

let mondaiText = '';
let correctText = '';
let order = [];

let level = 0;

let lastScore = 0;

let startTime = 0; 

let endTime = 0; // 秒
let endCount = 0; // 秒

let remainTime = ''; // 秒

let lastUnCorrectflag = false;
let intervalID = null;

document.addEventListener('keydown', keydown_event);
document.addEventListener('keyup', keyup_event);

cleanMondaiTexts();
let mode = 'title'; // title →　typing → result
modeTitle();
setFormValue();
getFormValue();

// let displayText = '<ruby><rb>練習</rb><rt>れんしゅう</rt><rt>ばかりしていると</rt><rb>疲</rb><rt>つか</rt><rt>れます。</rt></ruby>';
// let kanjiText = '練習ばかりしていると疲れます。'
// let correctText = 'れんしゅうばかりしているとつかれます。'

function getFormValue() {
    config.time = FORM_CONFIG.elements['practicetime'].value;
    config.level = FORM_CONFIG.elements['practicelevel'].value;
    config.ruby = FORM_CONFIG.elements['displayruby'].value;
    config.useRandom = FORM_CONFIG.elements['userandom'].value;
    config.playAudio = FORM_CONFIG.elements['playaudio'].value;
    config.displayQR = FORM_CONFIG.elements['displayqr'].value;

    $('#statusremain').text(`練習時間：${configTexts.time[config.time]}`);
    $('#statuslevel').text(`レベル：${configTexts.level[config.level]}`);
    $('#statusruby').text(`ふりがな：${configTexts.ruby[config.ruby]}`);
    $('#statususerandom').text(`順番：${configTexts.useRandom[config.useRandom]}`);

    playAudio(AUDIO_TYPE);
}

function setFormValue() {
    FORM_CONFIG.elements['practicetime'].value = config.time;
    FORM_CONFIG.elements['practicelevel'].value = config.level;
    FORM_CONFIG.elements['displayruby'].value = config.ruby;
    FORM_CONFIG.elements['userandom'].value = config.useRandom;
    FORM_CONFIG.elements['playaudio'].value = config.playAudio;
    FORM_CONFIG.elements['displayqr'].value = config.displayQR;
}

function playAudio(audio) {
    if (config.playAudio === 'on') {
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
    if (config.useRandom === 'on') {
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

        if (config.level[0] === 'c') {
            mondaiText = text;
        } else if (config.level[0] === 's') {
            mondaiText = text.split('/')[1]||text;

        } else if (config.level[0] === 'w') {
            mondaiText = text.split('/')[0];

        } else if (config.level[0] === 'b') {
            mondaiText = text.replace('/','。');
        }
    }

    information.sentencesCount++;

    correctText = getCorrectText(mondaiText);
    romajiText = '';
    missText = '';
    hiraganaText = '';
    untransferText = '';

    // while (DIV_ANIMATIONTEXT.firstChild) {
    //     DIV_ANIMATIONTEXT.removeChild(DIV_ANIMATIONTEXT.firstChild);
    // }

    // const divAnime = document.createElement("div");
    // divAnime.innerHTML = `<div class="animate four" id="animate">${getAnimationText(mondaiText)}</div>`;
    // DIV_ANIMATIONTEXT.appendChild(divAnime);

    while (DIV_ANIMATIONTABLE.firstChild) {
        DIV_ANIMATIONTABLE.removeChild(DIV_ANIMATIONTABLE.firstChild);
    }

    const tableAnime = document.createElement("table");
    tableAnime.classList.add('table-responsive');
    tableAnime.innerHTML = getAnimationTable(mondaiText);
    DIV_ANIMATIONTABLE.appendChild(tableAnime);

    displayAll();
}

function getCorrectText(inputText) {
    let outputText = '';
    let nonKanjiTexts = inputText.match(/[^\u3005\u3007\u4E00-\u9FFF（）]+/g);

    for (let str of nonKanjiTexts) {
        str = str.replace(/[\u30a1-\u30f6]/g, function (match) {
            var chr = match.charCodeAt(0) - 0x60;
            return String.fromCharCode(chr);
        });

        outputText += str;
    }

    return outputText;
}

function displayAll() {
    // information.characterCount = lastScore + hiraganaText.length;

    STATUS_TIME.innerText = `経過時間： ${information.displayTime}`;
    STATUS_COUNT.innerText = `問題数：${information.sentencesCount}`;
    STATUS_SCORE.innerText = `文字数：${information.characterCount}`;
    STATUS_MISS.innerText = `ミス回数：${information.unCorrectCount}`;
    STATUS_RATE.innerText = `正答率：${information.correctRate}%`;

    // DIV_QUESTIONTEXT.innerHTML = getDispayText(mondaiText, hiraganaText.length)
    DIV_ANSWERTEXT.innerHTML = romajiText + missText + '|<br>' + hiraganaText + untransferText + missText + '|';

    for (let i = 0; i < correctText.length; i++) {
        const span = document.getElementById('r' + i);
        if (i < hiraganaText.length) {
            span.classList.add('red');
            // span.classList.remove('white');
        } else {
            span.classList.remove('red');
        }
    }
    scrollAnimationTable(hiraganaText.length);
}

let oldRate;
function scrollAnimationTable() {
    const sw = DIV_ANIMATIONTABLE.scrollWidth;
    const cw = DIV_ANIMATIONTABLE.clientWidth;
    rate = (sw-cw) * hiraganaText.length / (correctText.length-5)

    if (oldRate === rate) {
        return
    }

    oldRate = rate;

    // $("#animationtable").scrollLeft(rate); 

    $("#animationtable").stop(); 
    if (rate === 0) {
        $("#animationtable").animate({  scrollLeft: rate },10,'linear'); 
    } else {
        $("#animationtable").animate({  scrollLeft: rate },2000,'easeOutCubic'); 
    }

}

// 問題文から、漢字と漢字以外の連続をとる。（）は区切り文字。
// 漢字の場合、書き出し。
// 漢字以外の場合、
//   文字数を数えて、 カーソル位置を含む場合、spanをぶち込む
//   rtで囲む。

function getDispayText(inputText, spanIndex) {
    let outputText = '';
    let nonKnajiIndex = 0;
    let tempTexts = inputText.match(/(（[^\u3005\u3007\u4E00-\u9FFF]+）|[^\u3005\u3007\u4E00-\u9FFF（）]+|[\u3005\u3007\u4E00-\u9FFF]+)/g);
    // let tempTexts = inputText.match(/([^\u3005\u3007\u4E00-\u9FFF（）]+|[\u3005\u3007\u4E00-\u9FFF（）]+)/g);

    for (let str of tempTexts) {
        if (str.length === 0) continue;
        if (str.search(/[\u3005\u3007\u4E00-\u9FFF]/) === 0) {
            outputText += str;
        } else {
            if (str.search(/[（）]/) != -1) {
                str = str.replace(/[（）]/g, '');
            } else {
                outputText += str;
            }

            str = str.replace(/[\u30a1-\u30f6]/g, function (match) {
                var chr = match.charCodeAt(0) - 0x60;
                return String.fromCharCode(chr); zu
            });

            outputText += '<rt>';
            for (let char of str) {

                if (nonKnajiIndex < spanIndex) {
                    outputText += `<span class="red">${char}</span>`;
                } else {
                    if (config.ruby === '1') {
                        outputText += char;
                    } else {
                        outputText += `<span class="white">${char}</span>`;
                    }
                }
                nonKnajiIndex++;
            }
            outputText += '</rt>';
        }
    }
    return `<ruby>${outputText}</ruby>`;
}

function getAnimationText(inputText) {
    let outputText = '';
    let kanjiIndex = 0;
    let rubyIndex = 0;
    let tempTexts = inputText.match(/(（[^\u3005\u3007\u4E00-\u9FFF]+）|[^\u3005\u3007\u4E00-\u9FFF（）]+|[\u3005\u3007\u4E00-\u9FFF]+)/g);
    // let tempTexts = inputText.match(/([^\u3005\u3007\u4E00-\u9FFF（）]+|[\u3005\u3007\u4E00-\u9FFF（）]+)/g);

    for (let str of tempTexts) {
        if (str.length === 0) continue;

        if (str.search(/[\u3005\u3007\u4E00-\u9FFF]/) === 0) {
            for (let char of str) {
                outputText += `<span id="k${kanjiIndex}" class="fs">${char}</span>`;
                kanjiIndex++;
            }
        } else {
            let rubyFlag = false;

            if (str.search(/[（）]/) === -1) {
                for (let char of str) {
                    outputText += `<span id="k${kanjiIndex}" class="fs">${char}</span>`;
                    kanjiIndex++;
                }
                if (config.ruby === '2') {
                    rubyFlag = true;
                }
            } else {
                if (config.ruby !== '0') {
                    rubyFlag = true;
                }
            }
            // （）を削除
            str = str.replace(/[（）]/g, '');

            //　カタカナをひらがなに変換
            str = str.replace(/[\u30a1-\u30f6]/g, function (match) {
                var chr = match.charCodeAt(0) - 0x60;
                return String.fromCharCode(chr);
            });

            outputText += '<rt>';
            for (let char of str) {
                if (rubyFlag) {
                    outputText += `<span id="r${rubyIndex}">${char}</span>`;
                } else {
                    outputText += `<span id="r${rubyIndex}" class="white">${char}</span>`;
                }
                rubyIndex++;
            }
            outputText += '</rt>';
        }
    }
    return `<ruby>${outputText}</ruby>`;
}

function getAnimationTable(inputText) {
    let kjText = '';
    let rbText = '';
    let kjIndex = 0;
    let rbIndex = 0;
    let tempTexts = inputText.match(/(（[^\u3005\u3007\u4E00-\u9FFF]+）|[^\u3005\u3007\u4E00-\u9FFF（）]+|[\u3005\u3007\u4E00-\u9FFF]+)/g);

    for (let str of tempTexts) {
        if (str.length === 0) continue;

        if (str.search(/[\u3005\u3007\u4E00-\u9FFF]/) === 0) {
            kjText += '<td>';
            for (let char of str) {
                kjIndex++;
                let delay = Math.floor(Math.random() * 4);
                kjText += `<span id="k${kjIndex}" class="fs${delay}">${char}</span>`;
            }
            kjText += '</td>';
        } else {

            if (str.search(/[（）]/) === -1) {
                for (let char of str) {
                    kjIndex++;
                    let delay = Math.floor(Math.random() * 4);
                    kjText += `<td><span id="k${kjIndex}" class="fs${delay}">${char}</span>`;
                }
                //　カタカナをひらがなに変換
                str = str.replace(/[\u30a1-\u30f6]/g, function (match) {
                    var chr = match.charCodeAt(0) - 0x60;
                    return String.fromCharCode(chr);
                });

                for (let char of str) {
                    if (config.ruby === '2') {
                        rbText += `<th><span id="r${rbIndex}">${char}</span></th>`;
                    } else {
                        rbText += `<th><span id="r${rbIndex}" class="white">${char}</span></th>`;
                    }
                    rbIndex++;
                }

            } else {
                // （）を削除
                str = str.replace(/[（）]/g, '');

                //　カタカナをひらがなに変換
                str = str.replace(/[\u30a1-\u30f6]/g, function (match) {
                    var chr = match.charCodeAt(0) - 0x60;
                    return String.fromCharCode(chr);
                });

                rbText += '<th class = "narrow">'
                for (let char of str) {
                    if (config.ruby !== '0') {
                        rbText += `<span id="r${rbIndex}">${char}</span>`;
                    } else {
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
        hiraganaText = '';
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
    gtag('event', 'start-typing', {'event_category': 'execute'});

    closeAllTab();

    mode = 'countdown';
    modeTyping();

    information.durationTime = 0;
    information.displayTime = '00:00';
    information.sentencesCount = 0;
    information.unCorrectCount = 0;
    information.correctRate = '100.0'

    lastScore = 0;
    lastUnCorrectflag = false;

    level = parseInt(config.level[1]);

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
                if (config.time[0] === 'S') {
                    if (config.time[1] === 'A') {
                        endCount = order.length;
                        endTime = 0;
                    } else {
                        endCount = parseInt(config.time[1]) * 10;
                        endTime = 0;
                    }
                } else if (config.time[0] === 'C') {
                    endCount = parseInt(config.time[1]) * 100;
                    endTime = 0;
            } else {
                    endCount = 0;
                    endTime = parseInt(config.time[1]) * 60 * 1000;
                    endTime = startTime + (endTime === 0 ? 6000 : endTime);
                }

                setNextMondaiText();
                intervalID = window.setInterval(intervalEvent, 50);
            
            }, 1000)

        }, 1000)

    }, 1000)

};


function intervalEvent() {
    if (mode !== 'typing') return;

    const nowTime =new Date();
    information.durationTime = Math.floor((nowTime.getTime() - startTime) / 1000);
    information.displayTime = `${(Math.floor(information.durationTime / 60)).toString().padStart(2,'0')}:${(information.durationTime % 60).toString().padStart(2,'0')}`;

    displayAll();

    if (config.time[0] ==='M' && nowTime >= endTime) {
        displayReult();
        modeResult();
    }
}

function modeTitle() {
    BTN_START.disabled = false;
    BTN_CLEAR.disabled = true;
    BTN_PASS.disabled = true;
};

function modeTyping() {
    BTN_START.disabled = true;
    BTN_CLEAR.disabled = false;
    BTN_PASS.disabled = false;
};

function modeResult() {
    BTN_START.disabled = true;
    BTN_CLEAR.disabled = false;
    BTN_PASS.disabled = true;
}

function displayReult() {

    DIV_ANIMATIONTABLE.innerHTML = '<table><tr><td><div class="message"><span class="res">お</span><span class="res">し</span><span class="res">ま</span><span class="res">い</span></div></td></tr></table>';
    DIV_ANSWERTEXT.innerHTML = '';

    window.clearInterval(intervalID);
    mode = 'result';

    createQRcode() ;

    if (config.displayQR === 'on'){
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
        rub: config.ruby,
        dur: information.displayTime,
        txt: information.sentencesCount,
        chr: information.characterCount,
        mis: information.unCorrectCount,
        rat: information.correctRate
    }

    var qrtext = `mailto:${INPUT_EMAIL.value}?subject=RT-RESULT&body=${JSON.stringify(body)}`;
    // var utf8qrtext = decodeURI(encodeURIComponent(qrtext));
    var utf8qrtext = qrtext;

    $("#qrimage").html('');
    $("#qrimage").qrcode({ text: utf8qrtext });

}

function keyup_event(e) {
    if (mode !== 'typing') return;

    missText = '';
    DIV_ANSWERTEXT.innerHTML = romajiText + missText + '<br>' + hiraganaText + untransferText + missText;
    DIV_QUESTIONTEXT.classList.remove('highlight');
    DIV_ANIMATIONTEXT.classList.remove('highlight');
    DIV_ANIMATIONTABLE.classList.remove('highlight');

    // DIV_QUESTIONTEXT.classList.add('bg-white');

    if (config.time[0] === 'C' && information.characterCount >= endCount) {
        displayReult();
        return;
    }

    if (correctText === hiraganaText) {
        lastScore += hiraganaText.length;

        if (config.time[0] === 'S' && information.sentencesCount >= endCount) {
            displayReult();
            return;
        } else {
            if (config.level[0] !== 'c') {
                playAudio(AUDIO_NEW_TEXT);
            }
            setNextMondaiText();
        }
    }
}

function keydown_event(e) {
    if (mode !== 'typing') return;

    // e.which = null;
    e.preventDefault();

    let nextRomajiText = '';
    let nextHiriganaText = '';
    let nextUntransferText = '';
    let unCorrectflag = true;

    if (e.key.length >= 2) {
        if (e.key === 'Backspace') {
            nextRomajiText = romajiText.substring(0, romajiText.length - 1);
            unCorrectflag = false;
        } else {
            return;
        }
    } else {
        nextRomajiText = romajiText + e.key.toLowerCase();
    }

    [nextHiriganaText, nextUntransferText] = getHiraganaTextUseCorrectText(nextRomajiText);

    if (nextUntransferText.length === 0) {
        if (correctText.indexOf(nextHiriganaText) === 0) {
            unCorrectflag = false;
        }
    } else {
        const expectedHiraganas = getExpectedHiragana(nextUntransferText);
        for (let expectedHiragana of expectedHiraganas) {
            if (correctText.indexOf(nextHiriganaText + expectedHiragana) === 0) {
                unCorrectflag = false;
            }
        }
    }

    if (unCorrectflag) {
        if (e.key !== ' ') {
            if (!lastUnCorrectflag) {
                information.unCorrectCount++;
            }
            missText = e.key;
        }

        DIV_QUESTIONTEXT.classList.add('highlight');
        DIV_ANIMATIONTEXT.classList.add('highlight');
        DIV_ANIMATIONTABLE.classList.add('highlight');

        playAudio(AUDIO_MISS);


    } else {
        romajiText = nextRomajiText;
        hiraganaText = nextHiriganaText;
        untransferText = nextUntransferText;

        missText = '';

        playAudio(AUDIO_TYPE);
    }

    information.characterCount = lastScore + hiraganaText.length;
    information.correctRate = (information.characterCount === 0 ? 100 : (100 - information.unCorrectCount / information.characterCount * 100)).toFixed(1);                

    lastUnCorrectflag = unCorrectflag;

    // dispAll();

    return false;
}

/**
 * ローマ字テキストから、ひらがなテキスト、未変換分のローマ字テキストを取得する。正解テキストと比較することで英数記号も判別する。
 * @param {*} romajiText 
 * @returns [ひらがなテキスト,未変換分のローマ字テキスト]
 */
function getHiraganaTextUseCorrectText(romajiText) {
    let hiraganaText = '';
    let unTranferText = '';
    for (let i = 0; i < romajiText.length; i++) {
        unTranferText += romajiText.charAt(i);
        if (replaceHalfToFull(unTranferText) === replaceHalfToFull(correctText.charAt(hiraganaText.length).toLowerCase())) {
            hiraganaText += correctText.charAt(hiraganaText.length);
            unTranferText = '';
        } else if (ROMAJI.has(unTranferText)) {
            const romaji = ROMAJI.get(unTranferText)
            hiraganaText += romaji.fix;
            unTranferText = romaji.unfix;
        // } else if (unTranferText.charAt(0) === 'n') {
        //     if (unTranferText.length == 2 && !hasStartRomaji(unTranferText)) {
        //         hiraganaText += 'ん';
        //         unTranferText = '';
        //         i--;
        //     }
        }
    }
    return [hiraganaText, unTranferText];
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

/**
 * 未完成のローマ字で始まるローマ字があるかチェックする
 * @param {*} str 未完成のローマ字
 * @returns 
 */
function hasStartRomaji(str) {
    for (let [key, value] of ROMAJI) {
        if (key.indexOf(str) === 0) {
            return true;
        }
    }
    return false;
}

/**
 * 未完成のローマ字で始まるひらがなリストを取得する
 * @param {*} str 未完成のローマ字
 * @returns 
 */
function getExpectedHiragana(str) {
    const expectedHiragana = [];
    for (let [key, value] of ROMAJI) {
        if (key.indexOf(str) === 0) {
            if (value.unfix !=='' ) {
                let secondChars = ''
                if (key[0]  !== key[1]) {
                    secondChars = getExpectedHiragana(value.unfix);
                } else {
                    secondChars = getExpectedHiraganaUnrecursion(value.unfix);
                }
                for (chr of secondChars) {
                    expectedHiragana.push(value.fix+chr);
                }
            } else {
                expectedHiragana.push(value.fix);
            }
        }
    }
    return expectedHiragana;
}

function getExpectedHiraganaUnrecursion(str) {
    const expectedHiragana = [];
    for (let [key, value] of ROMAJI) {
        if (key.indexOf(str) === 0) {
                expectedHiragana.push(value.fix);
        }
    }
    return expectedHiragana;
}

/**
 * 未完成のローマ字で始まるひらがなのローマ字リストを取得する
 * @param {*} str 未完成のローマ字
 * @returns 
 */
function getExpectedRomaji(str) {
    const expectedHiragana = [];
    for (let [key, value] of ROMAJI) {
        if (key.indexOf(str) === 0) {
                expectedHiragana.push(value.fix);
        }
    }
    return expectedHiragana;
}

// んっしょ nssho
