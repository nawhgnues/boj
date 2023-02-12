const fs = require('fs');

let input = (fs.readFileSync('./dev/stdin') + '').toString().trim().split('\n');
let n = Number(input.shift());
let m = Number(input.shift());

let graph = [...new Array(n + 1)].map(() => []);
let visited = new Array(n + 1).fill(false);
let ans = 0;

visited[1] = true;

// DFS 탐색
const dfs = (start) => {
  graph[start].map((destination) => {
    if (!visited[destination]) {
      visited[destination] = true;
      ans += 1;
      dfs(destination);
    }
  });
};

// 그래프 생성
input.map((i) => {
  const [start, destination] = i.split(' ').map((ele) => Number(ele));
  graph[start].push(destination);
  graph[destination].push(start);
});

dfs(1);

console.log(ans);