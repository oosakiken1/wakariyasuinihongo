const DIV_ANSWERTEXT = document.getElementById("answertext");
const DIV_QUESTIONTEXT = document.getElementById("questiontext");
const DIV_ANIMATIONTEXT = document.getElementById("animationtext");
const DIV_ANIMATIONTABLE = document.getElementById("animationtable");

const SELECT_TIME = document.getElementById("practicetime");
const SELECT_LEVEL = document.getElementById("practicelevel");
const SELECT_RUBY = document.getElementById("displayRuby");
const INPUT_ID = document.getElementById("studentid");
const INPUT_EMAIL = document.getElementById("email");

const STATUS_TIME = document.getElementById("statustime");
const STATUS_LENGTH = document.getElementById("statuslength");
const STATUS_MISS = document.getElementById("statusmiss");

const BTN_START = document.getElementById("start");
const BTN_CLEAR = document.getElementById("clear");
const BTN_URL = document.getElementById("createurl");

let mode = 'title'; // title →　typing → result
let romajiText = '';
let hiraganaText = '';
let untransferText = '';
let missText = '';
let mondaiText = '';
let correctText = '';

let level = 0;
let remainTime = ''; // 秒
let lastScore = 0;
let totalScore = 0;
let unCorrectCount = 0;

let endTime = 0; // 秒

let lastUnCorrectflag = false;
let intervalID = null;

document.addEventListener('keydown', keydown_event);
document.addEventListener('keyup', keyup_event);

// let displayText = '<ruby><rb>練習</rb><rt>れんしゅう</rt><rt>ばかりしていると</rt><rb>疲</rb><rt>つか</rt><rt>れます。</rt></ruby>';
// let kanjiText = '練習ばかりしていると疲れます。'
// let correctText = 'れんしゅうばかりしているとつかれます。'

