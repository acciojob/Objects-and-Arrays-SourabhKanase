const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to the players array
const team = players;

// Create a shallow copy of the players array
const team1 = [...players];

// Create a shallow copy of the person object
const cap1 = Object.assign({}, person);

// Assign the variables to the window object
window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;

// Test the copies
console.log("Original team:", team);
console.log("Copy team1:", team1);
console.log("Copy cap1:", cap1);

// Modifying the original array and object to test edge cases
players.push("Sarah");
person.name = "Jane Smith";

console.log("Modified original team:", team);
console.log("Modified copy team1:", team1);
console.log("Modified copy cap1:", cap1);
