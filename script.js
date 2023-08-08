let consoleLogs = [];
let randomWord;
function getRandomWord() {
  let randomIndex = Math.floor(Math.random() * wordBank.length);
  randomWord = wordBank[randomIndex];
  let hintDivs = document.querySelectorAll(".hint");
  let answerDivs = document.querySelectorAll(".answer_letter");
  console.log("Random Word:", randomWord);
  for (let i = 0; i < randomWord.length; i++) {
    let letter = randomWord[i];
    // Check if the letter exists in the updatedHints object
    if (updatedHints.hasOwnProperty(letter)) {
      let letterHints = updatedHints[letter];
      let hintIndex = Math.floor(Math.random() * letterHints.length);
      let selectedHint = letterHints[hintIndex];
      // Convert letterHints to an array and remove the selected hint
      letterHints = Object.values(letterHints);
      letterHints.splice(hintIndex, 1);
      updatedHints[letter] = letterHints;
      // Add the hint to the appropriate div
      if (hintDivs[i]) {
        hintDivs[i].innerText = selectedHint.hint;
        answerDivs[i].innerText = selectedHint.hint;
      }
      console.log("Hint:", selectedHint.hint);
      consoleLogs.push({ [selectedHint.answer]: selectedHint.hint });
      console.log("Answer:", selectedHint.answer);
    }
  }
  //console.log(updatedHints)
  return randomWord;
}

