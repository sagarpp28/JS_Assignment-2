var readlineSync = require('readline-sync');
let mark= parseInt(readlineSync.question('Enter Your Mark '));
if(mark>90){
    console.log('A Grade');
}else if(mark>80){
    console.log('B Grade');
}else if(mark>70){
    console.log('C Grade');
}else if(mark>60){
    console.log('D Grade');
}else if(mark>=50){
    console.log('E Grade');
}else if(mark<50){
    console.log('Failed');
}else{
    console.log('Invalid input');
}