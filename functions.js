let wordBank = ["apple", "chair", "table", "couch", 
                "money", "train", "brush", "horse", 
                "heart", "laugh", "sweet", "smile", 
                "dance", "quiet", "piano", "baker", 
                "shirt", "light", "water", "honey", 
                "bread", "mouse", "clock", "earth", 
                "fruit", "happy", "match", "raven", 
                "sugar", "flame"];

let hints = {
    a: [
        {number: 1, hint: "World's largest continent."},
        {number: 8, hint: "Bird symbolizing peace."},
        {number: 10, hint: "Capital of France."},
        {number: 15, hint: "Primary color."},
        {number: 20, hint: "Element used to fill balloons that float."}
    ],
    b: [
        {number: 2, hint: "Color of coal."},
        {number: 4, hint: "Famous English rock band with John, Paul, George and Ringo."},
        {number: 11, hint: "Animal known for making honey."},
        {number: 14, hint: "Bird known for its night vision."},
        {number: 17, hint: "Fictional city in the Batman series."}
    ],
    c: [
        {number: 3, hint: "Currency of the United States."},
        {number: 6, hint: "First name of Chaplin."},
        {number: 9, hint: "Animal symbolizing slow pace."},
        {number: 12, hint: "Primary color."},
        {number: 15, hint: "Fruit used to make juice for breakfast."}
    ],
    d: [
        {number: 1, hint: "Type of dinosaur in Jurassic Park, T-Rex for short."},
        {number: 5, hint: "Detective with a magnifying glass, last name Holmes."},
        {number: 7, hint: "A period of 24 hours."},
        {number: 13, hint: "Term used for a person who can't hear."},
        {number: 16, hint: "Animal that barks."}
    ],
    e: [
        {number: 2, hint: "Largest bird in the world."},
        {number: 4, hint: "State where the Grand Canyon is located."},
        {number: 8, hint: "A musical instrument with 88 keys."},
        {number: 11, hint: "You break it to make an omelette."},
        {number: 17, hint: "A very large animal with a trunk."}
    ],
    f: [
        {number: 6, hint: "This animal is known as man's best friend."},
        {number: 9, hint: "A creature with feathers."},
        {number: 14, hint: "A fast animal, known for its spots."},
        {number: 18, hint: "Name of the day before Saturday."},
        {number: 22, hint: "A small creature that glows in the dark."}
    ],
    g: [
        {number: 7, hint: "An instrument with 6 strings."},
        {number: 10, hint: "Monster's Inc's one-eyed character."},
        {number: 15, hint: "A bird that symbolizes peace."},
        {number: 20, hint: "Animal with a long neck."},
        {number: 24, hint: "Man who discovered gravity, last name Newton."}
    ],
    h: [
        {number: 3, hint: "Most common greenhouse gas."},
        {number: 8, hint: "Tool used to hit nails."},
        {number: 12, hint: "This bird is known for its 'laugh'."},
        {number: 15, hint: "A mammal known for its big ears and long trunk."},
        {number: 19, hint: "A light source often found on the ceiling."}
    ],
    i: [
        {number: 4, hint: "The country where the Colosseum is located."},
        {number: 10, hint: "An implement for writing or drawing with ink."},
        {number: 16, hint: "The device you are using to talk to me."},
        {number: 20, hint: "An organ used to see."},
        {number: 23, hint: "The country known for its pyramid."}
    ],
    j: [
        {number: 6, hint: "He stole from the rich to give to the poor."},
        {number: 11, hint: "Big cat known for jumping."},
        {number: 18, hint: "One of the Beatles, his last name is Lennon."},
        {number: 21, hint: "The villain in Aladdin."},
        {number: 24, hint: "A large, gray, and powerful sea creature."}
    ],
    k: [
        {number: 1, hint: "A sport played with a round ball by two teams of 11."},
        {number: 7, hint: "Martial art originating from Japan."},
        {number: 13, hint: "A tool used to lock and unlock doors."},
        {number: 17, hint: "A black and white animal known for its love of bamboo."},
        {number: 22, hint: "A vegetable known as a 'superfood'."}
    ],
    l: [
        {number: 2, hint: "The city where the Eiffel Tower is located."},
        {number: 9, hint: "A big cat, the king of the jungle."},
        {number: 14, hint: "The longest river in the world."},
        {number: 19, hint: "A fast running bird that cannot fly."},
        {number: 23, hint: "Something you need to read a book at night."}
    ],

    m: [
        {number: 3, hint: "A mammal known for its ability to mimic human speech."},
        {number: 5, hint: "The color of a clear sky."},
        {number: 10, hint: "A sweet substance made by bees."},
        {number: 15, hint: "A precious metal, often associated with money and wealth."},
        {number: 20, hint: "The tool used to measure length or distance."},
    ],
    n: [
        {number: 6, hint: "The day that comes after Friday."},
        {number: 11, hint: "A tool that points to the north."},
        {number: 16, hint: "Country known for its fjords."},
        {number: 21, hint: "The large part of the Earth's surface that is not covered by land."},
        {number: 24, hint: "A device used to tell time."},
    ],
    o: [
        {number: 7, hint: "A large body of water that covers over 70% of the Earth's surface."},
        {number: 12, hint: "A common fruit, typically associated with the color 'orange'."},
        {number: 17, hint: "A large animal known for its long neck."},
        {number: 22, hint: "A country known for its ancient civilization and pyramids."},
        {number: 25, hint: "A celestial body that orbits the earth."}
    ],
    p: [
        {number: 2, hint: "The coldest continent."},
        {number: 8, hint: "A tropical fruit with a crown."},
        {number: 14, hint: "A bird known for its beautiful feathers."},
        {number: 18, hint: "A black and white bear."},
        {number: 23, hint: "The red vegetable that is often used to make sauce."},
    ],
    q: [
        {number: 1, hint: "The current ruling monarch of United Kingdom."},
        {number: 9, hint: "The geometric figure that has four equal sides."},
        {number: 13, hint: "A sport involving balls and small holes."},
        {number: 17, hint: "The historical period known for knights and castles."},
        {number: 21, hint: "The smallest form of matter."},
    ],
    r: [
        {number: 3, hint: "A plant with prickles on its stems that's often given as a sign of love and appreciation."},
        {number: 8, hint: "A precious stone typically used in jewelry."},
        {number: 13, hint: "The direction where the sun rises."},
        {number: 19, hint: "An animal known for its strength and often called 'King of the Jungle'."},
        {number: 24, hint: "The process by which plants make food using sunlight."},
    ],
    s: [
        {number: 6, hint: "The natural source of light during the day."},
        {number: 11, hint: "A celestial body that illuminates the night."},
        {number: 16, hint: "The season known for its hot weather."},
        {number: 21, hint: "The body of water larger than a river that leads to the ocean."},
        {number: 26, hint: "A serpent."},
    ],
    t: [
        {number: 2, hint: "A plant known for its height."},
        {number: 7, hint: "An instrument for telling time."},
        {number: 12, hint: "The sport that includes touchdowns."},
        {number: 17, hint: "A hot beverage often served with sugar and milk."},
        {number: 22, hint: "An animal with a hard shell that lives in the sea."},
    ],
    u: [
        {number: 3, hint: "A mythical creature with a single horn on its forehead."},
        {number: 9, hint: "The opposite of down."},
        {number: 15, hint: "The continent located in the southern hemisphere."},
        {number: 20, hint: "An umbrella-shaped marine creature with a soft body."},
        {number: 25, hint: "An animal known for its wool."},
    ],
    v: [
        {number: 4, hint: "A musical instrument with four strings, played with a bow."},
        {number: 10, hint: "An Italian city known for its canals."},
        {number: 14, hint: "The day of the year often associated with love and romance."},
        {number: 18, hint: "A device used for capturing visual images."},
        {number: 23, hint: "A flying mammal."},
    ],
    w: [
        {number: 1, hint: "The large body of salt water that covers most of the earth's surface."},
        {number: 7, hint: "A type of weather condition, often with high speed air."},
        {number: 13, hint: "A character from a popular children's book who lives in the Hundred Acre Wood."},
        {number: 19, hint: "A tool used to clean floors."},
        {number: 25, hint: "A sport played with a black and white ball."},
    ],
    x: [
        {number: 5, hint: "A symbol used to represent a kiss in letters."},
        {number: 10, hint: "A machine used to make copies of documents."},
        {number: 15, hint: "A Greek letter."},
        {number: 20, hint: "A type of ray used in healthcare to look inside the body."},
        {number: 24, hint: "A musical instrument that's struck to make a sound."},
    ],
    y: [
        {number: 3, hint: "An expression of pleasure, success, or excitement."},
        {number: 9, hint: "The yellow part of an egg."},
        {number: 16, hint: "A string-like toy that goes up and down."},
        {number: 22, hint: "A position often used in yoga."},
        {number: 26, hint: "The time period between childhood and adulthood."},
    ],
    z: [
        {number: 2, hint: "A black and white striped animal."},
        {number: 7, hint: "The last letter of the alphabet."},
        {number: 13, hint: "A superhero known for his fast speed."},
        {number: 17, hint: "A place where animals are kept and displayed to the public."},
        {number: 23, hint: "A state of complete silence."},
    ],

};


