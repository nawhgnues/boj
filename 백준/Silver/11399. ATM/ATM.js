const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[1].split(' ').map(Number).sort((a,b)=>a-b);
// input = ['5', '3 1 4 3 2']
// arr = [1, 2, 3, 3, 4]

let sum = 0;
let result = 0;

for(let i =0; i<arr.length; i++){
    sum += arr[i]
    result += sum;
}
console.log(result);