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
const maxDepth = 2;
const blossomDensity = 0.2; // Frequency of blossoms
const blossomSize = rr(2, 0); // Blossom size

function drawBlossom(x, y) {
  const blossom = bt.catmullRom([
    [x, y],
    [x + blossomSize, y + blossomSize],
    [x + blossomSize * 2, y],
    [x + blossomSize, y - blossomSize],
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
    [startX + length / 3 * Math.cos(angle), startY + length / 3 * Math.sin(angle)],
    [startX + length * 2 / 3 * Math.cos(angle), startY + length * 2 / 3 * Math.sin(angle)],
    [endX, endY]
  ], 10);

  drawLines([branch]);

  if (bt.rand() < blossomDensity) {
    drawBlossom(endX, endY);
  }

  for (let i = 1; i <= 2; i++) {
    const midX = startX + (length * i / 3) * Math.cos(angle);
    const midY = startY + (length * i / 3) * Math.sin(angle);
    const newAngle1 = angle + rr(-branchAngle, branchAngle);
    const newAngle2 = angle + rr(-branchAngle, branchAngle);

    drawBranch(midX, midY, length * 0.7, newAngle1, depth + 1, width * 0.7);
    drawBranch(midX, midY, length * 0.7, newAngle2, depth + 1, width * 0.7);
  }

  const newAngle1 = angle - branchAngle + rr(-0.1, 0.1);
  const newAngle2 = angle + branchAngle + rr(-0.1, 0.1);

  drawBranch(endX, endY, length * 0.7, newAngle1, depth + 1, width * 0.7);
  drawBranch(endX, endY, length * 0.7, newAngle2, depth + 1, width * 0.7);
}

// Draw the main branch
drawBranch(100, 150, trunkLength, Math.PI / 2, 0, trunkWidth);


console.log("SEED:", SEED);