function getRandomWord() {
    let randomIndex = Math.floor(Math.random() * wordBank.length);
    let randomWord = wordBank[randomIndex];

    let numberDivs = document.querySelectorAll(".Number");
    // Get all hint divs
    let hintDivs = document.querySelectorAll(".hint_text");

    let wordHints = "";
    for (let i = 0; i < randomWord.length; i++) {
        let letter = randomWord[i];

        // Check if the letter exists in the hints object
        if (hints.hasOwnProperty(letter)) {
            let letterHints = hints[letter];
            let hintIndex = Math.floor(Math.random() * letterHints.length);
            let selectedHint = letterHints[hintIndex];

            // Convert letterHints to an array and remove the selected hint
            letterHints = Object.values(letterHints);
            letterHints.splice(hintIndex, 1);
            hints[letter] = letterHints;
            
            // Add the hint to the appropriate div
            if (hintDivs[i]) {
                hintDivs[i].innerText = selectedHint.hint;
            }
            
            // Fill the number divs
            if (numberDivs[i]) {
                numberDivs[i].innerText = selectedHint.number;
            }
        }
    }

    return randomWord;
}

function adjustHintText() {
    const hintEls = document.querySelectorAll('.hint_text');

    hintEls.forEach(el => {
        const words = el.textContent.split(' ');
        if (words.length > 4) {
            el.classList.add('multi-line');
        }
    });
}
document.addEventListener('DOMContentLoaded', adjustHintText);


