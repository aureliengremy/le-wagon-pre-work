// Method
let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

// Write your code below
let alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};

alienShip.retreat();
alienShip.takeOff();

// Nested Object
let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};

let capFave = (spaceship.crew.captain["favorite foods"][0] = "Soja Milk");

spaceship.passengers = [
  {
    name: "Eliot Read",
    ID: 834921,
    luggage: ["old CD from Earth", "Galactic Toys", "Old paper books"],
  },
  {
    name: "Mary Gold",
    ID: 664837,
    luggage: ["Guns", "Flowers", "Body painting"],
  },
];

console.log(spaceship.passengers);

// Pass by reference
let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};

// Write your code below
let greenEnergy = (obj) => {
  obj["Fuel Type"] = "avocado oil";
};

let remotelyDisable = (obj) => {
  obj.disabled = true;
};

greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);

// Loop through Objects
let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

// Write your code below
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember} : ${spaceship.crew[crewMember].name}`);
}

for (let crewDegree in spaceship.crew) {
  console.log(
    `${spaceship.crew[crewDegree].name} : ${spaceship.crew[crewDegree].degree}`
  );
}
