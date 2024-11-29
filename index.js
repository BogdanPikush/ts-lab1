// Utility functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () => chars[randomNumber(0, chars.length - 1)]).join('');
}

// A class to manage users
class User {
  constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
  }

  getDetails() {
      return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
  }

  static generateRandomUser() {
      const name = randomString(7);
      const age = randomNumber(18, 60);
      const email = `${name.toLowerCase()}@example.com`;
      return new User(name, age, email);
  }
}

// A class to manage a group of users
class UserManager {
  constructor() {
      this.users = [];
  }

  addUser(user) {
      this.users.push(user);
  }

  removeUser(email) {
      this.users = this.users.filter(user => user.email !== email);
  }

  findUserByEmail(email) {
      return this.users.find(user => user.email === email);
  }

  listAllUsers() {
      return this.users.map(user => user.getDetails());
  }
}

// Simulation of user management
const userManager = new UserManager();

// Adding random users
for (let i = 0; i < 10; i++) {
  userManager.addUser(User.generateRandomUser());
}

// List all users
console.log('All Users:');
console.log(userManager.listAllUsers());

// Find a specific user
const randomEmail = userManager.users[0].email;
console.log(`\nDetails of user with email ${randomEmail}:`);
console.log(userManager.findUserByEmail(randomEmail)?.getDetails());

// Remove a user
console.log(`\nRemoving user with email ${randomEmail}...`);
userManager.removeUser(randomEmail);

// List all users after removal
console.log('\nAll Users after removal:');
console.log(userManager.listAllUsers());

// Working with promises and async/await
function simulateAsyncOperation(id, delay) {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve(`Operation ${id} completed in ${delay}ms`);
      }, delay);
  });
}

async function performAsyncOperations() {
  console.log('\nStarting async operations...');
  const results = await Promise.all([
      simulateAsyncOperation(1, randomNumber(500, 1500)),
      simulateAsyncOperation(2, randomNumber(500, 1500)),
      simulateAsyncOperation(3, randomNumber(500, 1500))
  ]);
  results.forEach(result => console.log(result));
}

performAsyncOperations();

// Some array manipulations
const numbers = Array.from({ length: 20 }, () => randomNumber(1, 100));

console.log('\nOriginal numbers:');
console.log(numbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('\nEven numbers:');
console.log(evenNumbers);

const squaredNumbers = numbers.map(num => num ** 2);
console.log('\nSquared numbers:');
console.log(squaredNumbers);

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(`\nSum of numbers: ${sum}`);

// DOM manipulation (if in a browser environment)
if (typeof document !== 'undefined') {
  const div = document.createElement('div');
  div.textContent = 'Hello, World!';
  div.style.backgroundColor = 'lightblue';
  div.style.padding = '10px';
  div.style.margin = '10px';
  div.style.border = '1px solid black';
  document.body.appendChild(div);
}
