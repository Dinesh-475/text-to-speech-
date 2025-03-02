document.getElementById("convertBtn").addEventListener("click", function () {
    const text = document.getElementById("textInput").value.trim();
    const language = document.getElementById("languageSelect").value;

    if (!text) {
        alert("Please enter some text to convert!");
        return;
    }

    // Use Google Translate API's Text-to-Speech feature
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = language;

    // Speak the text
    window.speechSynthesis.speak(speech);
});

document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("textInput").value = "";
});
