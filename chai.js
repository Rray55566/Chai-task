const toggleButton = document.getElementById('toggleButton');
    const flame = document.getElementById('flame');
    const flameControl = document.getElementById('flameControl');

    let flameOn = false;

    toggleButton.addEventListener('click', () => {
      flameOn = !flameOn;
      if (flameOn) {
        flame.style.display = 'block';
        toggleButton.textContent = 'Off';
        flameControl.disabled = false;
      } else {
        flame.style.display = 'none';
        toggleButton.textContent = 'On';
        flameControl.disabled = true;
      }
    });