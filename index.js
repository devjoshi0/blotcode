const width = 400;
const height = 400;


setDocDimensions(width, height);

const rr = bt.randInRange;
const SEED = Math.floor(Math.random() * 1000000);
bt.setRandSeed(SEED);

// change these parameters
const trunkLength = rr(30, 40);
const trunkWidth = rr(5, 6);
const branchAngle = Math.PI / 4; 
const maxDepth = 4;
function drawBranch(startX, startY, length, angle, depth, width) {
  if (depth > maxDepth) return;

  const endX = startX + length * Math.cos(angle);
  const endY = startY + length * Math.sin(angle);
  drawLines(startX, startY, endX, endY, width);

  const newAngle1 = angle - branchAngle + rr(-0.1, 0.1);
  const newAngle2 = angle + branchAngle + rr(-0.1, 0.1);

  drawBranch(endX, endY, length * 0.7, newAngle1, depth + 1, width * 0.7);
  drawBranch(endX, endY, length * 0.7, newAngle2, depth + 1, width * 0.7);
}


drawBranch(100, 150, trunkLength, -Math.PI / 2, 0, trunkWidth);


console.log("SEED:", SEED);