// Get all input fields
let inputs = document.querySelectorAll('.input');

inputs.forEach((input, index) => {
  input.setAttribute('maxlength', '1'); // Step 1

  // Step 2 & 3
  input.addEventListener('keyup', (e) => {
    if(e.key === "Backspace" && index !== 0) {
      inputs[index - 1].focus();
    } else if(input.value && index !== inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  // Step 4
  input.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^A-Za-z]/g, "").toUpperCase();
  });
});

// Step 5
// Assuming we have 5 attempts and 5 ellipses.
let attempts_collection = Array.from(document.querySelectorAll('.ellipse'));

let attempts = 0;

function markAttempt() {
    if (attempts < attempts_collection.length) {
        attempts_collection[attempts].style.backgroundColor = '#FF0000';
        attempts++;
    }
    if (attempts === attempts_collection.length) {
        alert("You've run out of attempts!");
        window.location.reload();
    }
}

let submitBtn = document.querySelector('.Submit');
submitBtn.style.cursor = 'pointer'; // Style the "Submit" div to look like a button
submitBtn.addEventListener('click', () => {
  let inputWord = Array.from(inputs).map(input => input.value.toLowerCase()).join('');
  if (inputWord === gameWord) {
    alert('Congratulations! You guessed the word correctly.');
  } else {
    markAttempt();
    if (attempts < attempts_collection.length) {
      alert("Sorry, your guess is incorrect. Try again!");
    }
  }
});

window.onload = function() {
    alert(`Welcome to the SEQUENCES game! Please input a letter in each box and press submit. The word is ${gameWord}.`);
}




  let gameWord = getRandomWord();
  console.log("Word:", gameWord.word);
  console.log("Numbers:", gameWord.numberHints);
  console.log("Hints:");
  console.log(gameWord.wordHints);
  