var readlineSync = require("readline-sync");

let limit = parseInt(readlineSync.question("Enter the size of the array "));

let array=[];
for(let i=0;i<limit;i++){
    array[i]=parseInt(readlineSync.question('Enter the '+ i +' element :'));
}
console.log("Your array is : ",array);
let even=0;
for(i=0;i<=limit;i++){
    if(array[i]%2===0){
        even++;
    }
}
console.log("Number of even numbers in the given array is",even);