// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelected = document.getElementById('horn-select');
  const hornImage = document.querySelector('img[alt="No image selected"]');
  const hornSound = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('img[alt="Volume level 2"]');
  const playButton = document.querySelector('button');
  const confetti = new JSConfetti();

  hornSelected.addEventListener('change', () => {
    const horn = hornSelected.value;
    hornImage.src = `assets/images/${horn}.svg`;
    hornSound.src = `assets/audio/${horn}.mp3`;
  });

  volumeSlider.addEventListener('input', () => {
    const vol = Number(volumeSlider.value);
    hornSound.volume = vol / 100;

    if (vol === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (vol < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (vol < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  playButton.addEventListener('click', () => {
    hornSound.play();

    if (hornSelected.value === 'party-horn') {
      confetti.addConfetti();
    }
  });
}