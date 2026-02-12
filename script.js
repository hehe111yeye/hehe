document.addEventListener("DOMContentLoaded", () => {
  // Envelope click opens letter
  const envelope = document.getElementById('envelope');
  const envelopeContainer = document.getElementById('envelope-container');
  const letterContainer = document.getElementById('letter-container');
  const letterWindow = document.querySelector('.letter-window');

  envelope.addEventListener('click', () => {
    envelopeContainer.style.display = 'none';
    letterContainer.style.display = 'flex';
    setTimeout(() => letterWindow.classList.add('open'), 50);
  });

  // Buttons
  const yesBtn = document.querySelector('.yes-btn');
  const noBtn = document.querySelector('.no-btn');
  const finalText = document.getElementById('final-text');

  yesBtn.addEventListener('click', () => {
    finalText.style.display = 'block';
    finalText.innerHTML = "<strong>Valentine Date:</strong> Meow I love you <3";
  });

  noBtn.addEventListener('click', () => {
    finalText.style.display = 'block';
    finalText.innerHTML = "oh..";
  });
});
