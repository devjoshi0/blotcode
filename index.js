// check out the workshop tab to get started
// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 450;
const height = 450;

setDocDimensions(width, height);

let lines = [];
let temp = [];
let fractalSeed = []


class fractalTree {
  this.size = 0
  this.coleaves = 0;
  this.branching = 0;
  this.distribution = 0;
  this.lengthLimit = 0;


}

function draw() {

}



// store final lines here
const finalLines = [];

// create a polyline
const polyline = [
  [30, 90],
  [100, 90],
  [100, 30],
  [30, 30],
  [30, 90]
];

// add the polyline to the final lines
finalLines.push(polyline);

// transform lines using the toolkit
bt.rotate(finalLines, 45);

// draw it
drawLines(finalLines);