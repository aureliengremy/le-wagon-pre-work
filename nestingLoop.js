// Write your code below

let bobsFollowers = ["Charle", "Clair", "Bill", "Phil"];

let tinasFollowers = ["Julie", "Clair", "Phil"];

let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let o = 0; o < tinasFollowers.length; o++) {
    if (bobsFollowers[i] === tinasFollowers[o]) {
      mutualFollowers.push(tinasFollowers[o]);
    }
  }
}

console.log(mutualFollowers);