/*
  This fucntion is used to help the game detrmin when to show the user the Hints when hovering, clicking, or tapping on the word fields.
*/
$(document).ready(function () {
  function isTouchDevice() {
    return ('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0);
  }

  function showElement($element) {
    $element.show(300);
  }

  function hideElement($element) {
    $element.hide(300);
  }

  function showHintAndAnswer() {
    if (!$(this).hasClass('correct')) {
      clearTimeout($(this).data('hoverTimeout'));
      showElement($(this).data('hint'));
      showElement($(this).data('answerLetter'));
    }
  }

  function hideHintAndAnswer() {
    if (!$(this).hasClass('correct') && !$(this).hasClass('clicked')) {
      var hoverTimeout = setTimeout(() => {
        hideElement($(this).data('hint'));
        hideElement($(this).data('answerLetter'));
      }, 200);
      $(this).data('hoverTimeout', hoverTimeout);
    }
  }

  function handleHintClick() {
    if (!$(this).hasClass('correct')) {
      $('.clicked').removeClass('clicked').prev('.hint').hide(300);
      $('.answer_letter').hide(300);
      $(this).addClass('clicked');
      showHintAndAnswer.call(this);
    }
  }

  $(".word-field, .wordoftheday").each(function (index) {
    var $hint = $(".hint" + (index + 1));
    var $answerLetter = $(".answer_letter" + (index + 1));

    $(this).data('hint', $hint);
    $(this).data('answerLetter', $answerLetter);

    if (isTouchDevice()) {
      $(this).on('touchstart', function (e) {
        e.preventDefault();
        if ($(this).hasClass('clicked')) {
          $(this).removeClass('clicked');
          hideElement($hint);
          hideElement($answerLetter);
        } else {
          $('.clicked').removeClass('clicked').prev('.hint').hide(300);
          $('.answer_letter').hide(300);
          $(this).addClass('clicked');
          showHintAndAnswer.call(this);
        }
      });
    } else {
      $(this).hover(showHintAndAnswer, hideHintAndAnswer).click(handleHintClick);
    }
  });

  // Hide the hint and remove 'clicked' class when clicking outside
  $(document).click(function (e) {
    if (!$(e.target).closest('.word-field, .answer_letter, .wordoftheday').length) {
      $('.clicked').removeClass('clicked').prev('.hint').hide(300);
      $('.answer_letter').hide(300);
    }
  });
});



let wordContainers = document.querySelectorAll('.word1, .word2, .word3, .word4, .word5');
wordContainers.forEach((wordContainer) => {
  let inputs = wordContainer.querySelectorAll('.input');
  let hintNumber = Array.from(wordContainers).indexOf(wordContainer) + 1;
  let $hint = $(".hint" + hintNumber);
  let $answerLetter = $(".answer_letter" + hintNumber);
  inputs.forEach((input, index) => {
    input.setAttribute('maxlength', '1');

    input.addEventListener('click', () => {
      let firstEmptyInput = Array.from(inputs).find((input) => !input.value);
      if (firstEmptyInput) {
        firstEmptyInput.focus();
      } else {
        let lastInput = inputs[inputs.length - 1];
        lastInput.focus();
      }
    });
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^A-Za-z]/g, "").toUpperCase();
      if (index !== inputs.length - 1) {
        let nextInput = inputs[index + 1];
        if (input.value) {
          nextInput.focus();
        }
      }
      if (checkAllWordsGuessed()) {
        submitBtn.style.visibility = 'visible';
      } else {
        submitBtn.style.visibility = 'hidden';
      }
      if (e.target.value) {
        e.target.style.border = '1px solid lightgray';
        e.target.dataset.animation = 'pop'; // change data-animation to 'pop'
      } else {
        e.target.style.border = '';
        e.target.dataset.animation = 'idle'; // change data-animation to 'idle'
      }
    });
    input.addEventListener('animationend', () => {
      // After animation ends, set animation state back to idle
      input.dataset.animation = 'idle';
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === "Backspace") {
        e.preventDefault();
        if (index === inputs.length - 1 && input.value) {
          // if it is the last input and has a value, clear the value
          input.value = "";
          input.style.border = '';  // remove the border
        } else if (index !== 0) {
          // if it is not the first input, move to the previous input and clear the value
          let prevInput = inputs[index - 1];
          prevInput.value = "";
          prevInput.focus();
          prevInput.style.border = '';  // remove the border
        } else if (index === 0) {
          // if it is the first input, just clear the value
          input.value = "";
          input.style.border = '';  // remove the border
        }
      }
    });


    input.addEventListener('keyup', (e) => {
      if (e.key === "Backspace" && input.value === "") {
        input.value = "";
      }
    });
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^A-Za-z]/g, "").toUpperCase();
      let currentWord = '';
      inputs.forEach((input) => {
        currentWord += input.value;
      });
      //console.log('currentWord:', currentWord);
      //console.log("Game Word:", consoleLogs);
      if (currentWord.length === inputs.length) {
        let hint = wordContainer.previousElementSibling.textContent.trim();
        //console.log('hint:', hint);
        let answer = null;
        for (let i = 0; i < consoleLogs.length; i++) {
          let log = consoleLogs[i];
          let logKeys = Object.keys(log);
          let logValues = Object.values(log);
          if (logValues.includes(hint)) {
            let valueIndex = logValues.indexOf(hint);
            answer = logKeys[valueIndex];
            break;
          }
        }
        //console.log('answer:', answer);
        if (currentWord === answer.toUpperCase()) {
          inputs.forEach((input) => {
            input.setAttribute('readonly', '');
            input.setAttribute('contenteditable', 'false');
            input.style.border = '';
          });
          wordContainer.classList.add('correct');
          wordContainer.classList.add('correct-answer');
          let index = Array.from(wordContainers).indexOf(wordContainer);
          let number = index + 1;
          let wordLetterElement = document.querySelector(`.wordoftheday.word-letter${number}`);
          //console.log('number:', number); // for debugging
          //console.log('wordLetterElement:', wordLetterElement); // for debugging
          if (wordLetterElement) {
            wordLetterElement.style.visibility = 'visible'; // change visibility to visible
          }
          $hint.hide(300);
          $answerLetter.hide(300);
        } else {
          wordContainer.classList.add('shake');
          setTimeout(() => {
            wordContainer.classList.remove('shake');
          }, 500);
        }
      }
    });
  });
});

