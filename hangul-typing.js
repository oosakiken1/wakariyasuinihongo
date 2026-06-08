const DIV_ANSWERTEXT = document.getElementById("answertext");
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
    time:'m5',
    level:'kw1',
    // mode:'m0',
    // ruby:'r1',
    order: 'o1',
    audio: 'off',
    pass: 'on',
    qr: 'off',
 
    // email:'',
    // studentId: ''
}


const initConfig = {
    time:'m5',
    level:'kw1',
    // mode:'m0',
    // ruby:'r1',
    order: 'o1',
    audio: 'off',
    pass: 'on',
    qr: 'off',
 
    // email:'',
    // studentId: ''
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
let correctRomajiText = '';
let hangulText = '';
let missText = '';
let fullTypeText = '';

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

document.addEventListener('keydown', keydown_event);
document.addEventListener('keyup', keyup_event);

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
    // config.mode = FORM_CONFIG.elements['practicemode'].value;
    // config.ruby = FORM_CONFIG.elements['displayruby'].value;
    config.order = FORM_CONFIG.elements['order'].value;
    config.audio = FORM_CONFIG.elements['playaudio'].value;
    config.pass = FORM_CONFIG.elements['pass'].value;
    config.qr = FORM_CONFIG.elements['displayqr'].value;

    $('#statusremain').html(`練習時間 : ${configTexts.time[config.time]}`);
    $('#statuslevel').html(`レベル : ${configTexts.level[config.level]}`);
    $('#statusorder').html(`順番 : ${configTexts.order[config.order]}`);

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
    // FORM_CONFIG.elements['practicemode'].value = config.mode;
    // FORM_CONFIG.elements['displayruby'].value = config.ruby;
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
    // $('#howtoTab').collapse('hide');
    // $('#configTab').collapse('hide');
    // $('#qrTab').collapse('show');
}

BTN_CONFIG.onclick = function (e) {
    // $('#howtoTab').collapse('hide');
    // $('#configTab').collapse('show');
    // $('#qrTab').collapse('hide');
}

BTN_HOWTO.onclick = function (e) {
    // $('#howtoTab').collapse('show');
    // $('#configTab').collapse('hide');
    // $('#qrTab').collapse('hide');
}

function closeAllTab() {
    // $('#howtoTab').collapse('hide');
    // $('#configTab').collapse('hide');
    // $('#qrTab').collapse('hide');
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
        mondaiText = text;
    }

    information.sentencesCount++;

    correctText = mondaiText;
    correctRomajiText = convertHangulToKeys(mondaiText);
    console.log(mondaiText+'-'+correctRomajiText);
    romajiText = '';
    missText = '';
    hangulText = '';
    fullTypeText = '';

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
    let nonKanjiTexts = inputText.match(/[^\u3005\u3007\u4E00-\u9FFF（）　]+/g);

    for (let str of nonKanjiTexts) {
        str = str.replace(/[\u30a1-\u30f6]/g, function (match) {
            var chr = match.charCodeAt(0) - 0x60;
            return String.fromCharCode(chr);
        });

        outputText += str;
    }

    return outputText;
}

function displayInfomation() {
    STATUS_TIME.innerText = `経過時間： ${information.displayTime}`;
    STATUS_COUNT.innerText = `問題数：${information.sentencesCount}`;
    STATUS_SCORE.innerText = `文字数：${information.characterCount}`;
    STATUS_MISS.innerText = `ミス回数：${information.unCorrectCount}`;
    STATUS_RATE.innerText = `正答率：${information.correctRate}%`;
}


