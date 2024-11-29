/**
 * Generates a random number between min and max (inclusive).
 * @param {number} min - The minimum number.
 * @param {number} max - The maximum number.
 * @returns {number} A random number between min and max.
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
* Generates a random alphanumeric string of the given length.
* @param {number} length - The length of the string.
* @returns {string} A random string of the specified length.
*/
function randomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () => chars[randomNumber(0, chars.length - 1)]).join('');
}

/**
* Represents a User.
*/
class User {
  /**
   * @param {string} name - The user's name.
   * @param {number} age - The user's age.
   * @param {string} email - The user's email.
   */
  constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
  }

  /**
   * Gets the user's details as a string.
   * @returns {string} The user's details.
   */
  getDetails() {
      return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
  }

  /**
   * Generates a random user.
   * @returns {User} A new User instance with random data.
   */
  static generateRandomUser() {
      const name = randomString(7);
      const age = randomNumber(18, 60);
      const email = `${name.toLowerCase()}@example.com`;
      return new User(name, age, email);
  }
}

/**
* Manages a collection of users.
*/
class UserManager {
  constructor() {
      /** @type {User[]} */
      this.users = [];
  }

  /**
   * Adds a user to the manager.
   * @param {User} user - The user to add.
   */
  addUser(user) {
      this.users.push(user);
  }

  /**
   * Removes a user by email.
   * @param {string} email - The email of the user to remove.
   */
  removeUser(email) {
      this.users = this.users.filter(user => user.email !== email);
  }

  /**
   * Finds a user by email.
   * @param {string} email - The email to search for.
   * @returns {User|undefined} The user with the given email, or undefined if not found.
   */
  findUserByEmail(email) {
      return this.users.find(user => user.email === email);
  }

  /**
   * Lists all users in the manager.
   * @returns {string[]} An array of user details as strings.
   */
  listAllUsers() {
      return this.users.map(user => user.getDetails());
  }
}

const userManager = new UserManager();

for (let i = 0; i < 10; i++) {
  userManager.addUser(User.generateRandomUser());
}

console.log('All Users:');
console.log(userManager.listAllUsers());

const randomEmail = userManager.users[0].email;
console.log(`\nDetails of user with email ${randomEmail}:`);
console.log(userManager.findUserByEmail(randomEmail)?.getDetails());

console.log(`\nRemoving user with email ${randomEmail}...`);
userManager.removeUser(randomEmail);

console.log('\nAll Users after removal:');
console.log(userManager.listAllUsers());

/**
* Simulates an asynchronous operation.
* @param {number} id - The ID of the operation.
* @param {number} delay - The delay in milliseconds.
* @returns {Promise<string>} A promise that resolves with a message after the delay.
*/
function simulateAsyncOperation(id, delay) {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve(`Operation ${id} completed in ${delay}ms`);
      }, delay);
  });
}

/**
* Performs multiple asynchronous operations concurrently.
* @returns {Promise<void>}
*/
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