// Get all the wordoftheday and letter_box elements
const wordOfDayElements = document.querySelectorAll('.wordoftheday');
const letterBoxElements = document.querySelectorAll('.letter_box');
// Add hover effect to letter_box elements when hovering over the wordoftheday elements
wordOfDayElements.forEach((wordElement, index) => {
  wordElement.addEventListener('mouseover', () => {
    // Add a CSS class to the corresponding letter_box element
    letterBoxElements[index].classList.add('hovered');
  });
  wordElement.addEventListener('mouseout', () => {
    // Remove the CSS class from the corresponding letter_box element
    letterBoxElements[index].classList.remove('hovered');
  });
});

let lockOnPositions = [
  { letter_box: "box1", position: 139.5 },
  { letter_box: "box2", position: 69.5 },
  { letter_box: "box3", position: -0.5 },
  { letter_box: "box4", position: -70.5 },
  { letter_box: "box5", position: -140.5 }
];
let lockOnPositionsForMobile = [
  { letter_box: "box1", position: 320 },
  { letter_box: "box2", position: 160 },
  { letter_box: "box3", position: 0 },
  { letter_box: "box4", position: -160 },
  { letter_box: "box5", position: -320 }
];
let finalPositionsForWordFields = [
  { word: "word1", finalPosition: null },
  { word: "word2", finalPosition: null },
  { word: "word3", finalPosition: null },
  { word: "word4", finalPosition: null },
  { word: "word5", finalPosition: null }
];
$(document).ready(function () {
  let positionLocking;
  // Check if device is mobile
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    positionLocking = lockOnPositionsForMobile;
    // console.log("Mobile");
    // console.log("lockOnPositionsForMobile:", lockOnPositionsForMobile)
  } else {
    positionLocking = lockOnPositions;
    // console.log("Desktop");
  }
  $(".word-field").draggable({
    //containment: ".game-frame",
    scroll: false,
    axis: "x",
    start: function () {
      // console.log("Adding active class");
      $(this).addClass("active");
      $(this).css("cursor", "move");
      updateWordFieldPositionsBefore();
    },
    drag: function () {
      // console.log('Dragging...');
      updateWordFieldPositionsAfter();
      // console.log("Current left position while dragging:", $(this).position().left);
    },
    stop: function () {
      var position = $(this).position();
      var closest = findClosestPosition(position.left, positionLocking);
      $(this).css({ top: '0px', left: closest.closestPosition });

      let word = this.classList[0];
      let wordEntry = finalPositionsForWordFields.find(entry => entry.word === word);
      if (wordEntry) {
        wordEntry.finalPosition = closest.closestPosition;
      }
      $(this).removeClass("active");
      $(this).css("cursor", "");

      // Check if any word field remains with position 'null'
      finalPositionsForWordFields.forEach(entry => {
        if (entry.finalPosition === null) {
          // Set the default position based on device type
          if (/Mobi|Android/i.test(navigator.userAgent)) {
            entry.finalPosition = 0; // default position for mobile
          } else {
            entry.finalPosition = -0.5; // default position for other devices
          }
        }
      });
    }
  });
  $(".wordoftheday").droppable({
    accept: ".word-field",
    tolerance: "intersect",
    drop: function (event, ui) {
      var droppedWordField = ui.draggable;
      var wordOfDayPosition = $(this).position();
      droppedWordField.css({
        top: '0px',  // force top to 0px
        left: wordOfDayPosition.left
      });
      droppedWordField.removeClass("active");
      updateWordFieldPositionsAfter();
    }
  });
  var wordFieldPositionsBefore = [];
  var wordFieldPositionsAfter = [];
  function updateWordFieldPositionsBefore() {
    wordFieldPositionsBefore = [];
    $(".word-field.active").each(function () {
      var position = $(this).position();
      wordFieldPositionsBefore.push(position);
    });
  }
  function updateWordFieldPositionsAfter() {
    wordFieldPositionsAfter = [];
    $(".word-field.active").each(function () {
      var position = $(this).position();
      //console.log("Word-field being processed:", $(this).attr('class')); // let's see which word-field is being processed
      //console.log("Position:", position);
      wordFieldPositionsAfter.push(position);
    });
  }
  function findClosestPosition(currentPosition, positions) {
    var closestPosition = positions[0].position;
    var closestDistance = Math.abs(currentPosition - closestPosition);
    var closestIndex = 0;
    var epsilon = 0.0001; // A small value to handle floating-point imprecision
    //console.log("Starting with:", closestPosition, " as closest position.");
    for (var i = 1; i < positions.length; i++) {
      var distance;
      if (Math.abs(currentPosition - (-0.5)) < epsilon) {
        // Treat as center position
        distance = Math.abs(positions[i].position - (-0.5));
        //console.log("Treating as center position:", positions[i].position);
      } else {
        distance = Math.abs(currentPosition - positions[i].position);
      }
      if (distance < closestDistance) {
        closestDistance = distance;
        closestPosition = positions[i].position;
        closestIndex = i;
      }
    }
    console.log("Evaluating Current Position:", currentPosition);
    console.log("Closest Match Found At:", closestPosition);
    return { closestPosition, closestIndex };
  }
  // Function to handle tap event on the input fields
  function handleTapEvent(event) {
    // Get the target element that was tapped
    let target = event.target;
    // Check if the target is an input field with the 'input' class
    if (target.classList.contains('input')) {
      // Bring the tapped input field into focus
      target.focus();
    }
  }
  // Add tap event listener to the document to handle tap events
  document.addEventListener('touchstart', handleTapEvent);
});

