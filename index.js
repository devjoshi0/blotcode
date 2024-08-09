const width = 400;
const height = 400;


setDocDimensions(width, height);

const rr = bt.randInRange;
const SEED = Math.floor(Math.random() * 1000000);
bt.setRandSeed(SEED);

// change these parameters
const trunkLength = rr(70, 77);
const trunkWidth = rr(4, 8);
const branchAngle = Math.PI / 4; 
const maxDepth = 2;
const blossomDensity = 0.2; // Frequency of blossoms
const blossomSize = rr(2, 4);
const branchFactor = 1.2;
const branchWidthFactor = 0.2;

function drawBlossom(x, y) {
  const size = rr(blossomSize - 1, blossomSize + 1);
  const blossom = bt.catmullRom([
    [x, y],
    [x + size, y + size],
    [x + size * 2, y],
    [x + size, y - size],
    [x, y]
  ], 10);
  drawLines([blossom]);
}

function drawBranch(startX, startY, length, angle, depth, width) {
  if (depth > maxDepth) return;

  const endX = startX + length * Math.cos(angle);
  const endY = startY + length * Math.sin(angle);

  const branch = bt.catmullRom([
    [startX, startY],
    [startX + length / 3 * Math.cos(angle + rr(-0.1, 0.1)), startY + length / 3 * Math.sin(angle + rr(-0.1, 0.1))],
    [startX + length * 2 / 3 * Math.cos(angle + rr(-0.2, 0.2)), startY + length * 2 / 3 * Math.sin(angle + rr(-0.2, 0.2))],
    [endX, endY]
  ], 10);

  const leftSide = branch.map(([x, y]) => [x - width / 2 + rr(-0.2, 0.2), y]);
  const rightSide = branch.map(([x, y]) => [x + width / 2 + rr(-0.2, 0.2), y]).reverse();

  drawLines([leftSide.concat(rightSide, [leftSide[0]])]);

  if (bt.rand() < blossomDensity) {
    drawBlossom(endX, endY);
  }

  for (let i = 1; i <= 2; i++) {
    const midX = startX + (length * i / 3) * Math.cos(angle);
    const midY = startY + (length * i / 3) * Math.sin(angle);
    const newAngle1 = angle + rr(-branchAngle, branchAngle);
    const newAngle2 = angle + rr(-branchAngle, branchAngle);

    drawBranch(midX, midY, length * branchFactor, newAngle1, depth + 1, width * branchWidthFactor);
    drawBranch(midX, midY, length * branchFactor, newAngle2, depth + 1, width * branchWidthFactor);
  }

  const newAngle1 = angle - branchAngle + rr(-0.1, 0.1);
  const newAngle2 = angle + branchAngle + rr(-0.1, 0.1);

  drawBranch(endX, endY, length * branchFactor, newAngle1, depth + 1, width * branchWidthFactor);
  drawBranch(endX, endY, length * branchFactor, newAngle2, depth + 1, width * branchWidthFactor);
}
// Draw the main branch
drawBranch(100, 150, trunkLength, Math.PI / 2, 0, trunkWidth);

console.log("SEED:", SEED);