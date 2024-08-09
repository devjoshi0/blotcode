// check out the workshop tab to get started
// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start



const angle = 0
const size = 100
const t = new bt.Turtle()
plant(100,0)
function plant(size)
{
  if(size < 1)
    return;
  //trunk
  t.jump([60, 30])
  t.setAngle(90)
  t.right(angle);
  t.forward(size);
  //trunk
  let [x,y] = t.pos;

  for (let i = 0; i < 2; i++) {
    let angle = bt.rand(10, 45);

    t.right(angle);
    plant(size * bt.rand(0.5, 0.7));
    
    
  }

  
  t.down(size);
  t.left(angle);
  
}
drawLines(t.lines())

class 
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