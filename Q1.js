// MULTIPLICATION TABLE OF A NUMBER
var readlinesync = require('readline-sync');
let num= parseInt(readlinesync.question("Enter the number "));
for(let i=1;i<=10;i++){
    console.log(num,"*",i,"=",num*i)
}