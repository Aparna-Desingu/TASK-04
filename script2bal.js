  //NAME THE PALINDROMES IN AN ARRAY
  let Words = ["Sun", "Moon", "Fun", "Bun", "Fan", "Man", "Van"];

  //anonymous function
  
  let palin = function(Words) {
  
  let C = [];
  for (let i = 0; i < Words.length; i++) {
  let strarr = arr[i]
  let revstr = strarr.split("").reverse().join("");
  if (strarr == revstr)
  C.push(strarr);
  
  }
  console.log(C);

  
  palin(arr);

  
//Return median of two sorted arrays of same size

let arr1 = [45, 56, 23, 78, 89, 57, 70];

let arr2 = [23, 56, 78, 90, 80, 32, 67];
//anonymous function

let med = function(arr1, arr2) {
let i = arr1.length;
arr1.sort(function(a, b) { return a - b });
arr2.sort(function(a, b) { return a - b });
console.log(arr1, arr2);
if (arr1.length % 2 === 0) {
console.log((arr1[i / 2] + arr1[l / 2-1]) / 2)
console.log((arr2[i / 2] + arr2[l / 2-1]) / 2)
}
else {
console.log((arr1[(i-1 ) / 2]))
console.log((arr2[(i - 1) / 2]))
}
};

med(arr1, arr2);

//IIFE function

(function(arr1, arr2) {
let l = arr1.length;
arr1.sort(function(a, b) { return a - b });
arr2.sort(function(a, b) { return a - b });
console.log(arr1, arr2);
if (arr1.length % 2 === 0) {
console.log((arr1[l / 2] + arr1[l / 2-1]) / 2)
console.log((arr2[l / 2] + arr2[l / 2-1]) / 2)
}
else {
console.log((arr1[(l - 1) / 2]))
console.log((arr2[(l - 1) / 2]))
}
})(arr1, arr2);

//REMOVE DUPLICATE FROM AN ARRAY

let arr = [1, 2, 2, 2, 4, 6, 6, 6, 7, 7, 8, 8, 8, 8, 8, 9, 22, 4, 4, 567, 67, 78, 78, 45, 67, 45, 45, 45, 78, 67, 56, 54];

//anonymous function

let dup = function(arr) {
let newarr = [new Set(arr)];
console.log(newarr);
}
dup(arr);

//IIFE function
(function(arr) {
    let newarr = [new Set(arr)];
    console.log(newarr);
    })(arr);

  }
  