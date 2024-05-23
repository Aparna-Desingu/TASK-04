// Question no 
//1. Do the below programs in anonymous function & IIFE
// a.Print odd numbers in an array
// b.Convert all the strings to title caps in a string array
// c.Sum of all numbers in an array
// d.Return all the prime numbers in an array
// e.Return all the palindromes in an array
// f.Return median of two sorted arrays of the same size.
// g.Remove duplicates from an array
// h.Rotate an array by k times

// Answers:

// a.Print odd numbers in an array
let A = [1,2,3,4,5,6,7,8,9]

let oddNumber = (A) => {
for(let i of A)
{
    if(i%2 !== 0)
    {
        console.log(i);
    }
}
}
oddNumber(A);

// b.Convert all the strings to title caps in a string array

let strArray = ['AppLe', 'MAnGo', 'BnaNa', 'ORaNge', 'PaPPaYA', 'SaPPoTA']

let titleCap = (strArray) => {
    for(let i=0; i<strArray.length; i++) {
        strArray[i] =  strArray[i].toLowerCase();
        strArray[i] = strArray[i].charAt(0).toUpperCase()+strArray[i].slice(1);
    }
    return strArray;
}
console.log(titleCap(strArray));

// c.Sum of all numbers in an array

let number = [1,2,3,4,5,6,7,8,9];
(()=> {
    let i=0;
    let sum=0;
    while(i<number.length) {
        sum=sum+number[i]
        i++;
    }
    console.log('Sum of all number is',sum);
})();

// d.Return all the prime numbers in an array

let value = [1,2,3,4,5,6,7,8,9,10];

let prime = (value)=>{
    let i=0;
    let arr=[];
    while(i<value.length) {
        let flag=0;
        for(let j=2; j<=value[i]/2; j++)
        {
            if(value[i]%j === 0)
            {
                flag++;
                break;
            }
        }
        if(flag === 0) {
         arr.push(value[i]);
        }
        i++;
    }
    return arr.join();
}

console.log(prime(value));

// e.Return all the palindromes in an array

let array = ['aparna', 23, 14,'sun',2, 2001,156]


let palindrome = (array)=> {
    let i=0;
    let ans="";
    while(i<array.length) {
      let temp="";
      temp=temp+array[i];
      let flag=0;
      for(let j=0; j<temp.length; j++)
      {
         if(temp[j] == temp[temp.length-1-j])
         {
            flag++;
         }
         else
         {
            break;
         }
      }
        if(flag === temp.length) {
         ans=ans+array[i]+" ";
        }
        i++;
    }
    if(ans.length>0)
    {
        return ans.trimEnd();
    }
    else
    {
        return 'No Palindrome found'
    }
}
console.log(palindrome(array));


