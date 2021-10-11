class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count += 1;
    return this.count;
  }
}

const stack = new Stack();
stack.push(300);
stack.push(100);
stack.push(400);

var fruits = ["apple", "Mango", "Pineapple"];

fruits = ["start", ...fruits, "end"];

console.log(fruits);

function private() {
  var private = "super secret code";

  return function () {
    return private;
  };
}

var getPrivateVariable = private();
console.log(getPrivateVariable());

function privte() {
  var a = "private code";

  return function () {
    return a;
  };
}

var nestedPrivate = privte();
console.log(nestedPrivate());

//set//
var names = ["angella", "nambooze", "tracy"];
for (var name of names) {
  console.log(name);
}

// reverse a string
const revString = (str) => {
  const arr = str.split("");
  arr.reverse();
  str = arr.join("");
  console.log(str);
};
revString("Apple");

const angella = (str) => {
  const arr = str.split("");
  arr.reverse();
  str = arr.join("");
  console.log(str);
};

angella("Liam");

const namString = (string) => {
  const arr = string.split("");
  arr.reverse();
  string = arr.join("");
  console.log(string);
};

namString("nambooze");

// Check if a string is Palindrome

const Palindrome = (str) => {
  const isPalindrome = str.split("").reverse().join("");
  console.log(str === isPalindrome);
};
Palindrome("hannah");

function angell() {
  const num = "secret";
  return function () {
    return num;
  };
}
const check = angell();
console.log(check());

const nameA = (str) => {
  const isPali = str.split("").reverse().join("");
  console.log(str === isPali);
};
nameA("Angella");

const maxChar = (str) => {
  let obj = {};
  for (let char of str) !obj[char] ? (obj[char] = 1) : obj[char]++;
  console.log(obj);
};

maxChar("hellllo1122uyey");
