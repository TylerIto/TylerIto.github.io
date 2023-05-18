function makeBigger() {
    alert("Hello, world!");
    document.getElementById("textArea").style.fontSize = "24pt";
}

function applyStyles() {
    document.getElementById("textArea").style.fontWeight = "bold";
}

function removeStyles() {
    document.getElementById("textArea").style.fontWeight = "normal";
}

function makeTextMoo() {
    var text = document.getElementById("textArea").value;
    var sentences = text.split(". ");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(" ");
        words[words.length - 1] += "-Moo";
        sentences[i] = words.join(" ");
    }
    text = sentences.join(". ");
    document.getElementById("textArea").value = text.toUpperCase();
}