let submitBtn = document.getElementById('submit-btn');
document.querySelector('#submit-btn').addEventListener('click', async function () {
  let fullUserInput = '';
  let fullRandomWord = '';
  finalPositionsForWordFields.forEach((wordField, index) => {
    let className;
    // Check if device is mobile
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      className = 'data-pos-mobile';
      // If position is null, set to the default mobile position
      if (wordField.finalPosition === null) {
        wordField.finalPosition = 0;
      }
    } else {
      className = 'data-pos';
      // If position is null, set to the default desktop position
      if (wordField.finalPosition === null) {
        wordField.finalPosition = -0.5;
      }
    }
    // Get the corresponding .word-field element
    let word = document.querySelector(`.${wordField.word}`);
    // Get the input corresponding to the finalPosition
    let input = word.querySelector(`[${className}="${wordField.finalPosition}"] .input`);
    let userInput = input ? input.value : "";
    // Append to full words
    fullUserInput += userInput.toUpperCase();
    fullRandomWord += randomWord[index].toUpperCase();
  });
  // console.log('fullUserInput:', fullUserInput);
  // console.log('fullRandomWord:', fullRandomWord);
  // Now perform the comparison on full words
  if (fullUserInput === fullRandomWord) {
    // If they match, change the color of the letter boxes to green
    changeInputColor("green");
    let currentStatus = document.querySelector('.correct_answer');
    currentStatus.style.display = 'block';

    // Disable dragging for .word-field elements
    $('.word-field').draggable('disable');
    $('.correct-answer .word-field').css('cursor', 'default');
    $('.correct-answer .rectangle').css('cursor', 'default');
  } else {
    // If they don't match, change the color of the letter boxes to red
    changeInputColor("red");
    let currentStatus = document.querySelector('.correct_answer');
    $('.word-field').draggable('enable');
    currentStatus.style.display = 'none';
  }

});

function changeInputColor(color) {
  //let wordElement = document.querySelector(`.${word}`); // get the corresponding word-field
  let inputs = document.querySelectorAll('.wordoftheday'); // get all inputs inside this word-field
  inputs.forEach(input => {
    input.style.border = `1px solid ${color}`;
  });
}