function setNextMondaiText() {
    mondaiText = mondaiTexts[level][Math.floor(mondaiTexts[level].length * Math.random())];
    correctText = getCorrectText(mondaiText);
    romajiText = '';
    missText = '';
    hiraganaText = '';
    untransferText = '';


    while (DIV_ANIMATIONTEXT.firstChild) {
        DIV_ANIMATIONTEXT.removeChild(DIV_ANIMATIONTEXT.firstChild);
    }

    const divAnime = document.createElement("div");
    // divAnime.innerHTML = '<div class="animate four" id="animate"><ruby><span>練</span><span>習</span><rt>れんしゅう</rt></ruby><span>ば</span><span>か</span><span>り</span><span>し</span><span>て</span><span>い</span><span>る</span><span>と</span><span>疲</span><span>れ</span><span>ま</span><span>す</span></div>';

    divAnime.innerHTML = `<div class="animate four" id="animate">${getAnimationText(mondaiText)}</div>`;
    // DIV_ANIMATIONTEXT.appendChild(divAnime);


    while (DIV_ANIMATIONTABLE.firstChild) {
        DIV_ANIMATIONTABLE.removeChild(DIV_ANIMATIONTABLE.firstChild);
    }

    const tableAnime = document.createElement("table");
    tableAnime.innerHTML = `<table>${getAnimationTable(mondaiText)}</div>`;
    DIV_ANIMATIONTABLE.appendChild(tableAnime);

    dispAll();
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

function dispAll() {
    totalScore = lastScore + hiraganaText.length;

    STATUS_TIME.innerText = '残り時間：  ' + remainTime;
    STATUS_LENGTH.innerText = '入力文字数：　' + totalScore;
    STATUS_MISS.innerText = 'ミス回数：　' + unCorrectCount;

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
                    if (SELECT_RUBY.value === '1') {
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
                if (SELECT_RUBY.value === '2') {
                    rubyFlag = true;
                }
            } else {
                if (SELECT_RUBY.value !== '0') {
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
                let delay = Math.floor(Math.random()*4);
                kjText += `<span id="k${kjIndex}" class="fs${delay}">${char}</span>`;
            }
            kjText += '</td>';
        } else {

            if (str.search(/[（）]/) === -1) {
                for (let char of str) {
                    kjIndex++;
                    let delay = Math.floor(Math.random()*4);
                    kjText += `<td><span id="k${kjIndex}" class="fs${delay}">${char}</span>`;
                }
                //　カタカナをひらがなに変換
                str = str.replace(/[\u30a1-\u30f6]/g, function (match) {
                    var chr = match.charCodeAt(0) - 0x60;
                    return String.fromCharCode(chr);
                });

                for (let char of str) {
                    if (SELECT_RUBY.value === '2') {
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

                rbText += '<th>'
                for (let char of str) {
                    if (SELECT_RUBY.value !== '0') {
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
        mondaiText = '';
        romajiText = '';
        hiraganaText = '';
        unCorrectCount = 0;
        dispAll();
    }
    if (mode === 'result') {
        DIV_ANIMATIONTABLE.innerHTML = '';
        mode = 'title';
    }
    if (mode === 'typing') {
        DIV_ANIMATIONTABLE.innerHTML = '<div class="message"><span class="fs">中</span><span class="fs">断</span></div>';
        window.clearInterval(intervalID);
        mode = 'result';
    }
};

BTN_START.onclick = function () {
    if (mode !== 'title') return;

    mode = 'typing';
    lastScore = 0;
    unCorrectCount = 0;
    lastUnCorrectflag = false;

    endTime = new Date().getTime() + parseFloat(SELECT_TIME.value) * 60 * 1000;
    level = parseInt(SELECT_LEVEL.value);
    setNextMondaiText();

    intervalID = window.setInterval(intervalEvent,50);
};


function intervalEvent() {
    if (mode !== 'typing') return;

    const rt = Math.ceil((endTime - new Date().getTime())/1000);
    remainTime = `${('00' +Math.floor(rt/60)).slice(-2)}:${('00'+rt%60).slice(-2)}`

    dispAll();

    if (rt === 0) {
        modeResult();
    }
}

function modeResult() {
    DIV_ANIMATIONTABLE.innerHTML = '<div class="message"><span class="res">終</span><span class="res">了</span></div><span id="qr"></span>';

    window.clearInterval(intervalID);
    mode = 'result';
    const body = {
        id : INPUT_ID.value,
        time : SELECT_TIME.value,
        level : SELECT_LEVEL.value,
        ruby : SELECT_RUBY.value,
        score : totalScore,
        miss : unCorrectCount
    }

    var qrtext = `mailto:${INPUT_EMAIL.value}?subject=RT-RESULT&body=${JSON.stringify(body)}`;
    // var utf8qrtext = decodeURI(encodeURIComponent(qrtext));
    var utf8qrtext = qrtext;

    $("#qr").qrcode({text:utf8qrtext}); 
    $("#qr").addClass('res');
}


function keyup_event(e) {
    if (mode !== 'typing') return;

    missText = '';
    DIV_ANSWERTEXT.innerHTML = romajiText + missText + '<br>' + hiraganaText + untransferText + missText;
    DIV_QUESTIONTEXT.classList.remove('highlight');
    DIV_ANIMATIONTEXT.classList.remove('highlight');
    DIV_ANIMATIONTABLE.classList.remove('highlight');

    // DIV_QUESTIONTEXT.classList.add('bg-white');

    if (correctText === hiraganaText) {
        lastScore += hiraganaText.length;
        setNextMondaiText();
    }

}

function keydown_event(e) {
    if (mode !== 'typing') return;

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
        nextRomajiText = romajiText + e.key;
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
                unCorrectCount++;
            }
            missText = e.key;
        }

        DIV_QUESTIONTEXT.classList.add('highlight');
        DIV_ANIMATIONTEXT.classList.add('highlight');
        DIV_ANIMATIONTABLE.classList.add('highlight');


    } else {
        romajiText = nextRomajiText;
        hiraganaText = nextHiriganaText;
        untransferText = nextUntransferText;

        missText = '';
    }

    lastUnCorrectflag = unCorrectflag;

    dispAll();

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
        if (replaceHalfToFull(unTranferText.toUpperCase()) === replaceHalfToFull(correctText.charAt(hiraganaText.length).toUpperCase())) {
            hiraganaText += correctText.charAt(hiraganaText.length);
            unTranferText = '';
        } else if (ROMAJI.has(unTranferText)) {
            const romaji = ROMAJI.get(unTranferText)
            hiraganaText += romaji.fix;
            unTranferText = romaji.unfix;
        } else if (unTranferText.charAt(0) === 'n') {
            if (unTranferText.length == 2 && !hasStartRomaji(unTranferText)) {
                hiraganaText += 'ん';
                unTranferText = '';
                i--;
            }
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
            expectedHiragana.push(value.fix);
        }
    }
    return expectedHiragana;
}


