const [n, ...words] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const setArr = [...new Set(words)];

// sort by word
setArr.sort();

// sort by length of word and print result
setArr
  .sort((a, b) => {
    return a.length - b.length;
  })
  .map((i) => console.log(i));
