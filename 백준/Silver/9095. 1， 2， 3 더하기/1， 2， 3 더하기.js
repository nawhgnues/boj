const fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString();

inputs = inputs.split("\n").map(v => parseInt(v));
const testNum = inputs.shift();    // 테스트 케이스 개수

let dp = [0,1,2,4]

for (let i=4; i < 11; i++) { 
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
}

for (let i=0; i < testNum; i++) {
    console.log(dp[inputs[i]]);
}