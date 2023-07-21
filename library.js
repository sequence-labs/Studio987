let wordBank = [
    "apple", "chair", "table", "couch", "money", "train", "brush", "horse",
    "heart", "laugh", "sweet", "smile", "dance", "quiet", "piano", "baker",
    "shirt", "light", "water", "honey", "bread", "mouse", "clock", "earth",
    "fruit", "happy", "match", "raven", "sugar", "flame", "cloud", "music",
    "spoon", "spade", "knife"
];


let hints = {
    a: [
        { answer: "Apple", hint: "A popular fruit." },
        { answer: "Arrow", hint: "A weapon used for shooting." },
        { answer: "Actor", hint: "A person who performs in plays or movies." },
        { answer: "Album", hint: "A collection of recorded songs or music." },
        { answer: "Ankle", hint: "The joint connecting the foot and the leg." }
    ],
    b: [
        { answer: "Beach", hint: "A sandy or pebbly shore by the ocean." },
        { answer: "Baker", hint: "A person who bakes bread and pastries." },
        { answer: "Broom", hint: "A cleaning tool with bristles and a long handle." },
        { answer: "Badge", hint: "A small emblem or sign of authority." },
        { answer: "Bacon", hint: "Cured meat often made from pork." }
    ],
    c: [
        { answer: "Cabin", hint: "A small, cozy house in a rural or woodland area." },
        { answer: "Crown", hint: "A decorative headpiece worn by royalty." },
        { answer: "Couch", hint: "A piece of furniture for seating." },
        { answer: "Candy", hint: "Sweet treats often made with sugar." },
        { answer: "Climb", hint: "To ascend or scale a height." }
    ],
    d: [
        { answer: "Dance", hint: "A rhythmic movement of the body." },
        { answer: "Drums", hint: "Musical instruments played with sticks or hands." },
        { answer: "Dress", hint: "A garment worn by females." },
        { answer: "Dough", hint: "A mixture used in baking bread and pastries." },
        { answer: "Diver", hint: "A person who swims underwater using breathing equipment." }
    ],
    e: [
        { answer: "Earth", hint: "The planet we live on." },
        { answer: "Email", hint: "Electronic mail sent over the internet." },
        { answer: "Eagle", hint: "A large bird of prey." },
        { answer: "Easel", hint: "A stand used by artists to hold a canvas." },
        { answer: "Elbow", hint: "The joint between the upper and lower arms." }
    ],
    f: [
        { answer: "Flute", hint: "A musical instrument played by blowing air into it." },
        { answer: "Frame", hint: "A rigid structure that surrounds or supports something." },
        { answer: "Fruit", hint: "A sweet or savory edible plant product." },
        { answer: "Fairy", hint: "A mythical creature often associated with magic." },
        { answer: "Flood", hint: "An overflow of water onto normally dry land." }
    ],
    g: [
        { answer: "Globe", hint: "A spherical representation of the Earth." },
        { answer: "Guitar", hint: "A stringed musical instrument." },
        { answer: "Grass", hint: "Vegetation consisting of narrow leaves." },
        { answer: "Giant", hint: "An imaginary creature of great size." },
        { answer: "Glove", hint: "A covering for the hand." }
    ],
    h: [
        { answer: "Heart", hint: "An organ that pumps blood through the body." },
        { answer: "House", hint: "A building used for human habitation." },
        { answer: "Horse", hint: "A large four-legged mammal often used for riding." },
        { answer: "Honey", hint: "A sweet substance produced by bees." },
        { answer: "Hotel", hint: "An establishment that provides lodging for travelers." }
    ],
    i: [
        { answer: "Igloo", hint: "A dome-shaped dwelling made of snow or ice." },
        { answer: "India", hint: "A country in South Asia." },
        { answer: "Ivory", hint: "A hard white material from elephant tusks." },
        { answer: "Image", hint: "A visual representation or likeness." }
    ],
    j: [
        { answer: "Juice", hint: "A liquid extracted from fruits or vegetables." },
        { answer: "Japan", hint: "A country in East Asia." },
        { answer: "Jelly", hint: "A soft, gelatinous dessert." },
        { answer: "Jewel", hint: "A precious stone or decorative object." },
        { answer: "Joker", hint: "A playing card, often depicted as a jester." }
    ],
    k: [
        { answer: "Koala", hint: "A small, arboreal marsupial native to Australia." },
        { answer: "Kings", hint: "Rulers of a kingdom." },
        { answer: "Knife", hint: "A sharp-edged utensil used for cutting." },
        { answer: "Knees", hint: "The joints connecting the thighs and the lower legs." },
        { answer: "Knots", hint: "Tangled or interlaced pieces of string or rope." }
    ],
    l: [
        { answer: "Lemon", hint: "A yellow citrus fruit with sour juice." },
        { answer: "Lungs", hint: "Pair of organs involved in breathing." },
        { answer: "Lions", hint: "Large predatory cats." },
        { answer: "Llama", hint: "A domesticated South American camelid." },
        { answer: "Lobby", hint: "An entrance hall or public area." }
    ],
    m: [
        { answer: "Music", hint: "An art form that combines sound and rhythm." },
        { answer: "Maple", hint: "A type of tree known for its syrup." },
        { answer: "Mouse", hint: "A small rodent often found in homes." },
        { answer: "Mango", hint: "A tropical fruit with a sweet taste." },
        { answer: "Motor", hint: "A device that converts electrical energy into mechanical motion." }
    ],
    n: [
        { answer: "North", hint: "The direction opposite to south." },
        { answer: "Ninja", hint: "A skilled warrior trained in stealth and combat." },
        { answer: "Nurse", hint: "A person trained to care for the sick or injured." },
        { answer: "Night", hint: "The period of darkness between sunset and sunrise." },
        { answer: "Nylon", hint: "A synthetic material used in textiles." }
    ],
    o: [
        { answer: "Ocean", hint: "A large body of saltwater." },
        { answer: "Orbit", hint: "The path followed by an object around a celestial body." },
        { answer: "Oasis", hint: "A fertile spot in a desert with water and vegetation." },
        { answer: "Olive", hint: "A small fruit often used in cooking and salads." },
        { answer: "Onion", hint: "An edible bulb vegetable." }
    ],
    p: [
        { answer: "Piano", hint: "A musical instrument with keys." },
        { answer: "Paint", hint: "Colored liquid applied to a surface to create art." },
        { answer: "Panda", hint: "A bear-like mammal native to China." },
        { answer: "Puppy", hint: "A young dog." },
        { answer: "Pilot", hint: "A person who operates an aircraft." }
    ],
    q: [
        { answer: "Queen", hint: "The female ruler of a country." },
        { answer: "Quick", hint: "Moving or happening with great speed." },
        { answer: "Quack", hint: "The sound a duck makes." },
        { answer: "Quiet", hint: "Making very little noise or sound." },
        { answer: "Quilt", hint: "A warm bed covering made of layers of fabric." }
    ],
    r: [
        { answer: "Rainy", hint: "Characterized by rainfall." },
        { answer: "Rifle", hint: "A firearm with a long barrel." },
        { answer: "Robot", hint: "A machine designed to perform tasks automatically." },
        { answer: "Rugby", hint: "A contact team sport." },
        { answer: "Rings", hint: "Circular bands worn on fingers or used for decoration." }
    ],
    s: [
        { answer: "Stars", hint: "Luminous celestial bodies." },
        { answer: "Spoon", hint: "An eating or cooking utensil with a small shallow bowl." },
        { answer: "Snake", hint: "A long, legless reptile." },
        { answer: "Storm", hint: "A violent disturbance of the atmosphere." },
        { answer: "Socks", hint: "Garments worn on the feet." }
    ],
    t: [
        { answer: "Table", hint: "A piece of furniture with a flat top and legs." },
        { answer: "Tiger", hint: "A large predatory cat with distinctive stripes." },
        { answer: "Trump", hint: "A card game played with a special deck." },
        { answer: "Toast", hint: "Bread heated until it becomes brown and crispy." },
        { answer: "Teeth", hint: "Hard, white structures in the mouth used for biting and chewing." }
    ],
    u: [
        { answer: "Unzip", hint: "To open or undo a zipper." },
        { answer: "Unity", hint: "The state of being united or joined as a whole." },
        { answer: "Umbra", hint: "The dark central part of a shadow." },
        { answer: "Urban", hint: "Relating to cities or towns." },
        { answer: "Ulcer", hint: "An open sore on the skin or mucous membranes." }
    ],
    v: [
        { answer: "Vegan", hint: "A person who does not consume animal products." },
        { answer: "Vault", hint: "A secure room for storing valuables." },
        { answer: "Virus", hint: "A small infectious agent that replicates inside living cells." },
        { answer: "Viper", hint: "A venomous snake." },
        { answer: "Voice", hint: "The sound produced by humans when speaking or singing." }
    ],
    w: [
        { answer: "Wings", hint: "The appendages used for flying in birds, bats, and insects." },
        { answer: "Whale", hint: "A large marine mammal." },
        { answer: "Water", hint: "A transparent, tasteless liquid essential for life." },
        { answer: "Witch", hint: "A woman believed to have magical powers." },
        { answer: "World", hint: "The planet Earth and all life upon it." }
    ],
    x: [
        { answer: "Xerox", hint: "A brand name for a photocopying machine." },
        { answer: "Xenon", hint: "A chemical element with the symbol Xe." },
        { answer: "Xylophone", hint: "A musical instrument with wooden bars." },
        { answer: "X-ray", hint: "A form of electromagnetic radiation." },
        { answer: "Boxer", hint: "A person who participates in the sport of boxing." }
    ],
    y: [
        { answer: "Yacht", hint: "A recreational boat or ship." },
        { answer: "Yogurt", hint: "A dairy product produced by bacterial fermentation." },
        { answer: "Yodel", hint: "A form of singing involving rapid changes in pitch." },
        { answer: "Yacht", hint: "A recreational boat or ship." },
        { answer: "Yogurt", hint: "A dairy product produced by bacterial fermentation." }
    ],
    z: [
        { answer: "Zebra", hint: "A black and white striped animal." },
        { answer: "Zooey", hint: "A name often given to a female." },
        { answer: "Zebra", hint: "A black and white striped animal." },
        { answer: "Zesty", hint: "Having a strong, pleasant flavor." },
        { answer: "Zombie", hint: "A fictional undead creature." }
    ]
};

let updatedHints = {};

function rearrangeHints(hints) {
    // Collect all hints into a single batch
    let allHints = Object.values(hints).flat();
  
    // Shuffle the hints randomly
    shuffleArray(allHints);
  
    // Clear the updatedHints object
    updatedHints = {};
  
    // Distribute the shuffled hints to respective letters
    allHints.forEach(({ answer, hint }) => {
      const letters = answer.toLowerCase().split('');
      letters.forEach((letter) => {
        if (!updatedHints[letter]) {
          updatedHints[letter] = [];
        }
        updatedHints[letter].push({ answer, hint });
      });
    });
  
    // Check if each letter batch has at least 4 hints
    for (const letter in updatedHints) {
      const letterHints = updatedHints[letter];
      if (letterHints.length < 4) {
        const remainingHints = allHints.filter(({ answer }) => answer.toLowerCase().includes(letter));
        shuffleArray(remainingHints);
        updatedHints[letter] = letterHints.concat(remainingHints.slice(0, 4 - letterHints.length));
      }
    }
  }
  
  // Helper function to shuffle an array randomly
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  // Call rearrangeHints to populate the global updatedHints variable
  rearrangeHints(hints);
  