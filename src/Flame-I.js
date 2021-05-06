// @mattiwheels

shape(3,.1, 1)
  .modulateScale(osc(4),1)
  .scale(.21)
  .rotate(0,.05)
  //.modulatePixelate(o1)
.out(o0)

src(o0)
  .modulate(o0)
.out(o1)

osc(3,.1,1)
  .mask(o1)
  .out(o2)

render(o2)
