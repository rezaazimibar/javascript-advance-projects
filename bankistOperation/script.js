'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Daniel Bruno',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movement) {
  containerMovements.innerHTML = '';
  movement.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type} deposit</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);
console.log(containerMovements.textContent);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// const arr = ["a","b","c","d","e","f",]

// console.log(arr.splice(1,2))
// console.log(arr)

// console.log(arr.at(-1))
// console.log(arr.at(0))

//-----------------------------------------for-each-loop-------------------------------------------

// movements.forEach(function (item, i, arr) {
//   if (item > 0) {
//     console.log(
//       `number${i + 1}: your are good calculate your calculator ${item}`
//     );
//   } else {
//     console.log(`number${i + 1}: you are a bad calculator ${item}`);
//   }
// });

// currencies.forEach(function (item, i, arr) {
//   console.log(
//     `in for each item is ${item},///index is ${i},////and arr is ${arr}`
//   );
// });

// const my_set = new Set(['USA', 'UK', 'UAE']);

// my_set.forEach(function (value, _, set) {
//   console.log(`value is ${value} and set is ${set}`);
// });

//------------------------------------------coding-challenge#1-------------------------------------

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

const JFD = [3, 5, 2, 12, 7];
const KRD = [4, 1, 15, 8, 3];

const checkDogs = function (Julia, arr2) {
  const arr1 = Julia.slice();
  arr1.splice(0, 1);
  arr1.splice(-2);

  const both_arr = [...arr1, ...arr2];

  both_arr.forEach(function (dog, i) {
    const type =
      dog < 3
        ? 'is a still puppy🐶'
        : `is an adult, and it is ${dog} years old`;

    console.log(`dog number ${i + 1} ${type}`);
  });
};

checkDogs(JFD, KRD);
