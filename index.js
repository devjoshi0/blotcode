const width = 400;
const height = 400;


setDocDimensions(width, height);

const rr = bt.randInRange;


// change these parameters
const trunkHeight = rr(30, 40);
const trunkWidth = rr(5, 6);
const branchDensity;
const leafDensity;
const trunkRoughness;
const branchWidthFactor;

function drawTrunk(){
  const trunk = [];
  let x = width / 2;
  let y = height / 2;

}


function drawBranch(startX, startY, length, angle, depth, width) {
  if (depth > maxDepth) return;

  const endX = startX + length * Math.cos(angle);
  const endY = startY + length * Math.sin(angle);

  bt.setStrokeColor("#5D3A3A");
  bt.setStrokeWidth(width);
  
  drawLine(startX, startY, endX, endY);
}

const startX = rr(-20, 0);
const startY = rr(45, 89);
drawBranch(startX, startY, trunkLength, rr(-PI / 12, PI / 12), 0, trunkWidth);




console.log("SEED:", SEED);