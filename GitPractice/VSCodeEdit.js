const array = ["Cat", "Dog", "Dog", "Emu", "Tiger"];

// checks whether an element is even
const dogs = (element) => element === "Dog";

console.log(array.some(dogs));
// expected output: true