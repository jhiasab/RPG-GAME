const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const choiceImage = document.querySelector("#choiceImage");

const locations = [
  {
    name: "villagers",
    "button text": ["Fight creatures", "Talk to the elder", ""],
    "button functions": [fightCreatures, talkElder, ],
    text: "You speak to the villagers. They need help defending against creatures and speak of an elder who knows about the artifact."
  },
  {
    name: "forest",
    "button text": ["Follow the ancient map", "Trust the talking animal", "Search the bandit camp"],
    "button functions": [followMap, trustAnimal, searchBandits],
    text: "You enter the mysterious forest, filled with clues and dangers."
  },
  {
    name: "rival",
    "button text": ["Team up", "Fight your rival", "Heed the curse warning"],
    "button functions": [teamUp, fightRival, investigateCurse],
    text: "You confront a rival treasure hunter, who offers a deal and warns of a curse."
  },
  {
    name: "fight",
    "button text": ["Talk to the elder", "Take map", "Go to a rival treasure hunter"],
    "button functions": [talkElder, goForest, goRival],
    text: "You battle the creatures alongside the villagers and win. They give you the choice to talk to the elder or get an ancient map of the Forest passed down by their ancestors. What do you want to do?"
  },
  {
    name: "elder",
    "button text": ["Go to the Forest", "Go to a rival treasure hunter", ""],
    "button functions": [goForest, goRival, ],
    text: "The elder speaks to you and advises you to never trust the animals—they will lead you astray."
  },
  {
    name: "follow map",
    "button text": ["2", "8", "Go back"],
    "button functions": [pickTwo, pickEight, goForest],
    text: "The map leads you to a puzzle. It tells you to pick a number. 3 numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you get led to the treasure."
  },
  {
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "Unfortunate."
  },
  { 
    name: "win", 
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
    "button functions": [restart, restart, restart], 
    text: "Congratulations. You uncover the truth behind the artifact and live to tell the tale." 
  },
  {
    name: "bandit camp",
    "button text": ["Sneak into the camp to gather information.", "Confront the bandits to demand information about the artifact.", ""],
    "button functions": [sneakBandits, confrontBandits, ],
    text: "You find a bandit camp. Which risk do you dare to take?"
  },
  {
    name: "trust animal",
    "button text": ["Continue following the animal", "Go back", ""],
    "button functions": [death, goForest, ],
    text: "You decide to follow the talking animal. The path gets darker and you think twice about doing so. Do you continue to follow the animal?"
  },
  {
    name: "death",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "The animal leads you to a temple. More animals appear and you feel a chill in the air as you pass out. Later on, you awake and notice the world has become gigantic. You are now one of them."
  },
  {
    name: "sneak bandit",
    "button text": ["Continue to hide", "Confront", "Run back to the forest"],
    "button functions": [hideBandits, confrontBandits, goForest],
    text: "You sneak into the camp to gather information. You hear of a puzzle which can lead you straight to the treasure. However, a bandit seems to notice you and starts walking towards your location. What do you do?"
  },
  {
    name: "hide",
    "button text": ["Run back to the Forest", "Find a rival", ""],
    "button functions": [goForest, goRival, ],
    text: "As the bandit is walking towards you, another bandit calls them. The bandit starts to go another direction, giving you the chance to run back to the Forest or find a rival treasure hunter."
  },
  {
    name: "confront",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You decide to confront the bandits. They can't be reasoned with and end up defeating you in a fight. You are now their prisoner... and dinner."
  },
  {
    name: "team up",
    "button text": ["Left", "Right", "Neither. Go straight through the trees."],
    "button functions": [left, right, neither],
    text: "You team up with the rival hunter. Going into the forest, the path divides into two. Left or right?"
  },
  {
    name: "left",
    "button text": ["2", "8", "Go back"],
    "button functions": [pickTwo, pickEight, teamUp],
    text: "You go left and get greeted with a puzzle. It tells you to pick a number. 3 numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you get led to the treasure."
  },
  {
    name: "right",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "The path leads you to an ominous temple. You enter it and feel a chill in the air as you pass out. Later on, you wake up and find animals surrounding you. You find it odd how they are the same height as you... you are now one of them."
  },
  {
    name: "fight rival",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You fight the rival and lose. Unfortunate."
  },
  {
    name: "investigate curse",
    "button text": ["Cave", "Something far", ""],
    "button functions": [cave, right, ],
    text: "You investigate the curse and it leads you to a two paths. One leads to a cave and the other to something you can't make out."
  },
  {
    name: "cave",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You enter the cave and get greeted with a waterfall. You push your way through it and find the treasure. Congratulations. You uncover the truth behind the artifact and live to tell the tale."
  },
];

// initialize buttons
console.log('Script loaded');
button1.onclick = goVillagers;
button2.onclick = goForest;
button3.onclick = goRival;

function update(location) {

  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerHTML = location.text;
}

function goVillagers() {
  update(locations[0]);
}

function goForest() {
  update(locations[1]);
}

function goRival() {
  update(locations[2]);
}

function fightCreatures() {
  update(locations[3]);
}

function talkElder() {
  update(locations[4]);
}

function followMap() {
  update(locations[5]);
}

function trustAnimal() {
  update(locations[9]);
}

function death(){
  update(locations[10]);
  button2.style.display = "none";
  button3.style.display = "none";
}

function searchBandits() {
  update(locations[8]);
}

function sneakBandits() {
update(locations[11]);
}

function hideBandits(){
  update(locations[12]);
  
}

function confrontBandits(){
  update(locations[13]);
}

function teamUp() {
  update(locations[14]);;
}

function fightRival() {
  update(locations[17]);
}

function investigateCurse() {
  update(locations[18]);
}

function left(){
  update(locations[15]);
}

function right(){
  update(locations[16]);
}

function neither(){
  update(locations[7]);
}

function cave(){
  update(locations[19]);
}

//restart
function restart() {
  location.reload();
}


//puzzle
function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}

function pick(guess) {
  const numbers = [];
  while (numbers.length < 3) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText = "You picked " + guess + ". Here are the random numbers:\n" + numbers.join(" - ");
  if (numbers.includes(guess)) {
    text.innerText += "\nRight! A path opens, leading straight to the treasure.";
    button1.innerText = "Continue"; // Change button text for next action
    button1.onclick = () => update(locations[7]); // Update to win state
  } else {
    text.innerText += "\nWrong! A curse envelopes you and eventually kills you.";
    button1.innerText = "Continue"; // Change button text for next action
    button1.onclick = () => update(locations[6]); // Update to lose state
  }
  button2.style.display = "none";
  button3.style.display = "none";
}