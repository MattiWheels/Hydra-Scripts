// @mattiwheels

noise(5,1)
  .modulate(o0, 10).color(2,.2,.5)
  .mask(shape(3, .5, 0).scale(2).rotate(0,time * .001))
  .out(o0)

src(o0)
  .add(src(o0).scale(.5).rotate([1,0].smooth()))
  .out(o1)

src(o1)
  .mult(noise(3,.5).pixelate(20,20))
  .add(osc(1,1,.1).blend(osc(3,1,-1),.5)).modulate(o1)
  .out(o2)

render(o2)
