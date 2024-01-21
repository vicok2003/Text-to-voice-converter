let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");
let errorDisplay = document.getElementById("errorDisplay");



window.speechSynthesis.onerror = (event) => {
    errorDisplay.textContent = `Speech Synthesis Error: ${event.error}`;
};

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};



voiceSelect.addEventListener("change", () =>{
    speech.voice = voices[voiceSelect.value];
});





document.querySelector("button").addEventListener("click", () => {
    speech.text =document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});