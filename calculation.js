const DIV_TEXT = document.getElementById("text");
const DIV_HOWTO = document.getElementById("howtotext");
const DIV_RESULT = document.getElementById("result");
const DIV_SUMMARY = document.getElementById("summary");
const BTN_SAMPLE = document.getElementById("sample");
const BTN_EXEC = document.getElementById("execute");
const BTN_CLEAR = document.getElementById("clear");
const SELECT_LIMIT = document.getElementById("limit");
const CHK_DETAIL = document.getElementById("detail");
const CHK_PERIOD = document.getElementById("useperiod");
const CHK_SUMMARY = document.getElementById("dispsummary");
const CHK_ESCAPE = document.getElementById("confirmescape");


BTN_EXEC.onclick = function () {
    gtag('event', 'exec-calc', { 'event_category': 'execute' });

    const limit = parseInt(SELECT_LIMIT.value) / 100;
    let text = DIV_TEXT.value.replace(/\r\n|\r/g, '\n');
    let resultText = '';

    if (!text) return;

    const eosPeriod = text.match(/．\n/g);
    if (!CHK_PERIOD.checked && eosPeriod !== null && confirm(`ピリオド直後の改行が ${eosPeriod.length} 箇所あります。ピリオドを文末として扱いますか？`)) {
        CHK_PERIOD.checked = true;
    }

    const lines = text.split('\n');
    const results = [];

    for (const line of lines) {
        let sentencesOrg = getSentences(line);
        let sentences = getSentencesWithParentheses(line);

        if (sentencesOrg.length !== sentences.length) {
            if (CHK_ESCAPE.checked && !confirm(`括弧内の句点をエスケープしてよいですか？\n${line} `)) {
                sentences = sentencesOrg;
            }
        }
        for (const sentence of sentences) {
            if (sentence === '') { continue }
            const sentenceLength = sentence.length;
            const kanji6 = countKanji6(sentence);
            const kana10 = countKana10(sentence);
            const wakarinikusaIndex = 0.0030933 + sentenceLength * 0.0028964 + kanji6 * 0.0753041 + kana10 * 0.2166971;
            results.push(wakarinikusaIndex);

            if (wakarinikusaIndex >= limit) {

                if (CHK_DETAIL.checked) {
                    const detailText = `<span style="font-size:50%">(${sentenceLength}-${kanji6}-${kana10}=${Math.round(wakarinikusaIndex * 100) / 100})</span>`;
                    resultText = resultText + detailText;
                }

                const colorIndex = Math.round(256 * Math.max(0, (1 - wakarinikusaIndex)));
                resultText = resultText + `<span style="background-color:rgb(255,${colorIndex},${colorIndex});">${escapeHTML(sentence)}</span>`;
            } else {
                resultText = resultText + `<span>${escapeHTML(sentence)}</span>`;
            }
        }
        resultText = resultText + '<br>';
    }

    DIV_RESULT.innerHTML = resultText;

    if (CHK_SUMMARY.checked) {
        DIV_SUMMARY.classList.remove("d-none");
    } else {
        DIV_SUMMARY.classList.add("d-none");
    }

    const [mean, sd] = calcMeanSd(results);
    DIV_SUMMARY.innerHTML = `わかりやすさ評価  ${(100-mean*100).toFixed(1)}±${(sd*100).toFixed(1)}点<span class="h6">（わかりにくさ係数 <i>n</i> = ${results.length}, <i>M</i> = ${mean.toFixed(3)}, <i>SD</i> = ${sd.toFixed(3)}）</span>`;
};

function countKana10(str) {
    let strs = str.match(/[ァ-ンーｧ-ﾝｰ]{10,}/g);
    if (strs === null) {
        return 0;
    } else {
        return strs.length;
    }
}

function countKanji6(str) {
    // var strs = str.match(/([\u3005\u3007\u303b\u3400-\u9FFF\uF900-\uFAFF\u20000-\u2FFFF][\uE0100-\uE01EF\uFE00-\uFE02]){2,}/g);
    // var strs = str.match(/([\u3005\u3007\u303b\u3400-\u49FFF\uF900-\uFAFF\u20000-\u2FFFF]{6,})/g);
    // var strs = str.match(/[\u3005\u3007\u303b\u4e00-\u9fcf\u3400-\u4dbf\uF900-\uFAdF\u20000-\u2a6df\u2f800-\u2fa1f]{6,}/g);
    let strs = str.match(/[\u3005\u3007\u4E00-\u9FFF]{6,}/g);

    if (strs === null) {
        return 0;
    } else {
        return strs.length;
    }
}

BTN_CLEAR.onclick = function () {
    DIV_TEXT.value = "";
    DIV_RESULT.innerHTML = "<p></p>";
    DIV_SUMMARY.innerHTML = "<p></p>";
};

BTN_SAMPLE.onclick = function () {
    DIV_TEXT.value = DIV_HOWTO.innerText.replace(/ /g, '');
    BTN_EXEC.click();
};

function calcMeanSd(data) {
    // 平均値を計算
    let sum = 0;
    data.forEach((x, index) => sum += x);
    const mean = sum / data.length;

    // 分散を計算
    let dist = 0;
    data.forEach((x, index) => dist += (x - mean) ** 2);

    // 平方根を求めて標準偏差を計算する
    const sd = Math.sqrt(dist / data.length);
    return [mean, sd];
}

function floor3(num) {
    return Math.floor(num * 1000) / 1000;
}


function test_checkParentheses() {
    return getSentencesWithParentheses('１）あいう。２）a『１）「a。」ｂ．』a．ああ。（いい。）');
}



function getSentences(text) {
    let sentenceReg;
    if (CHK_PERIOD.checked) {
        sentenceReg = /[^。．]*[。．]*/g;
    } else {
        sentenceReg = /[^。]*。*/g;
    }
    const sentences = text.match(sentenceReg);
    return sentences;
}

function getSentencesWithParentheses(text) {
    parenthesesReg = /([\(（][^\(\)（）「『【]*[\)）]|「[^\(\)（「」『【]*」|『[^\(\)（「『』【]*』|【[^\(（「『【】]*】)/;
    const match = text.match(parenthesesReg);

    if (match) {
        let texts = getSentencesWithParentheses(text.replace(parenthesesReg, "#".repeat(match[0].length)));
        let index = 0;
        texts.forEach((str, i) => {
            if (index <= match.index && match.index < index + str.length) {
                texts[i] = str.substring(0, match.index - index) + match[0] + str.substring(match.index - index + match[0].length);
            }
            index += str.length;
        })
        return texts;
    }

    return getSentences(text);
}

/**
 * HTMLエスケープ
 * 
 * @param {String} str 変換したい文字列
 */
var escapeHTML = function (str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
};
