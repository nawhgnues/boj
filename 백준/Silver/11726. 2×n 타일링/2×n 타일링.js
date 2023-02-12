const fs = require('fs')
let count = Number(fs.readFileSync('./dev/stdin').toString());
const memo = {
    1:1,
    2:2
}

for (let i =3; i <= count; i++) {
    memo[i] = (memo[i-1] + memo[i-2]) % 10007;
}

console.log(memo[count])