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
        { answer: "Actor", hint: "A person who performs in plays or movies." },
        { answer: "Album", hint: "A collection of recorded songs or music." },
        { answer: "Ankle", hint: "The joint connecting the foot and the leg." },
        { answer: "Alive", hint: "Having life; not dead." },
        { answer: "Arrow", hint: "A weapon used for shooting." },
        { answer: "Aspen", hint: "A type of tree with smooth, white bark." },
        { answer: "Atlas", hint: "A book of maps or charts." },
        { answer: "Avian", hint: "Relating to birds." },
        { answer: "Aloha", hint: "A Hawaiian greeting or farewell." }
    ],
    b: [
        { answer: "Beach", hint: "A sandy or pebbly shore by the ocean." },
        { answer: "Baker", hint: "A person who bakes bread and pastries." },
        { answer: "Broom", hint: "A cleaning tool with bristles and a long handle." },
        { answer: "Badge", hint: "A small emblem or sign of authority." },
        { answer: "Bacon", hint: "Cured meat often made from pork." },
        { answer: "Bison", hint: "A large, shaggy-haired mammal native to North America." },
        { answer: "Blend", hint: "To mix or combine different elements together." },
        { answer: "Bumpy", hint: "Having uneven surfaces or roughness." },
        { answer: "Bench", hint: "A long seat for multiple people." },
        { answer: "Brief", hint: "Short in duration; concise." }
    ],
    c: [
        { answer: "Cabin", hint: "A small, cozy house in a rural or woodland area." },
        { answer: "Crown", hint: "A decorative headpiece worn by royalty." },
        { answer: "Couch", hint: "A piece of furniture for seating." },
        { answer: "Candy", hint: "Sweet treats often made with sugar." },
        { answer: "Climb", hint: "To ascend or scale a height." },
        { answer: "Cable", hint: "A thick rope or wire for supporting or transmitting power." },
        { answer: "Chirp", hint: "A high-pitched sound made by birds or small insects." },
        { answer: "Chase", hint: "To pursue or follow someone or something." },
        { answer: "Curvy", hint: "Having graceful curves or bends." },
        { answer: "Chime", hint: "A musical sound made by bells or other percussion instruments." }
    ],
    d: [
        { answer: "Dance", hint: "A rhythmic movement of the body." },
        { answer: "Drums", hint: "Musical instruments played with sticks or hands." },
        { answer: "Dress", hint: "A garment worn by females." },
        { answer: "Dough", hint: "A mixture used in baking bread and pastries." },
        { answer: "Diver", hint: "A person who swims underwater using breathing equipment." },
        { answer: "Dairy", hint: "Products made from milk, such as cheese and yogurt." },
        { answer: "Dense", hint: "Having a high concentration of matter or particles." },
        { answer: "Diver", hint: "A person who explores the underwater world for recreational or professional purposes." },
        { answer: "Drama", hint: "A form of storytelling through performance, often on stage." },
        { answer: "Doubt", hint: "Uncertainty or lack of belief in something." }
    ],
    e: [
        { answer: "Earth", hint: "The planet we live on." },
        { answer: "Email", hint: "Electronic mail sent over the internet." },
        { answer: "Eagle", hint: "A large bird of prey." },
        { answer: "Easel", hint: "A stand used by artists to hold a canvas." },
        { answer: "Elbow", hint: "The joint between the upper and lower arms." },
        { answer: "Emote", hint: "To express emotions through facial expressions and gestures." },
        { answer: "Erupt", hint: "To release lava, steam, and gases from a volcano." },
        { answer: "Equal", hint: "Being the same in quantity, size, value, or status." },
        { answer: "Evoke", hint: "To bring a feeling, memory, or image to mind." },
        { answer: "Exile", hint: "To be banished from one's country or home." }
    ],
    f: [
        { answer: "Flute", hint: "A musical instrument played by blowing air into it." },
        { answer: "Frame", hint: "A rigid structure that surrounds or supports something." },
        { answer: "Fruit", hint: "A sweet or savory edible plant product." },
        { answer: "Fairy", hint: "A mythical creature often associated with magic." },
        { answer: "Flood", hint: "An overflow of water onto normally dry land." },
        { answer: "Frown", hint: "To contract the brow, as in displeasure or concentration." },
        { answer: "Fable", hint: "A short story that conveys a moral lesson, often with animals as characters." },
        { answer: "Forge", hint: "To shape metal by heating and hammering." },
        { answer: "Frost", hint: "A layer of ice crystals formed on a surface when the temperature drops below freezing." },
        { answer: "Faint", hint: "To lose consciousness briefly, often due to lack of oxygen or emotions." }
    ],
    g: [
        { answer: "Globe", hint: "A spherical representation of the Earth." },
        { answer: "Grass", hint: "Vegetation consisting of narrow leaves." },
        { answer: "Giant", hint: "An imaginary creature of great size." },
        { answer: "Glove", hint: "A covering for the hand." },
        { answer: "Glaze", hint: "To coat with a thin and shiny surface." },
        { answer: "Guest", hint: "A person who is invited to visit someone's home or attend a social event." },
        { answer: "Giddy", hint: "Feeling light-headed or joyful to the point of disorientation." },
        { answer: "Grain", hint: "Small, hard particles of a substance, such as sand or wheat." },
        { answer: "Guard", hint: "A person or group of people who protect someone or something." }
    ],
    h: [
        { answer: "Heart", hint: "An organ that pumps blood through the body." },
        { answer: "House", hint: "A building used for human habitation." },
        { answer: "Horse", hint: "A large four-legged mammal often used for riding." },
        { answer: "Honey", hint: "A sweet substance produced by bees." },
        { answer: "Hotel", hint: "An establishment that provides lodging for travelers." },
        { answer: "Happy", hint: "Feeling or showing pleasure or contentment." },
        { answer: "Human", hint: "Of or relating to people as opposed to animals or things." },
        { answer: "Heavy", hint: "Having a great weight or density." },
        { answer: "Haste", hint: "Excessive speed or urgency of movement or action." },
        { answer: "Honor", hint: "High respect or esteem; adherence to what is right." }
    ],
    i: [
        { answer: "Igloo", hint: "A dome-shaped dwelling made of snow or ice." },
        { answer: "India", hint: "A country in South Asia." },
        { answer: "Ivory", hint: "A hard white material from elephant tusks." },
        { answer: "Image", hint: "A visual representation or likeness." },
        { answer: "Inked", hint: "Marked or decorated with ink." },
        { answer: "Issue", hint: "An important topic or problem for discussion or debate." },
        { answer: "Inure", hint: "To become accustomed to something undesirable." },
        { answer: "Ionic", hint: "Relating to a classical architectural order." },
        { answer: "Inert", hint: "Lacking the ability or strength to move." },
        { answer: "Ideal", hint: "Conforming to a standard of perfection or excellence." }
    ],
    j: [
        { answer: "Juice", hint: "A liquid extracted from fruits or vegetables." },
        { answer: "Japan", hint: "A country in East Asia." },
        { answer: "Jelly", hint: "A soft, gelatinous dessert." },
        { answer: "Jewel", hint: "A precious stone or decorative object." },
        { answer: "Joker", hint: "A playing card, often depicted as a jester." },
        { answer: "Jumbo", hint: "A term used for something very large or oversized." },
        { answer: "Judge", hint: "A person who presides over a court of law." },
        { answer: "Joint", hint: "A place where two or more things are joined together." },
        { answer: "Joust", hint: "A medieval sport involving mounted knights with lances." },
        { answer: "Jaggy", hint: "Having rough, sharp points or edges." }
    ],
    k: [
        { answer: "Koala", hint: "A small, arboreal marsupial native to Australia." },
        { answer: "Kings", hint: "Rulers of a kingdom." },
        { answer: "Knife", hint: "A sharp-edged utensil used for cutting." },
        { answer: "Knees", hint: "The joints connecting the thighs and the lower legs." },
        { answer: "Knots", hint: "Tangled or interlaced pieces of string or rope." },
        { answer: "Kiosk", hint: "A small enclosed structure often used for selling goods or tickets." },
        { answer: "Kudos", hint: "Praise or acclaim for an achievement." },
        { answer: "Kazoo", hint: "A musical instrument that produces a buzzing sound." },
        { answer: "Kinky", hint: "Involving unusual or unconventional sexual preferences." },
        { answer: "Kitty", hint: "A colloquial term for a small domestic cat." }
    ],
    l: [
        { answer: "Lemon", hint: "A yellow citrus fruit with sour juice." },
        { answer: "Lungs", hint: "Pair of organs involved in breathing." },
        { answer: "Lions", hint: "Large predatory cats." },
        { answer: "Llama", hint: "A domesticated South American camelid." },
        { answer: "Lobby", hint: "An entrance hall or public area." },
        { answer: "Lunar", hint: "Relating to the moon or lunar calendar." },
        { answer: "Loner", hint: "A person who prefers solitude or being alone." },
        { answer: "Leafy", hint: "Covered with or having many leaves." },
        { answer: "Liber", hint: "A book or literary work." },
        { answer: "Ladle", hint: "A large spoon with a long handle used for serving liquids." }
    ],
    m: [
        { answer: "Music", hint: "An art form that combines sound and rhythm." },
        { answer: "Maple", hint: "A type of tree known for its syrup." },
        { answer: "Mouse", hint: "A small rodent often found in homes." },
        { answer: "Mango", hint: "A tropical fruit with a sweet taste." },
        { answer: "Motor", hint: "A device that converts electrical energy into mechanical motion." },
        { answer: "Mouth", hint: "The opening through which humans and animals eat and speak." },
        { answer: "Merry", hint: "Full of cheer and happiness." },
        { answer: "Mound", hint: "A raised area or hill." },
        { answer: "Mural", hint: "A large artwork painted directly on a wall or ceiling." },
        { answer: "Mower", hint: "A machine used for cutting grass." }
    ],
    n: [
        { answer: "North", hint: "The direction opposite to south." },
        { answer: "Ninja", hint: "A skilled warrior trained in stealth and combat." },
        { answer: "Nurse", hint: "A person trained to care for the sick or injured." },
        { answer: "Night", hint: "The period of darkness between sunset and sunrise." },
        { answer: "Nylon", hint: "A synthetic material used in textiles." },
        { answer: "Nymph", hint: "A mythological spirit associated with nature and water." },
        { answer: "Noise", hint: "Unwanted or unpleasant sound." },
        { answer: "Noble", hint: "Having high moral principles and character." },
        { answer: "Novel", hint: "A fictional narrative book." },
        { answer: "Nacre", hint: "A shiny substance found inside mollusk shells." }
    ],
    o: [
        { answer: "Ocean", hint: "A large body of saltwater." },
        { answer: "Oasis", hint: "A fertile spot in a desert with water and vegetation." },
        { answer: "Olive", hint: "A small fruit often used in cooking and salads." },
        { answer: "Onion", hint: "An edible bulb vegetable." },
        { answer: "Otter", hint: "A semiaquatic mammal with webbed feet." },
        { answer: "Opera", hint: "A dramatic performance combining music and singing." },
        { answer: "Orbit", hint: "The path followed by an object around a celestial body." },
        { answer: "Ovule", hint: "A part of the female reproductive organ of a plant." },
        { answer: "Owner", hint: "A person who possesses or holds something." },
        { answer: "Oxeye", hint: "A type of daisy with a dark center." }
    ],
    p: [
        { answer: "Piano", hint: "A musical instrument with keys." },
        { answer: "Paint", hint: "Colored liquid applied to a surface to create art." },
        { answer: "Panda", hint: "A bear-like mammal native to China." },
        { answer: "Puppy", hint: "A young dog." },
        { answer: "Pilot", hint: "A person who operates an aircraft." },
        { answer: "Pluto", hint: "A dwarf planet in our solar system." },
        { answer: "Pizza", hint: "A popular Italian dish with various toppings on a crust." },
        { answer: "Plant", hint: "A living organism that typically grows in soil and uses photosynthesis." },
        { answer: "Porch", hint: "A covered structure at the entrance of a building." },
        { answer: "Prize", hint: "Something given as a reward for winning a competition or game." }
    ],
    q: [
        { answer: "Queen", hint: "The female ruler of a country." },
        { answer: "Quick", hint: "Moving or happening with great speed." },
        { answer: "Quack", hint: "The sound a duck makes." },
        { answer: "Quiet", hint: "Making very little noise or sound." },
        { answer: "Quilt", hint: "A warm bed covering made of layers of fabric." },
        { answer: "Quest", hint: "A journey or expedition in pursuit of a goal." },
        { answer: "Quake", hint: "A shaking or trembling of the ground, often caused by an earthquake." },
        { answer: "Quirk", hint: "An unusual or peculiar behavior or trait." },
        { answer: "Quota", hint: "A prescribed or limited quantity of something." },
        { answer: "Quote", hint: "A repetition of someone else's statement or thoughts." }
    ],
    r: [
        { answer: "Rainy", hint: "Characterized by rainfall." },
        { answer: "Rifle", hint: "A firearm with a long barrel." },
        { answer: "Robot", hint: "A machine designed to perform tasks automatically." },
        { answer: "Rugby", hint: "A contact team sport." },
        { answer: "Rings", hint: "Circular bands worn on fingers or used for decoration." },
        { answer: "River", hint: "A natural flowing watercourse." },
        { answer: "Radio", hint: "A device used for transmitting and receiving signals." },
        { answer: "Route", hint: "A way or course taken to reach a destination." },
        { answer: "Radar", hint: "A system for detecting distant objects by reflection of radio waves." },
        { answer: "Ramen", hint: "A Japanese noodle soup dish." }
    ],
    s: [
        { answer: "Stars", hint: "Luminous celestial bodies." },
        { answer: "Snake", hint: "A long, legless reptile." },
        { answer: "Socks", hint: "Garments worn on the feet." },
        { answer: "Spoon", hint: "An eating or cooking utensil with a small shallow bowl." },
        { answer: "Storm", hint: "A violent disturbance of the atmosphere." },
        { answer: "Silver", hint: "A precious metal with symbol Ag." },
        { answer: "Snail", hint: "A slow-moving mollusk with a spiral shell." },
        { answer: "Sword", hint: "A weapon with a long blade." },
        { answer: "Space", hint: "The vast expanse beyond Earth's atmosphere." }
    ],
    t: [
        { answer: "Table", hint: "A piece of furniture with a flat top and legs." },
        { answer: "Tiger", hint: "A large predatory cat with distinctive stripes." },
        { answer: "Trump", hint: "A card game played with a special deck." },
        { answer: "Toast", hint: "Bread heated until it becomes brown and crispy." },
        { answer: "Teeth", hint: "Hard, white structures in the mouth used for biting and chewing." },
        { answer: "Torch", hint: "A portable source of light with a flame." },
        { answer: "Tulip", hint: "A colorful spring flower with cup-shaped petals." },
        { answer: "Tango", hint: "A passionate and dramatic ballroom dance." },
        { answer: "Tread", hint: "To step or walk on a surface." },
        { answer: "Truck", hint: "A large motor vehicle used for transporting goods." }
    ],
    u: [
        { answer: "Unzip", hint: "To open or undo a zipper." },
        { answer: "Unity", hint: "The state of being united or joined as a whole." },
        { answer: "Umbra", hint: "The dark central part of a shadow." },
        { answer: "Urban", hint: "Relating to cities or towns." },
        { answer: "Ulcer", hint: "An open sore on the skin or mucous membranes." },
        { answer: "Ulnar", hint: "Related to the ulna, a bone in the forearm." },
        { answer: "Usher", hint: "To guide or show someone to a place or event." },
        { answer: "Usual", hint: "Commonly occurring or happening." },
        { answer: "Uvula", hint: "A fleshy structure in the back of the throat." },
        { answer: "Utter", hint: "To speak or express something aloud." }
    ],
    v: [
        { answer: "Vegan", hint: "A person who does not consume animal products." },
        { answer: "Vault", hint: "A secure room for storing valuables." },
        { answer: "Virus", hint: "A small infectious agent that replicates inside living cells." },
        { answer: "Viper", hint: "A venomous snake." },
        { answer: "Voice", hint: "The sound produced by humans when speaking or singing." },
        { answer: "Vivid", hint: "Bright, intense, and full of life." },
        { answer: "Vocal", hint: "Relating to the voice or singing." },
        { answer: "Vista", hint: "A pleasing view, often of a landscape or cityscape." },
        { answer: "Vodka", hint: "A clear alcoholic beverage made from fermented grains or potatoes." },
        { answer: "Vegan", hint: "A person who does not consume animal products." }
    ],
    w: [
        { answer: "Wings", hint: "The appendages used for flying in birds, bats, and insects." },
        { answer: "Whale", hint: "A large marine mammal." },
        { answer: "Water", hint: "A transparent, tasteless liquid essential for life." },
        { answer: "Witch", hint: "A woman believed to have magical powers." },
        { answer: "World", hint: "The planet Earth and all life upon it." },
        { answer: "Windy", hint: "Characterized by strong winds or breezes." },
        { answer: "Waltz", hint: "A ballroom dance in triple time." },
        { answer: "Woven", hint: "Made by interlacing threads together." },
        { answer: "Wrist", hint: "The joint connecting the hand and the forearm." },
        { answer: "Wheat", hint: "A cereal plant cultivated for its grain." }
    ],
    x: [
        { answer: "Exxon", hint: "A multinational oil and gas corporation." },
        { answer: "Xebec", hint: "A type of sailing vessel." },
        { answer: "Xylan", hint: "A polysaccharide found in plant cell walls." },
        { answer: "Xenon", hint: "A chemical element with the symbol Xe." },
        { answer: "Xerox", hint: "A brand name for a photocopying machine." },
        { answer: "Xerus", hint: "A genus of African ground squirrels." },
        { answer: "Xeric", hint: "Having a dry, arid climate or environment." },
        { answer: "Xysti", hint: "Plural of xystus, an ancient covered portico." },
        { answer: "Xylol", hint: "A clear, colorless, flammable liquid hydrocarbon." }
    ],
    y: [
        { answer: "Yucca", hint: "A genus of plants with stiff, sword-like leaves." },
        { answer: "Yield", hint: "To produce or provide a result." },
        { answer: "Yamen", hint: "The official residence or office of a Chinese government official." },
        { answer: "Yogic", hint: "Relating to yoga practices or principles." },
        { answer: "Yappy", hint: "Describing a small dog that barks a lot." },
        { answer: "Yacht", hint: "A recreational boat or ship." },
        { answer: "Yakka", hint: "Australian slang for hard work or manual labor." },
        { answer: "Yurta", hint: "A traditional portable dwelling used by nomadic people in Central Asia." },
        { answer: "Yowza", hint: "An exclamation of surprise or excitement." },
        { answer: "Yowie", hint: "An Australian mythical creature similar to Bigfoot." }
    ],
    z: [
        { answer: "Zesty", hint: "Having a strong, pleasant flavor." },
        { answer: "Zaire", hint: "Former name of the Democratic Republic of the Congo." },
        { answer: "Zippy", hint: "Full of energy and enthusiasm." },
        { answer: "Zinke", hint: "The last name of a former U.S. Secretary of the Interior." },
        { answer: "Zaire", hint: "Former name of the Democratic Republic of the Congo." },
        { answer: "Zonal", hint: "Relating to or organized by zones." },
        { answer: "Zesty", hint: "Having a strong, pleasant flavor." },
        { answer: "Zaire", hint: "Former name of the Democratic Republic of the Congo." },
        { answer: "Zippy", hint: "Full of energy and enthusiasm." },
        { answer: "Zinke", hint: "The last name of a former U.S. Secretary of the Interior." }
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
