const DIV_TEXT = document.getElementById("text");
const DIV_HOWTO = document.getElementById("howtotext");
const DIV_RESULT = document.getElementById("result");
const BTN_SAMPLE = document.getElementById("sample");
const BTN_EXEC = document.getElementById("execute");
const BTN_CLEAR = document.getElementById("clear");
const CHK_LIMIT = document.getElementById("limit");
const CHK_DETAIL = document.getElementById("detail");
const CHK_PERIOD = document.getElementById("period");

BTN_EXEC.onclick = function () {
    gtag('event', 'button', {'event_category': 'execute'});

    const text = DIV_TEXT.value.replace(/\r\n|\r/g, '\n');
    var resultText = '';

    const lines = text.split('\n');

    for (const line of lines) {
        var sentenceReg = null;
        if  (CHK_PERIOD.checked) {
            sentenceReg = /[^。．]*[。．]*/g;
        }  else {
            sentenceReg = /[^。]*。*/g;
        }

        const sentences = line.match(sentenceReg);

        for (const sentence of sentences) {
            if (sentence === '') { continue }
            const sentenceLength = sentence.length;
            const kanji6 = countKanji6(sentence);
            const kana10 = countKana10(sentence);
            const wakarinikusaIndex = 0.0030933 + sentenceLength * 0.0028964 + kanji6 * 0.0753041 + kana10 * 0.2166971;

            if (wakarinikusaIndex >= 0.30 || CHK_LIMIT.checked) {
 
                if (CHK_DETAIL.checked) {
                    const detailText = `<span style="font-size:50%">(${sentenceLength}-${kanji6}-${kana10}=${Math.round(wakarinikusaIndex * 100) / 100})</span>`;
                    resultText = resultText + detailText;
                }
     
                const colorIndex = Math.round(256 * Math.max(0,(1 - wakarinikusaIndex)));
                resultText = resultText + `<span style="background-color:rgb(255,${colorIndex},${colorIndex});">${sentence}</span>`;
            } else {
                resultText = resultText + `<span>${sentence}</span>`;
            }
        }
        resultText = resultText + '<br>';
    }

    DIV_RESULT.innerHTML = resultText;
};

function countKana10(str) {
    var strs = str.match(/[ァ-ンー]{10,}/g);
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
    var strs = str.match(/[\u3005\u3007\u4E00-\u9FFF]{6,}/g);

    if (strs === null) {
        return 0;
    } else {
        return strs.length;
    }
}

BTN_CLEAR.onclick = function () {
    DIV_TEXT.value = "";
    DIV_RESULT.innerHTML = "<p></p>";
};

BTN_SAMPLE.onclick = function () {
    DIV_TEXT.value = DIV_HOWTO.innerText.replace(/ /g,'');
    BTN_EXEC.click();
};