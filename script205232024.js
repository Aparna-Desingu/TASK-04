// QUESTION NO 2.Do the below programs in arrow functions.
// Print odd numbers in an array
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array


// ANSWERS: 

//PRINT ODD NUMBER IN AN ARRAY
//ANONYMOUS

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];


b = function() {
let c = [];
for (let i = 0; i < a.length; i++) {
if (a[i] % 2 != 0) {
c.push(a[i]);

}

}

console.log(c);

};

b();

//IIFE
var array=[1,2,3,4,5,6,7,8,9];
 (function (array)
 {
    for(var i=0; i<array.length; i++)
    {
      if(array[i]%2!==0)
      {
         console.log(array[i]);
      }
    }
 })(array);

//sum of all numbers in array
//anonymous
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
b = function() {
let sum = 0;
for (let i = 0; i < a.length; i++) {
sum = sum + a[i];
}
return sum;
}
console.log(b());

//IIFE
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
b = (function() {
     let sum = 0;

    for (let i = 0; i < a.length; i++) {
    
    sum = sum + a[i];
    
    }
    
    console.log(sum);
    
    })();

    //ROTATE AN ARRAY BY K TIMES
    //AN0NYMOUS
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let k = 3;
    
    let rot = function(arr) {
    
    for (let i = 0; i < k; i++) {

    arr.unshift(arr.pop());
    
    }
    
    console.log(arr);
    
    }
    
    rot(arr);
    
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    //IIFE
    let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let K = 9;
    let Rote =(function(arr) {
        for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
        }
        console.log(arr);
        })(arr);

//CONVERT ALL THE STRINGS TO TITLE CAPS IN A STRING ARRAY
// ANONYMOUS
b = function(str) {
    var sentence = str.toLowerCase().split("");
    for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    console.log(sentence.join(""));
    return sentence;
    }
    b("Life is not essay fro everyone");

    //IIFE
    (function(str) {

        var sentence = str.toLowerCase().split("");
        for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
        console.log(sentence.join(""));
        
        return sentence;

        })("Life is not essay for everyone");

        //RETURN ALL THE PRIME NUMBER


let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

//anonymous function

b = function(a) {

for (let i = 0; i < a.length; i++) {
for (let j = 2; j <= a[i] - 1; j++); {
if (a[i] % j == 0) {
return false;
}

}
return a[i] > 1;
}
};
console.log(a.filter(b));

//IIFE
(prime = function(a) {

    for (let j = 2; j <= a - 1; j++) {
    if (a % j == 0) {
    return false;
    }
    }
    return a > 1
    })();
    console.log(a.filter(prime))




   