function displayAll() {
    displayInfomation();
    
    DIV_ANSWERTEXT.innerHTML = `<div>${romajiText}${missText}|<br>${hangulText}|</div>`;

    for (let i = 0; i < correctText.length; i++) {
        const span = document.getElementById('r' + i);
        if (i < hangulText.length) {
            span.classList.remove('cursor');
            span.innerText = hangulText[i];
        } else if (i === hangulText.length) {
            span.classList.add('cursor');
            span.innerText='|';
        } else {
            span.classList.remove('cursor');
            span.innerText='';
        }
        if (correctText[i] === span.innerText) 
        {
            span.classList.remove('gray');
            span.classList.add('red');
        } else {
            span.classList.remove('red');
            span.classList.add('gray');
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

    let scrollLeft = (sw - cw) * (hangulText.length - (cw/(sw/correctText.length))*.1) / (correctText.length - (cw/(sw/correctText.length)*.7))

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
    if (oldHiraganaLength === hangulText.length) {
        return
    }

    // scrollDiv('#animationtable');
    scrollDiv('#answertext');

    oldHiraganaLength = hangulText.length;
}

function scrollDiv(divName) {
    div = $(divName);
    const sw = div.scrollWidth;
    const cw = div.clientWidth;
    let scrollLeft = (sw - cw) * (hangulText.length - 5) / (correctText.length - 15)

    div.stop(); 
    // if (scrollLeft === 0) {
    //     div.animate({  scrollLeft: scrollLeft },10,'linear'); 
    // } else {
        div.animate({  scrollLeft: scrollLeft },2000,'swing'); 
        // div.animate({  scrollLeft: scrollLeft },2000,'easeOutCubic'); 
    // }
}

function getAnimationTable(inputText) {
    let kjText = '';
    let rbText = '';
    let kjIndex = 0;
    let rbIndex = 0;
    // 漢字、ふりがな、ひらがなブロックに分割
    let tempTexts = inputText.match(/(（[^\u3005\u3007\u4E00-\u9FFF]+）|[^\u3005\u3007\u4E00-\u9FFF（）]+|[\u3005\u3007\u4E00-\u9FFF]+)/g);

    for (let str of tempTexts) {
        if (str.length === 0) continue;

                for (let char of str) {
                    if (char !== ' ') {
                        let delay = Math.floor(Math.random() * 4);
                        kjText += `<td><span id="k${kjIndex}" class="fs${delay}">${char}</span></td>`;
                        kjIndex++;
                    } else {
                        kjText += `<td><span id="k${kjIndex}" class="space">_</span></td>`;
                        kjIndex++;
                    }
                }

                //ふりがなテキストに追加
                for (let char of str) {
                        rbText += `<th style=""> <span style="" id="r${rbIndex}">${rbIndex}</span></th>`;
                        rbIndex++;
                }
    }
    return `<tr>${rbText}</tr><tr>${kjText}</tr>`;
}


BTN_CLEAR.onclick = function () {
    if (mode === 'title') {
        closeAllTab();
        mondaiText = '';
        romajiText = '';
        hangulText = '';
        displayAll();
    }
    if (mode === 'result') {
        closeAllTab();
        DIV_ANIMATIONTABLE.innerHTML = '';
        mode = 'title';
        modeTitle();
    }
    if (mode === 'typing') {
        DIV_ANIMATIONTABLE.classList.remove('highlight');
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
    gtag('event', 'start-hangul-typing', {'event_category': 'execute', 'config': JSON.stringify(config)});

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
    BTN_START.style.opacity = 1.0;
    BTN_CLEAR.disabled = true;
    BTN_CLEAR.style.opacity = 0.2;
    BTN_PASS.style.visibility = 'hidden';
};

function modeTyping() {
    BTN_START.disabled = true;
    BTN_START.style.opacity = 0.2;
    BTN_CLEAR.disabled = false;
    BTN_CLEAR.style.opacity = 1.0;
     if (config.pass === "on") { BTN_PASS.style.visibility = 'visible'; }
};

function modeResult() {
    BTN_START.disabled = true;
    BTN_START.style.opacity = 0.2;
    BTN_CLEAR.disabled = false;
    BTN_CLEAR.style.opacity = 1.0;
    BTN_PASS.style.visibility = 'hidden';
}

function displayReult() {

    DIV_ANIMATIONTABLE.classList.remove('highlight');

    DIV_ANIMATIONTABLE.innerHTML = '<table><tr><td><div class="message"><span class="res">お</span><span class="res">し</span><span class="res">ま</span><span class="res">い</span></div></td></tr></table>';
    DIV_ANSWERTEXT.innerHTML = '';

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
        // mod: config.mode,
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
    // すべてのキーから red を外す
    const svg = document.getElementById("keyboard").contentDocument;
    if (svg) svg.querySelectorAll(".key").forEach(g => g.classList.remove("red"));

    if (mode !== 'typing') return;

    missText = '';

    hangulText = convertKeyToHanguls(romajiText);

    DIV_ANSWERTEXT.innerHTML = romajiText + missText + '<br>' + hangulText;
    DIV_ANIMATIONTABLE.classList.remove('highlight');

    displayAll();

    if (config.time[0] === 'c' && information.characterCount >= endCount) {
        displayReult();
        return;
    }

    if (correctText === hangulText) {
        lastScore += hangulText.length;

        if (config.time[0] === 's' && information.sentencesCount >= endCount) {
            displayReult();
            return;
        } else {
            if (config.level[0] === 's') {
                playAudio(AUDIO_NEW_TEXT);
            }
            setNextMondaiText();
        }
    }
}


document.addEventListener("keydown", (e) => {
  console.log("key:", e.key, "code:", e.code, "location:", e.location);
});

function keydown_event(e) {
    const svg = document.getElementById("keyboard").contentDocument;

    if (e.shiftKey) {
            const target1 = svg.getElementById("shiftLeft");
            if (target1) target1.classList.add("red");
            const target2 = svg.getElementById("shiftRight");
            if (target2) target2.classList.add("red");
    }

    const target = svg.getElementById(e.code);
    if (target) {
        target.classList.add("red");
    } else {
        console.log("not found")
    }

    if (mode !== 'typing') return;

    e.preventDefault();

    let nextRomajiText = '';
    let nextHiriganaText = '';
    let unCorrectflag = true;
    let addKey;

    if (e.key.length >= 2) {
        if (e.key === 'Backspace') {
            nextRomajiText = romajiText.substring(0, romajiText.length - 1);
            unCorrectflag = false;
        } else {
            return;
        }
    } else {
        if (e.shiftKey) {
            addKey = e.key.toUpperCase();
        } else {
            addKey = e.key.toLowerCase();
        }
        nextRomajiText = romajiText + addKey;
        fullTypeText += addKey;
    }

    hangulText = convertKeyToHanguls(nextRomajiText);

    if (correctRomajiText.indexOf(nextRomajiText) === 0) {
        unCorrectflag = false;
    }

    if (unCorrectflag) {
        if (e.key !== ' ') {
            if (!lastUnCorrectflag) {
                information.unCorrectCount++;
            }
            missText = addKey;
            // console.log('miss')
        }

        DIV_ANIMATIONTABLE.classList.add('highlight');

        playAudio(AUDIO_MISS);

    } else {
        romajiText = nextRomajiText;
        missText = '';

        playAudio(AUDIO_TYPE);
    }

    information.characterCount = lastScore + hangulText.length;
    information.correctRate = (information.characterCount === 0 ? 100 : (100 - information.unCorrectCount / information.characterCount * 100)).toFixed(1);                

    lastUnCorrectflag = unCorrectflag;

    displayAll();

    return false;
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
  


function getKeysFromHangeul(char) {
    const code = char.charCodeAt(0);

    // --- 互換Jamo → 正規Jamo 変換表 ---
    const compatToJamo = {
        'ㄱ': 'ᄀ', 'ㄲ': 'ᄁ', 'ㄴ': 'ᄂ', 'ㄷ': 'ᄃ', 'ㄸ': 'ᄄ',
        'ㄹ': 'ᄅ', 'ㅁ': 'ᄆ', 'ㅂ': 'ᄇ', 'ㅃ': 'ᄈ', 'ㅅ': 'ᄉ',
        'ㅆ': 'ᄊ', 'ㅇ': 'ᄋ', 'ㅈ': 'ᄌ', 'ㅉ': 'ᄍ', 'ㅊ': 'ᄎ',
        'ㅋ': 'ᄏ', 'ㅌ': 'ᄐ', 'ㅍ': 'ᄑ', 'ㅎ': 'ᄒ',

        'ㅏ': 'ᅡ', 'ㅐ': 'ᅢ', 'ㅑ': 'ᅣ', 'ㅒ': 'ᅤ', 'ㅓ': 'ᅥ',
        'ㅔ': 'ᅦ', 'ㅕ': 'ᅧ', 'ㅖ': 'ᅨ', 'ㅗ': 'ᅩ', 'ㅘ': 'ᅪ',
        'ㅙ': 'ᅫ', 'ㅚ': 'ᅬ', 'ㅛ': 'ᅭ', 'ㅜ': 'ᅮ', 'ㅝ': 'ᅯ',
        'ㅞ': 'ᅰ', 'ㅟ': 'ᅱ', 'ㅠ': 'ᅲ', 'ㅡ': 'ᅳ', 'ㅢ': 'ᅴ',
        'ㅣ': 'ᅵ',

        'ㄳ': 'ᆪ', 'ㄵ': 'ᆬ', 'ㄶ': 'ᆭ', 'ㄺ': 'ᆰ', 'ㄻ': 'ᆱ',
        'ㄼ': 'ᆲ', 'ㄽ': 'ᆳ', 'ㄾ': 'ᆴ', 'ㄿ': 'ᆵ', 'ㅀ': 'ᆶ',
        'ㅄ': 'ᆹ'
    };

    if (compatToJamo[char]) {
        return getKeysFromHangeul(compatToJamo[char]);
    }

    // --- 2ボルシク（QWERTY）Unicode標準Jamo配列 ---
    
    // 初声 (19文字)
    // ㄷ=e, ㅁ=a, ㅅ=t, ㅎ=g
    const choJamo = [
        'r', 'R', 's', 'e', 'E', 'f', 'a', 'q', 'Q', 't', 
        'T', 'd', 'w', 'W', 'c', 'z', 'x', 'v', 'g'
    ];
    if (code >= 0x1100 && code <= 0x1112) {
        return choJamo[code - 0x1100];
    }

    // 中声 (21文字)
    // ㅏ=k, ㅣ=l, ㅓ=j
    const jungJamo = [
        'k', 'o', 'i', 'O', 'j', 'p', 'u', 'P', 'h', 'hk', 
        'ho', 'hl', 'y', 'n', 'nj', 'np', 'nl', 'b', 'm', 'ml', 'l'
    ];
    if (code >= 0x1161 && code <= 0x1175) {
        return jungJamo[code - 0x1161];
    }

    // 終声 (27文字)
    // 【修正】Unicode順に2ボルシクキーを正確に配置（最後が ㅌ=x, ㅍ=v, ㅎ=g）
    // 5番目(ᆭ)=sg, 11番目(ᆶ)=frg
    const jongJamo = [
        'r', 'R', 'rt', 's', 'sw', 'sg', 'e', 'f', 'fr', 'fa', 
        'fq', 'ft', 'fx', 'fv', 'fg', 'a', 'q', 'qt', 't', 'T', 
        'd', 'w', 'c', 'z', 'x', 'v', 'g'
    ];
    if (code >= 0x11A8 && code <= 0x11C2) {
        return jongJamo[code - 0x11A8];
    }

    // --- 完成形ハングルの分解 ---
    if (code < 0xAC00 || code > 0xD7A3) {
        return char;
    }

    const S = code - 0xAC00;
    const choIdx = Math.floor(S / 588);
    const jungIdx = Math.floor((S % 588) / 28);
    const jongIdx = S % 28;

    return choJamo[choIdx] + jungJamo[jungIdx] + (jongIdx ? jongJamo[jongIdx - 1] : '');
}

function convertHangulToKeys(str) {
    return Array.from(str).map(getKeysFromHangeul).join('');
}

// 動作確認
console.log(convertHangulToKeys('많다'));     // 出力: aksgek (ㅁ=a, ㅏ=k, ㄶ=sg, ㄷ=e, ㅏ=k)

// ------------------------------
// 1. マッピング定義（ハングルUnicodeの標準インデックスに準拠）
// ------------------------------
const KEY_TO_CHO = {
  'r':0, 'R':1, 's':2, 'e':3, 'E':4, 'f':5, 'a':6, 'q':7, 'Q':8,
  't':9, 'T':10, 'd':11, 'w':12, 'W':13, 'c':14, 'z':15, 'x':16, 'v':17, 'g':18
};

const KEY_TO_JUNG = {
  'k':0, 'o':1, 'i':2, 'O':3, 'j':4, 'p':5, 'u':6, 'P':7, 'h':8,
  'y':12, 'n':13, 'b':17, 'm':18, 'l':20
};

const MIXED_JUNG = {
  '8,0':9, '8,1':10, '8,20':11, '13,4':14, '13,5':15, '13,20':16, '18,20':19
};

// 終声のインデックス（0は「なし」にするため、1から配置）
const KEY_TO_JONG = {
  'r':1, 'R':2, 's':4, 'e':7, 'f':8, 'a':16, 'q':17, 't':19, 'T':20,
  'd':21, 'w':22, 'c':23, 'z':24, 'x':25, 'v':26, 'g':27
};

// 複合終声のマッピング [元の終声Idx, 追加の子音Idx]: 新しい終声Idx
const MIXED_JONG = {
  '1,19':3,  // ㄱ(1) + ㅅ(19) = ㄳ(3)
  '4,22':5,  // ㄴ(4) + ㅈ(22) = ㄵ(5)
  '4,27':6,  // ㄴ(4) + ㅎ(27) = ㄶ(6)
  '8,1':9,   // ㄹ(8) + ㄱ(1)  = ㄺ(9)
  '8,16':10, // ㄹ(8) + ㅁ(16) = ㄻ(10)
  '8,17':11, // ㄹ(8) + ㅂ(17) = ㄼ(11)
  '8,19':12, // ㄹ(8) + ㅅ(19) = ㄽ(12)
  '8,25':13, // ㄹ(8) + ㅌ(25) = ㄾ(13)
  '8,26':14, // ㄹ(8) + ㅍ(26) = ㄿ(14)
  '8,27':15, // ㄹ(8) + ㅎ(27) = ㄶ(15)
  '17,19':18 // ㅂ(17) + ㅅ(19) = ㅄ(18)
};

const CHO_TO_COMPAT_CHAR = [
  0x3131,0x3132,0x3134,0x3137,0x3138,0x3139,0x3141,0x3142,0x3143,
  0x3145,0x3146,0x3147,0x3148,0x3149,0x314A,0x314B,0x314C,0x314D,0x314E
];

const JUNG_TO_COMPAT_CHAR = [
  0x314F,0x3150,0x3151,0x3152,0x3153,0x3154,0x3155,0x3156,0x3157,0x3158,
  0x3159,0x315A,0x315B,0x315C,0x315D,0x315E,0x315F,0x3160,0x3161,0x3162,0x3163
];

// ------------------------------
// 2. 文字生成ヘルパ（jongのデフォルトを0＝なしに統一）
// ------------------------------
function makeHangul(cho, jung, jong = 0) {
  if (cho !== -1 && jung === -1) return String.fromCharCode(CHO_TO_COMPAT_CHAR[cho]);
  if (cho === -1 && jung !== -1) return String.fromCharCode(JUNG_TO_COMPAT_CHAR[jung]);
  if (cho === -1 && jung === -1) return '';

  return String.fromCharCode(0xAC00 + cho * 588 + jung * 28 + jong);
}

// ------------------------------
// 3. オートマトン本体
// ------------------------------
function convertKeyToHanguls(input) {
  let result = [];
  let cho = -1, jung = -1, jong = 0; 
  let prevJongIdx = 0; // 複合終声の分解用に、1つ前の単体終声Idxを記憶
  let lastJongKey = null; // 連音化（終声が次の初声になる）の時のためのキー保持

  const flush = () => {
    if (cho !== -1 || jung !== -1) {
      result.push(makeHangul(cho, jung, jong));
      cho = -1; jung = -1; jong = 0;
      prevJongIdx = 0;
      lastJongKey = null;
    }
  };

  for (let i = 0; i < input.length; i++) {
    const key = input[i];
    const isChoKey  = KEY_TO_CHO[key]  !== undefined;
    const isJungKey = KEY_TO_JUNG[key] !== undefined;

    // --------------------------
    // 子音キーの処理
    // --------------------------
    if (isChoKey) {
      if (cho === -1 && jung === -1 && jong === 0) {
        cho = KEY_TO_CHO[key];
        continue;
      }
      if (cho !== -1 && jung === -1 && jong === 0) {
        result.push(makeHangul(cho, -1));
        cho = KEY_TO_CHO[key];
        continue;
      }
      if (cho !== -1 && jung !== -1 && jong === 0) {
        const jongIdx = KEY_TO_JONG[key];
        if (jongIdx !== undefined) {
          jong = jongIdx;
          prevJongIdx = jongIdx; // 単体終声を記憶
          lastJongKey = key;
        } else {
          flush();
          cho = KEY_TO_CHO[key];
        }
        continue;
      }
      if (cho !== -1 && jung !== -1 && jong !== 0) {
        const nextJongIdx = KEY_TO_JONG[key];
        const mixed = nextJongIdx !== undefined ? MIXED_JONG[`${jong},${nextJongIdx}`] : undefined;

        if (mixed !== undefined) {
          jong = mixed;
          lastJongKey = key; // 2番目の子音キーを記憶
        } else {
          flush();
          cho = KEY_TO_CHO[key];
        }
        continue;
      }
      flush();
      cho = KEY_TO_CHO[key];
      continue;
    }

    // --------------------------
    // 母音キーの処理
    // --------------------------
    if (isJungKey) {
      const jungIdx = KEY_TO_JUNG[key];

      if (cho === -1 && jung === -1 && jong === 0) {
        jung = jungIdx;
        continue;
      }
      if (cho === -1 && jung !== -1 && jong === 0) {
        const mixed = MIXED_JUNG[`${jung},${jungIdx}`];
        if (mixed !== undefined) {
          jung = mixed;
        } else {
          result.push(makeHangul(-1, jung));
          jung = jungIdx;
        }
        continue;
      }
      if (cho !== -1 && jung === -1 && jong === 0) {
        jung = jungIdx;
        continue;
      }
      if (cho !== -1 && jung !== -1 && jong === 0) {
        const mixed = MIXED_JUNG[`${jung},${jungIdx}`];
        if (mixed !== undefined) {
          jung = mixed;
        } else {
          flush();
          jung = jungIdx;
        }
        continue;
      }
      // 【重要】終声がある状態で母音が来た（連音化の処理）
      if (cho !== -1 && jung !== -1 && jong !== 0) {
        if (lastJongKey) {
          if (jong === prevJongIdx) {
            // 単体終声だった場合（例: 학 + ㅅ -> 하, ㄱが次の初声へ）
            result.push(makeHangul(cho, jung, 0)); 
            cho = KEY_TO_CHO[lastJongKey];
          } else {
            // 複合終声だった場合（例: 닭 + ㅇ -> 달, ㄱが次の初声へ）
            result.push(makeHangul(cho, jung, prevJongIdx)); 
            cho = KEY_TO_CHO[lastJongKey];
          }
          jung = jungIdx;
          jong = 0;
          prevJongIdx = 0;
          lastJongKey = null;
        } else {
          flush();
          jung = jungIdx;
        }
        continue;
      }
      flush();
      jung = jungIdx;
      continue;
    }

    flush();
    result.push(key);
  }

  flush();
  return result.join('');
}

console.log(convertKeyToHanguls("gkrtod"));      // 出力: 학생 (正しく連音化・結合される)
console.log(convertKeyToHanguls("gksrnrdj"));    // 한국어
console.log(convertKeyToHanguls("rks"));         // 간
console.log(convertKeyToHanguls("rkt"));         // 갓
console.log(convertKeyToHanguls("gksrmf"));      // 한글

// ------------------------------
// 動作確認
// ------------------------------
mondaiTexts["kc3"].forEach((mondai) => {
    let keyText = convertHangulToKeys(mondai);
    let hangulText = convertKeyToHanguls(keyText);
    if (mondai !== hangulText)
    console.log((mondai === hangulText) + mondai + "-" + keyText + "-" + hangulText)
}
)
// 싫어하다-tlfxdjgkek-싩어하다