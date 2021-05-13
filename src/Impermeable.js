// @mattiwheels

noise(2,.41)
  .mask(osc(2,1))
  .color(.73,.73,.73)
  .contrast(1.5)
  .diff(src(o1).modulateScale(o1))
  .invert()
  .blend(osc(1,0,1))
  .add(noise(1,.5),.1)
  .blend(o2)
  .out(o0)

noise(5,1)
  .modulateScale(o1)
  .invert()
  .out(o1)

osc(4,.1)
  .add(solid(.5,.5,.5))
  .mult(src(o0).diff(src(o2).rotate(Math.PI/2)))
  .out(o2)

src(o2)
  .modulate(src(o1).scrollY(-.01,.3), .5)
  .diff(src(o2).modulate(o2, 8))
  .modulateRotate(o2, .5)
  .out(o3)

render(o3)
