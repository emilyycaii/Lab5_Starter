// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voiceSelected = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  let voices = [];

  function populateVoices() {
    voices = speechSynthesis.getVoices();
    voiceSelected.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelected.appendChild(option);
    });
  }

  speechSynthesis.addEventListener('voiceschanged', populateVoices);

  speakButton.addEventListener('click', () => {
    const text = textInput.value;
    const selectedIndex = voiceSelected.value;

    if (!text || selectedIndex === 'select') return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[selectedIndex];

    utterance.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png';
    });

    utterance.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
    });

    speechSynthesis.speak(utterance);
  });

  populateVoices();
}