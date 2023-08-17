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
        { answer: "apple", hint: "A round fruit with red or green skin." },
        { answer: "alive", hint: "Being full of life and energy." },
        { answer: "angel", hint: "A spiritual being often depicted with wings." },
        { answer: "alarm", hint: "A device that makes a loud noise to wake you up." },
        { answer: "acorn", hint: "A small nut that comes from an oak tree." },
        { answer: "apron", hint: "A protective garment worn while cooking." },
        { answer: "ankle", hint: "The joint connecting your foot to your leg." },
        { answer: "alien", hint: "A creature from another planet." },
        { answer: "arrow", hint: "A thin, pointed stick shot from a bow." }
    ],
    b: [
        { answer: "beach", hint: "A sandy shore by the ocean." },
        { answer: "birdy", hint: "A cute name for a small feathered creature." },
        { answer: "bunny", hint: "A hopping animal with long ears." },
        { answer: "brave", hint: "Not afraid to face challenges." },
        { answer: "brush", hint: "An object used to clean or style hair." },
        { answer: "brick", hint: "A rectangular building block made of clay." },
        { answer: "broom", hint: "A tool used for sweeping the floor." },
        { answer: "badge", hint: "A small emblem that shows identity or rank." },
        { answer: "baker", hint: "A person who makes delicious baked goods." },
        { answer: "beard", hint: "Hair that grows on a man's face." }
    ],
    c: [
        { answer: "cloud", hint: "White fluffy thing in the sky." },
        { answer: "candy", hint: "Sweet treats that you love to eat." },
        { answer: "cheer", hint: "Shouting to show happiness and support." },
        { answer: "couch", hint: "A comfy piece of furniture for sitting." },
        { answer: "climb", hint: "To go up something, like a tree or a mountain." },
        { answer: "crowd", hint: "A large group of people gathered together." },
        { answer: "curve", hint: "A line that gently bends or arches." },
        { answer: "clock", hint: "A device that tells you the time." }
    ],
    d: [
        { answer: "daisy", hint: "A simple flower with white petals and a yellow center." },
        { answer: "dough", hint: "The mix used to make bread and cookies." },
        { answer: "drums", hint: "Instruments you hit to make music." },
        { answer: "dance", hint: "Moving your body to music." },
        { answer: "dream", hint: "A story your mind creates while you sleep." },
        { answer: "dirty", hint: "When something is covered in mud or dust." },
        { answer: "drape", hint: "A piece of cloth hung over something." },
        { answer: "drive", hint: "Operating a vehicle to go somewhere." },
        { answer: "drink", hint: "What you do when you're thirsty." }
    ],
    e: [
        { answer: "earth", hint: "The planet we live on." },
        { answer: "email", hint: "A message you send using the computer." },
        { answer: "eagle", hint: "A big bird that soars high in the sky." },
        { answer: "early", hint: "Before the expected or usual time." },
        { answer: "elbow", hint: "The bend in the middle of your arm." },
        { answer: "empty", hint: "Having nothing inside." },
        { answer: "enjoy", hint: "To take pleasure in something." },
        { answer: "erase", hint: "To remove something you've written." },
        { answer: "event", hint: "A happening or occurrence." },
        { answer: "exact", hint: "Precise and accurate." }
    ],
    f: [
        { answer: "fruit", hint: "Delicious and healthy things to eat." },
        { answer: "fairy", hint: "A tiny magical creature with wings." },
        { answer: "flame", hint: "The hot, glowing thing on a candle." },
        { answer: "funny", hint: "Something that makes you laugh." },
        { answer: "flock", hint: "A group of birds flying together." },
        { answer: "float", hint: "To stay on the surface of water." },
        { answer: "fluff", hint: "Soft and light pieces of material." },
        { answer: "frown", hint: "Turning your mouth downward to show unhappiness." },
        { answer: "frame", hint: "A structure that holds a picture or mirror." },
        { answer: "frost", hint: "Ice crystals that form on cold surfaces." }
    ],
    g: [
        { answer: "globe", hint: "A model of the Earth." },
        { answer: "giant", hint: "A really big person or thing." },
        { answer: "glaze", hint: "A shiny coating on pottery or donuts." },
        { answer: "grape", hint: "A small round fruit you can eat." },
        { answer: "grass", hint: "The green stuff that grows in your yard." },
        { answer: "greet", hint: "To say hello to someone." },
        { answer: "guard", hint: "Someone who protects or watches over something." },
        { answer: "guess", hint: "To try and figure something out." },
        { answer: "guide", hint: "Someone who shows you the way." }
    ],
    h: [
        { answer: "heart", hint: "The organ that pumps blood." },
        { answer: "happy", hint: "Feeling full of joy." },
        { answer: "horse", hint: "A big animal you can ride." },
        { answer: "honey", hint: "A sweet, sticky substance made by bees." },
        { answer: "house", hint: "A place where you live." },
        { answer: "hurry", hint: "To do something quickly." },
        { answer: "hatch", hint: "When a baby bird comes out of its egg." },
        { answer: "happy", hint: "Feeling joyful and content." },
        { answer: "human", hint: "What we all are." }
    ],
    i: [
        { answer: "island", hint: "A piece of land surrounded by water." },
        { answer: "igloo", hint: "A house made of ice and snow." },
        { answer: "ivory", hint: "A hard white material from elephant tusks." },
        { answer: "image", hint: "A picture or representation." },
        { answer: "inbox", hint: "Where your emails arrive." },
        { answer: "issue", hint: "An important topic or problem." },
        { answer: "ideal", hint: "The perfect situation or thing." },
        { answer: "itchy", hint: "When your skin feels scratchy." }
    ],
    j: [
        { answer: "juice", hint: "A drink made from squeezing fruit." },
        { answer: "jelly", hint: "A sweet and wobbly treat." },
        { answer: "judge", hint: "Someone who decides in a contest." },
        { answer: "joint", hint: "Where two bones meet in your body." },
        { answer: "japan", hint: "A country known for sushi and cherry blossoms." },
        { answer: "joust", hint: "A medieval contest on horseback." }
    ],
    k: [
        { answer: "koala", hint: "A furry animal from Australia." },
        { answer: "kneel", hint: "To bend your legs and rest on your knees." },
        { answer: "knight", hint: "A person in armor who protects the king." },
        { answer: "knife", hint: "A tool for cutting food." },
        { answer: "knock", hint: "To hit a door to get someone's attention." },
        { answer: "kiosk", hint: "A small stand where you can buy things." },
        { answer: "kites", hint: "Colorful toys you fly in the sky." }
    ],
    l: [
        { answer: "light", hint: "The thing that lets you see in the dark." },
        { answer: "lucky", hint: "Having good things happen by chance." },
        { answer: "lemon", hint: "A sour yellow fruit." },
        { answer: "lunch", hint: "A meal you eat in the middle of the day." },
        { answer: "lions", hint: "Big cats that roar in the jungle." },
        { answer: "lunar", hint: "Relating to the moon." },
        { answer: "lakes", hint: "Large bodies of water." },
        { answer: "large", hint: "When something is big in size." }
    ],
    m: [
        { answer: "music", hint: "Sounds that make you want to dance." },
        { answer: "magic", hint: "The power to make impossible things happen." },
        { answer: "mango", hint: "A tropical fruit with sweet orange flesh." },
        { answer: "mouse", hint: "A small furry animal that squeaks." },
        { answer: "melon", hint: "A juicy fruit with a hard rind." },
        { answer: "march", hint: "To walk with regular steps." },
        { answer: "money", hint: "What you use to buy things." }
    ],
    n: [
        { answer: "north", hint: "The direction that's towards the top of a map." },
        { answer: "night", hint: "The time when the sun is down." },
        { answer: "nurse", hint: "Someone who takes care of sick people." },
        { answer: "noise", hint: "Loud or soft sounds." },
        { answer: "naive", hint: "Lacking experience or wisdom." },
        { answer: "ninja", hint: "A skilled warrior who moves silently." },
        { answer: "needy", hint: "Requiring a lot of attention or help." },
        { answer: "novel", hint: "A fictional story." },
        { answer: "night", hint: "When the stars come out and it gets dark." },
        { answer: "noble", hint: "Having high moral qualities." }
    ],
    o: [
        { answer: "ocean", hint: "A big body of saltwater." },
        { answer: "olive", hint: "A small fruit used to make oil." },
        { answer: "onion", hint: "A vegetable that can make you cry." },
        { answer: "organ", hint: "A part of your body that does a specific job." },
        { answer: "ounce", hint: "A small unit of weight." },
        { answer: "orbit", hint: "The path a planet takes around the sun." },
        { answer: "often", hint: "Something that happens many times." }
    ],
    p: [
        { answer: "panda", hint: "A black and white bear from China." },
        { answer: "pizza", hint: "A round, cheesy, and delicious meal." },
        { answer: "peace", hint: "A state of calm and quiet." },
        { answer: "puppy", hint: "A baby dog." },
        { answer: "piano", hint: "A musical instrument with black and white keys." },
        { answer: "plant", hint: "Something that grows in the ground." },
        { answer: "pride", hint: "Feeling good about yourself." },
        { answer: "prize", hint: "Something you win." },
        { answer: "pouch", hint: "A small bag or pocket." }
    ],
    q: [
        { answer: "queen", hint: "A woman who rules a kingdom." },
        { answer: "quiet", hint: "When it's very silent." },
        { answer: "quack", hint: "The sound a duck makes." },
        { answer: "quick", hint: "When something happens fast." },
        { answer: "quilt", hint: "A warm blanket made of patches." },
        { answer: "quest", hint: "A long journey in search of something." },
        { answer: "quill", hint: "A feather used for writing." },
        { answer: "quart", hint: "A unit of liquid measurement." },
        { answer: "quail", hint: "A small bird often found in the woods." }
    ],
    r: [
        { answer: "rainy", hint: "When water falls from the sky." },
        { answer: "robin", hint: "A small bird with a red breast." },
        { answer: "ruler", hint: "A tool for measuring length." },
        { answer: "ranch", hint: "A large farm for animals." },
        { answer: "rhino", hint: "A large animal with a horn on its nose." },
        { answer: "radio", hint: "A device that plays music and news." },
        { answer: "robot", hint: "A machine that can do tasks on its own." },
        { answer: "river", hint: "A large flowing body of water." },
        { answer: "round", hint: "Having a curved shape." },
        { answer: "rider", hint: "Someone who uses a vehicle." }
    ],
    s: [
        { answer: "smile", hint: "A happy expression on your face." },
        { answer: "sunny", hint: "When the sky is clear and bright." },
        { answer: "sugar", hint: "A sweet substance used to flavor food." },
        { answer: "sheep", hint: "A fluffy animal that gives wool." },
        { answer: "spoon", hint: "A tool you use to eat soup." },
        { answer: "snake", hint: "A long reptile that slithers." },
        { answer: "storm", hint: "When the weather is wild and rainy." },
        { answer: "skate", hint: "To glide on ice with special shoes." },
        { answer: "shiny", hint: "Something that reflects light." },
        { answer: "story", hint: "A tale of events, real or imagined." }
    ],
    t: [
        { answer: "table", hint: "A piece of furniture for eating or working." },
        { answer: "tiger", hint: "A big cat with orange fur and black stripes." },
        { answer: "toast", hint: "Bread that's been heated until brown." },
        { answer: "teeth", hint: "Hard things in your mouth you use to chew." },
        { answer: "train", hint: "A long line of connected cars on tracks." },
        { answer: "truck", hint: "A big vehicle for carrying things." },
        { answer: "tired", hint: "When you need rest." },
        { answer: "trunk", hint: "The back part of an elephant's body." },
        { answer: "tools", hint: "Things you use to fix or build things." },
        { answer: "treat", hint: "A special reward you enjoy." }
    ],
    u: [
        { answer: "under", hint: "Beneath or below something." },
        { answer: "upset", hint: "Feeling sad or frustrated." },
        { answer: "udder", hint: "A cow's milk-making body part." },
        { answer: "uncle", hint: "Your parent's brother." },
        { answer: "unity", hint: "When people work together." },
        { answer: "urban", hint: "Relating to a city or town." },
    ],
    v: [
        { answer: "vivid", hint: "Bright, colorful, and lively." },
        { answer: "voice", hint: "The sound you make when you talk." },
        { answer: "video", hint: "Moving pictures on a screen." },
        { answer: "virus", hint: "A tiny germ that can make you sick." },
        { answer: "visit", hint: "To go see someone." },
        { answer: "vowel", hint: "The letters A, E, I, O, U." },
        { answer: "vital", hint: "Absolutely necessary or important." },
        { answer: "value", hint: "How much something is worth." },
    ],
    w: [
        { answer: "water", hint: "Clear liquid that you drink." },
        { answer: "whale", hint: "A huge creature that lives in the sea." },
        { answer: "wings", hint: "Things birds use to fly." },
        { answer: "waste", hint: "Unwanted things you throw away." },
        { answer: "wrist", hint: "The joint that connects your hand to your arm." },
        { answer: "worry", hint: "Thinking about problems and fears." },
        { answer: "watch", hint: "A device for telling time." },
        { answer: "wheat", hint: "A type of grain used to make bread." },
        { answer: "weave", hint: "To create cloth by interlacing threads." },
        { answer: "waste", hint: "Things that are thrown away." }
    ],
    x: [
        { answer: "xerox", hint: "A brand of copy machine." }
    ],
    y: [
        { answer: "young", hint: "Not old." },
        { answer: "yacht", hint: "A fancy boat for sailing." }
    ],
    z: [
        { answer: "zebra", hint: "A black and white striped animal." }
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
