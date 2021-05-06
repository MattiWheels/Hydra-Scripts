// @mattiwheels

noise(10,2)
  .modulate(o0, 1).color(-1,.2,.5)
  .mask(shape(3, .5, 0).scale(2).rotate(0,time * .0001))
  .out(o0)

src(o0)
  .add(src(o0).scale(.5).rotate([1,0].smooth()))
  .mult(noise(3,.5).pixelate(20,20))
  .add(osc(.5,1,.1).blend(osc(100000,1,-1).rotate(0,.1),.5)).modulate(o1)
  .out(o1)

render(o1)
