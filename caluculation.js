const TEXTAREA = document.getElementById("text");
const RESULTAREA = document.getElementById("result");
const BTN_EXEC = document.getElementById("execute");
const BTN_CLEAR = document.getElementById("clear");

BTN_EXEC.onclick = function() {
    var text  = TEXTAREA.value.replace(/\r\n|\r/g, '\n');
    var resultText = '';

    var lines = text.split('\n');
    var sentences = new Array();

    for ( var line of lines ) {
        // var sentences = line.split('。');
        var sentences = line.match(/[^。]*。*/g);

        for ( var sentence of sentences ) {
            if (sentence === '') {continue}
            const sentenceLength = sentence.length;
            const kanjiOver6 = countkanjiOver6(sentence);
            const kanaOver10 = countKanaOver10(sentence);

            const wIndex = 0.0030933 +  sentenceLength * 0.0028964 + kanjiOver6 * 0.0753041 + kanaOver10 * 0.2166971;

            const wIndexText = `<span>(${sentenceLength}-${kanjiOver6}-${kanaOver10}=${Math.round(wIndex*100)/100})</span>`;

            resultText = resultText + `${wIndexText}<span style="background-color:rgb(255,${Math.round(256*(1-wIndex))},${Math.round(255*(1-wIndex))});">${sentence}</span>`;

        }
        resultText = resultText + '<br>';
    }

    RESULTAREA.innerHTML = resultText;

};

function countKanaOver10(str) {
    var strs = str.match(/[ァ-ンー]{10,}/g);
    if (strs===null) {
        return 0;        
    } else {
        return strs.length;
    }
}

function countkanjiOver6(str) {
    // var strs = str.match(/([\u{3005}\u{3007}\u{303b}\u{3400}-\u{9FFF}\u{F900}-\u{FAFF}\u{20000}-\u{2FFFF}][\u{E0100}-\u{E01EF}\u{FE00}-\u{FE02}]){6,}/g);
    // var strs = str.match(/([\u3005\u3007\u303b\u3400-\u9FFF\uF900-\uFAFF\u20000-\u2FFFF][\uE0100-\uE01EF\uFE00-\uFE02]){2,}/g);
    var strs = str.match(/([\u3005\u3007\u303b\u3400-\u9FFF\uF900-\uFAFF\u20000-\u2FFFF]{6,})/g);


    if (strs===null) {
        return 0;        
    } else {
        return strs.length;
    }
}


BTN_CLEAR.onclick = function() { 
    TEXTAREA.value = "";
};
