// EXAMPLE 1 - Convert an Object's Values to an array in JavaScript

const obj = {id: 1, country: 'Chile', city: 'Santiago'};

const values = Object.values(obj);

// 👇️ [1, 'Chile', 'Santiago']
console.log(values);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert an Object's Keys to an array in JavaScript

// const obj = {id: 1, country: 'Chile', city: 'Santiago'};

// const keys = Object.keys(obj);

// // 👇️ [ 'id', 'country', 'city' ]
// console.log(keys);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert an Object's Entries to an array in JavaScript

// const obj = {id: 1, country: 'Chile', city: 'Santiago'};

// const entries = Object.entries(obj);

// // 👇️ [ [ 'id', 1 ], [ 'country', 'Chile' ], [ 'city', 'Santiago' ] ]
// console.log(entries);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Converting string keys to numeric

// const obj = {0: 9, 1: 8, 2: 7};

// const entries = Object.entries(obj).map(([key, value]) => [
//   Number(key),
//   value,
// ]);

// // 👇️ [ [ 0, 9 ], [ 1, 8 ], [ 2, 7 ] ]
// console.log(entries);

// ------------------------------------------------------------------

// // EXAMPLE 5 - Get an Object's Values as an Array using Object.keys()

// const obj = {id: 1, country: 'Chile', city: 'Santiago'};

// // 👇️ ['id', 'country', 'city']
// const keys = Object.keys(obj);
// console.log(keys);

// const values = keys.map(key => {
//   return obj[key];
// });

// // 👇️ [1, 'Chile', 'Santiago']
// console.log(values);

// ------------------------------------------------------------------

// // EXAMPLE 6 - Get an object's entries as an array using Object.keys()

// const obj = {id: 1, country: 'Chile', city: 'Santiago'};

// const keys = Object.keys(obj);

// const values = keys.map(key => {
//   return [key, obj[key]];
// });

// // 👇️ [ [ 'id', 1 ], [ 'country', 'Chile' ], [ 'city', 'Santiago' ] ]
// console.log(values);

// ------------------------------------------------------------------

// // EXAMPLE 7 - Get an Object's Values as an Array using a `for...in` loop

// const obj = {id: 1, country: 'Chile', city: 'Santiago'};

// const valuesArray = [];

// for (const key in obj) {
//   valuesArray.push(obj[key]);
// }

// // 👇️ [ 1, 'Chile', 'Santiago' ]
// console.log(valuesArray);
