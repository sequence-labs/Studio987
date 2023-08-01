let wordBank = [
    "apple", "arrow", "beach", "brick", "candy", "chair", "clock", "cloud", "dance", "earth",
    "fairy", "flame", "fruit", "ghost", "happy", "house", "juice", "light", "magic", "music",
    "ocean", "panda", "pizza", "queen", "quiet", "river", "smile", "space", "stone", "sunny",
    "tiger", "train", "voice", "water", "wheel", "white", "album", "angel", "bacon", "bread",
    "brush", "cakey", "cloud", "crown", "drama", "early", "fairy", "fancy", "flora", "funny",
    "glass", "glaze", "globe", "happy", "horse", "jelly", "jumbo", "kitty", "lemon", "light",
    "mango", "metal", "ninja", "north", "panda", "peach", "pearl", "plant", "pulse", "quiet",
    "radio", "river", "salad", "shark", "sheep", "shoes", "smile", "snake", "socks", "spark",
    "storm", "sunny", "sweet", "tiger", "train", "trick", "tulip", "umbra", "unity", "video",
    "voice", "watch", "water", "whisk", "wings", "wrist", "yacht", "yummy", "zebra", "zesty"
];



let hints = {
    a: [
        { answer: "Apple", hint: "A popular fruit." },
        { answer: "Actor", hint: "A person who performs in plays or movies." },
        { answer: "Album", hint: "A collection of recorded songs or music." },
        { answer: "Arrow", hint: "A weapon used for shooting." },
        { answer: "Alive", hint: "Having life; not dead." }
    ],
    b: [
        { answer: "Beach", hint: "A sandy or pebbly shore by the ocean." },
        { answer: "Baker", hint: "A person who bakes bread and pastries." },
        { answer: "Broom", hint: "A cleaning tool with bristles and a long handle." },
        { answer: "Badge", hint: "A small emblem or sign of authority." },
        { answer: "Blend", hint: "To mix or combine different elements together." }
    ],
    c: [
        { answer: "Cabin", hint: "A small, cozy house in a rural or woodland area." },
        { answer: "Crown", hint: "A decorative headpiece worn by royalty." },
        { answer: "Couch", hint: "A piece of furniture for seating." },
        { answer: "Candy", hint: "Sweet treats often made with sugar." },
        { answer: "Chirp", hint: "A high-pitched sound made by birds or small insects." }
    ],
    d: [
        { answer: "Dance", hint: "A rhythmic movement of the body." },
        { answer: "Drums", hint: "Musical instruments played with sticks or hands." },
        { answer: "Dress", hint: "A garment worn by females." },
        { answer: "Dough", hint: "A mixture used in baking bread and pastries." },
        { answer: "Drama", hint: "A form of storytelling through performance, often on stage." }
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
        { answer: "Fairy", hint: "A mythical creature often associated with magic." }
    ],
    g: [
        { answer: "Globe", hint: "A spherical representation of the Earth." },
        { answer: "Grass", hint: "Vegetation consisting of narrow leaves." },
        { answer: "Giant", hint: "An imaginary creature of great size." },
        { answer: "Glove", hint: "A covering for the hand." },
        { answer: "Glaze", hint: "To coat with a thin and shiny surface." }
    ],
    h: [
        { answer: "Heart", hint: "An organ that pumps blood through the body." },
        { answer: "House", hint: "A building used for human habitation." },
        { answer: "Horse", hint: "A large four-legged mammal often used for riding." },
        { answer: "Honey", hint: "A sweet substance produced by bees." },
        { answer: "Happy", hint: "Feeling or showing pleasure or contentment." }
    ],
    i: [
        { answer: "Igloo", hint: "A dome-shaped dwelling made of snow or ice." },
        { answer: "India", hint: "A country in South Asia." },
        { answer: "Ivory", hint: "A hard white material from elephant tusks." },
        { answer: "Image", hint: "A visual representation or likeness." },
        { answer: "Inked", hint: "Marked or decorated with ink." }
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
        { answer: "Nylon", hint: "A synthetic polymer often used in fabrics." }
    ],
    o: [
        { answer: "Olive", hint: "A small bitter fruit often used to produce oil." },
        { answer: "Ocean", hint: "A vast body of saltwater." },
        { answer: "Onion", hint: "A pungent edible bulb." },
        { answer: "Oasis", hint: "A fertile spot in a desert where water is found." },
        { answer: "Orbit", hint: "The path followed by an object in space." }
    ],
    p: [
        { answer: "Paint", hint: "A colored substance used for creating art." },
        { answer: "Panda", hint: "A bear-like mammal native to China." },
        { answer: "Piano", hint: "A musical instrument with black and white keys." },
        { answer: "Pizza", hint: "A popular Italian dish with a round crust and toppings." },
        { answer: "Puppy", hint: "A young dog." }
    ],
    q: [
        { answer: "Quiet", hint: "Making very little noise." },
        { answer: "Quack", hint: "The sound a duck makes." },
        { answer: "Quick", hint: "Moving with great speed." },
        { answer: "Queen", hint: "The female ruler of a kingdom." },
        { answer: "Quote", hint: "A repetition of someone else's statement or thoughts." }
    ],
    r: [
        { answer: "Rainy", hint: "Characterized by rain." },
        { answer: "Ruler", hint: "A measuring instrument with straight edges." },
        { answer: "Radar", hint: "A system for detecting distant objects." },
        { answer: "Robot", hint: "A mechanical device programmed to perform tasks." },
        { answer: "Rapid", hint: "Happening or done quickly." }
    ],
    s: [
        { answer: "Sunny", hint: "Characterized by sunshine." },
        { answer: "Snake", hint: "A long, legless reptile." },
        { answer: "Smile", hint: "An expression of happiness or amusement." },
        { answer: "Spoon", hint: "A utensil with a small bowl and a long handle." },
        { answer: "Spark", hint: "A small fiery particle." }
    ],
    t: [
        { answer: "Tiger", hint: "A large predatory cat with distinctive stripes." },
        { answer: "Table", hint: "A piece of furniture with a flat top and legs." },
        { answer: "Teeth", hint: "Hard white structures in the mouth used for chewing." },
        { answer: "Torch", hint: "A portable light source with an open flame." },
        { answer: "Tiger", hint: "A large predatory cat with distinctive stripes." }
    ],
    u: [
        { answer: "Umbra", hint: "The fully shaded inner region of a shadow." },
        { answer: "Unity", hint: "The state of being united or forming a whole." },
        { answer: "Usual", hint: "Customary or habitual." },
        { answer: "Urchin", hint: "A small spiny marine creature." },
        { answer: "Usher", hint: "A person who shows people to their seats." }
    ],
    v: [
        { answer: "Venus", hint: "The second planet from the sun." },
        { answer: "Voice", hint: "The sound produced by humans or animals." },
        { answer: "Video", hint: "Moving images shown on a screen." },
        { answer: "Virus", hint: "A microscopic infectious agent." },
        { answer: "Vocal", hint: "Relating to the voice or speech." }
    ],
    w: [
        { answer: "Water", hint: "A colorless, transparent liquid essential for life." },
        { answer: "Watch", hint: "A timekeeping device worn on the wrist." },
        { answer: "Whale", hint: "A large marine mammal." },
        { answer: "Wrist", hint: "The joint connecting the hand and the arm." },
        { answer: "Waltz", hint: "A ballroom dance in triple time." }
    ],
    x: [
        { answer: "Xenon", hint: "A chemical element with the symbol Xe." },
        { answer: "Xerox", hint: "A brand name for photocopiers." },
        { answer: "Xylog", hint: "A piece of wood." },
        { answer: "Xylan", hint: "A type of hemicellulose." },
        { answer: "Xerus", hint: "A genus of ground squirrels." }
    ],
    y: [
        { answer: "Yield", hint: "To produce or provide a result." },
        { answer: "Yacht", hint: "A recreational boat or ship." },
        { answer: "Yummy", hint: "Delicious and pleasing to the taste." },
        { answer: "Young", hint: "In the early stage of life or growth." },
        { answer: "Yeast", hint: "A type of fungus used in baking." }
    ],
    z: [
        { answer: "Zesty", hint: "Having a strong, pleasant flavor." },
        { answer: "Zebra", hint: "A black and white striped African mammal." },
        { answer: "Zappy", hint: "Full of energy or enthusiasm." },
        { answer: "Zoned", hint: "Divided into areas or zones." },
        { answer: "Zaire", hint: "Former name of the Democratic Republic of the Congo." }
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
