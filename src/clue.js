// ITERATION 1

// Suspects Collection
const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    color: "green",
  },

  {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    color: "white",
  },

  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    color: "purple",
  },

  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    color: "red",
  },

  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    color: "blue",
  },

  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    color: "yellow",
  },
];

// Rooms Collection
const roomsArray = [
  { name: "Dining Room" },
  { name: "Conservatory" },
  { name: "Kitchen" },
  { name: "Study" },
  { name: "Library" },
  { name: "Billiard Room" },
  { name: "Lounge" },
  { name: "Ballroom" },
  { name: "Hall" },
  { name: "Spa" },
  { name: "Living Room" },
  { name: "Observatory" },
  { name: "Theater" },
  { name: "Guest House" },
  { name: "Patio" },
];

// Weapons Collection
const weaponsArray = [
  { name: "rope", weight: 10 },
  { name: "knife", weight: 8 },
  { name: "candlestick", weight: 2 },
  { name: "dumbbell", weight: 30 },
  { name: "poison", weight: 2 },
  { name: "axe", weight: 15 },
  { name: "bat", weight: 13 },
  { name: "trophy", weight: 25 },
  { name: "pistol", weight: 20 },
];

// ITERATION 2
function selectRandom(array) {
  if (array.length === 0) {
    return undefined;
  }

  let randomCard = array[Math.floor(Math.random() * array.length)];

  return randomCard;
}

selectRandom(weaponsArray);

function pickMystery() {
  let suspect = selectRandom(suspectsArray);
  let weapon = selectRandom(weaponsArray);
  let room = selectRandom(roomsArray);

  return { suspect, weapon, room };
}

// ITERATION 3

function revealMystery(object) {
  return `${object.suspect.firstName} ${object.suspect.lastName} killed Mr. Boddy using the ${object.weapon.name} in the ${object.room.name}!`;
}

revealMystery(pickMystery());
