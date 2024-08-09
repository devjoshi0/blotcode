const width = 400;
const height = 400;

setDocDimensions(width, height);

let lines = [];
let temp = [];
let fractalSeed = []




let size = 0

let coleaves = 0;

let branching = 0;

let distribution = 0;

let lengthLimit = 0;

draw()
function setup() {

}
function draw() {
  const finalLines = [];
  var trunkLen = 100
  const trunkLine = [200, height, 200, height - trunkLen]
  finalLines.push(trunkLine);
  drawLines(finalLines);
}



// store final lines here
//const finalLines = [];

// create a polyline
//const polyline = [
  //[30, 90],
  //[100, 90],
  //[100, 30],
  //[30, 30],
  //[30, 90]
//];

// add the polyline to the final lines
//finalLines.push(polyline);

// transform lines using the toolkit
//bt.rotate(finalLines, 45);

// draw it
//drawLines(finalLines);