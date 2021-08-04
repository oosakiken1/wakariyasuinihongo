const TEXTAREA = document.getElementById("text");
const RESULTAREA = document.getElementById("result");
const BTN_EXEC = document.getElementById("execute");
const BTN_CLEAR = document.getElementById("clear");
const CHK_LIMIT = document.getElementById("limit");
const CHK_DETAIL = document.getElementById("detail");


BTN_EXEC.onclick = function () {
    const text = TEXTAREA.value.replace(/\r\n|\r/g, '\n');
    var resultText = '';

    const lines = text.split('\n');

    for (const line of lines) {
        const sentences = line.match(/[^。]*。*/g);

        for (const sentence of sentences) {
            if (sentence === '') { continue }
            const sentenceLength = sentence.length;
            const kanjiOver5 = countKanjiOver5(sentence);
            const kanaOver9 = countKanaOver9(sentence);
            const wIndex = 0.0030933 + sentenceLength * 0.0028964 + kanjiOver5 * 0.0753041 + kanaOver9 * 0.2166971;

            if (CHK_DETAIL.checked) {
                const wIndexText = `<span style="font-size:50%">(${sentenceLength}-${kanjiOver5}-${kanaOver9}=${Math.round(wIndex * 100) / 100})</span>`;
                resultText = resultText + wIndexText;
            }
            if (wIndex >= 0.30 || CHK_LIMIT.checked) {
                const wIndexColor = Math.round(256 * (1 - wIndex));
                resultText = resultText + `<span style="background-color:rgb(255,${wIndexColor},${wIndexColor});">${sentence}</span>`;
            } else {
                resultText = resultText + `<span>${sentence}</span>`;
            }
        }
        resultText = resultText + '<br>';
    }

    RESULTAREA.innerHTML = resultText;
};

function countKanaOver9(str) {
    var strs = str.match(/[ァ-ンー]{10,}/g);
    if (strs === null) {
        return 0;
    } else {
        return strs.length;
    }
}

function countKanjiOver5(str) {
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
    TEXTAREA.value = "";
};
