let sum = 0;
let i=2;
while(i<process.argv.length){
    
sum = sum + Number(process.argv[i]);

i++;

}
console.log(sum)