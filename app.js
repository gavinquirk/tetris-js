let canvas;
let ctx;
let gBArrayHeight = 20;
let gBArrayWidth = 12;
let startX = 4;
let startY = 0;
let coordinateArray = [...Array(gBArrayHeight)].map(e =>
  Array(gBArrayWidth).fill(0)
);
let curTetromino = [[1, 0], [0, 1], [1, 1], [2, 1]];
