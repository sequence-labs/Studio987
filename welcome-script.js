window.addEventListener('load', () => {
    toggleHelpMenu();
  });

  function toggleHelpMenu() {
    const playButton = document.querySelector('.play');
    const helpMenu = document.querySelector('.help_menu');
    const exitButton = document.querySelector('.exit_menu');

    // Add event listeners for click and touch events
    playButton.addEventListener('click', (event) => {
      event.stopPropagation();
      helpMenu.style.display = 'block';
    });
    playButton.addEventListener('touchend', (event) => {
      event.stopPropagation();
      helpMenu.style.display = 'block';
    });
    exitButton.addEventListener('click', (event) => {
      event.stopPropagation();
      // Navigate to index.html when the exitButton is clicked
      window.location.href = 'index.html';
    });
    exitButton.addEventListener('touchend', (event) => {
      event.stopPropagation();
      // Navigate to index.html when the exitButton is tapped
      window.location.href = 'index.html';
    });
    document.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    document.addEventListener('touchend', () => {
        window.location.href = 'index.html';
    });
    helpMenu.addEventListener('click', (event) => {
      event.stopPropagation();
    });
    helpMenu.addEventListener('touchend', (event) => {
      event.stopPropagation();
    });
  }