function checkAllWordsGuessed() {
  let allWordsGuessed = true;
  wordContainers.forEach((wordContainer, index) => {
    let inputs = wordContainer.querySelectorAll('.input');
    let currentWord = '';
    inputs.forEach((input) => {
      currentWord += input.value;
    });
    let hint = wordContainer.previousElementSibling.textContent.trim();
    let answer = null;
    for (let i = 0; i < consoleLogs.length; i++) {
      let log = consoleLogs[i];
      let logKeys = Object.keys(log);
      let logValues = Object.values(log);
      if (logValues.includes(hint)) {
        let valueIndex = logValues.indexOf(hint);
        answer = logKeys[valueIndex];
        break;
      }
    }
    if (currentWord.toUpperCase() !== answer.toUpperCase()) {
      allWordsGuessed = false;
    }
  });
  return allWordsGuessed;
}


function isMobileDevice() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  var isIPad = /iPad/.test(userAgent);
  var isIPhone = /iPhone/.test(userAgent);
  var isAndroid = /Android/.test(userAgent);
  var isMobile = /Mobile|iP(hone|od)|BlackBerry|IEMobile/.test(userAgent);
  
  // Touch capabilities
  var hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // Screen properties
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var isSmallScreen = screenWidth <= 800;

  return isIPad || isIPhone || (isAndroid && isMobile) || (hasTouch && isSmallScreen);
}

function handleMobileClass() {
  if (isMobileDevice()) {
      document.body.classList.add('mobile');
  } else {
      document.body.classList.remove('mobile');
  }
}

document.addEventListener('DOMContentLoaded', handleMobileClass);
window.addEventListener('resize', handleMobileClass);

document.addEventListener("DOMContentLoaded", function () {
  if (document.body.classList.contains('mobile')) {
    var metaTag = document.createElement('meta');
    metaTag.name = "viewport";
    metaTag.content = "width=device-width, initial-scale=.4, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"; // Added shrink-to-fit attribute
    document.getElementsByTagName('head')[0].appendChild(metaTag);
  }
});

window.addEventListener('load', () => {
  toggleHelpMenu();
});

function toggleHelpMenu() {
  const helpButton = document.querySelector('.help');
  const helpMenu = document.querySelector('.help_menu');
  const exitButton = document.querySelector('.exit_menu');

  // Add event listeners for click and touch events
  helpButton.addEventListener('click', (event) => {
    event.stopPropagation();
    helpMenu.style.display = 'block';
  });
  helpButton.addEventListener('touchend', (event) => {
    event.stopPropagation();
    helpMenu.style.display = 'block';
  });
  exitButton.addEventListener('click', (event) => {
    event.stopPropagation();
    helpMenu.style.display = 'none';
  });
  exitButton.addEventListener('touchend', (event) => {
    event.stopPropagation();
    helpMenu.style.display = 'none';
  });
  document.addEventListener('click', () => {
    helpMenu.style.display = 'none';
  });
  document.addEventListener('touchend', () => {
    helpMenu.style.display = 'none';
  });
  helpMenu.addEventListener('click', (event) => {
    event.stopPropagation();
  });
  helpMenu.addEventListener('touchend', (event) => {
    event.stopPropagation();
  });
}

window.addEventListener('load', () => {
  returnHome();
});

function returnHome() {
  const homeButton = document.querySelector('.HomeIcon');
  // Add event listeners for click and touch events
  homeButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
  homeButton.addEventListener('touchend', () => {
    window.location.href = 'index.html';
  });
}


function playAgain() {
  const homeButton = document.querySelector('.HomeIcon');

  // Add event listeners for click and touch events
  homeButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
  homeButton.addEventListener('touchend', () => {
    window.location.href = 'index.html';
  });
}

// Check if the body has the "mobile" class and update SVG width and height accordingly
window.addEventListener('DOMContentLoaded', () => {
  const svgElement = document.querySelector('.HomeIcon svg');
  if (document.body.classList.contains('mobile')) {
    svgElement.setAttribute('width', '40');
    svgElement.setAttribute('height', '42');
  } else {
    svgElement.setAttribute('width', '30');
    svgElement.setAttribute('height', '32');
  }
});
