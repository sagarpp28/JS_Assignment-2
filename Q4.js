var readlinesync = require('readline-sync');
let limit = parseInt(readlinesync.question("Enter the limit "));
let sum=0;
for(let i=1;i<limit;i++){
    if(i % 2 !==0){
        sum += i;
    }
}
console.log("sum of all odd number is",sum);
