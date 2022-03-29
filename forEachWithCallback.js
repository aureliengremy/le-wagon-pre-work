const fruits = ["mango", "papaya", "pineapple", "apple"];

// Iterate over fruits below
fruits.forEach((fruit) => console.log("I want to eat a " + fruit));

function callFruitOneByOne(el) {
  console.log(el);
}

console.log("Exemple 1:");
fruits.forEach(callFruitOneByOne);

console.log("Exemple 2:");
fruits.forEach((fruit) => callFruitOneByOne(fruit));
