// @mattiwheels

osc(15,.11,.1)
  .kaleid(2)
  .color(2.5, 1.5, .5)
  .brightness(-.5)
  .blend(osc(12,-.5,.1))
  .saturate()
  .out(o0)

src(o0)
  .modulate(o0, time*.00013)
  .mask(o2)
  .out(o1)

shape(2,.1, 1).scale(.5).rotate(0,1)
  .modulatePixelate(o2, 10)
  //.mask(o1)
.out(o2)

src(o1)
  .sub(o2, .5).scale(2)
  .out(o3)

render(o3)
