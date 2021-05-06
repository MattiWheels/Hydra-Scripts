// @mattiwheels

shape(3,.1, 1)
  .modulateScale(osc(3),1)
  .scale(.21)
  .rotate(0,time*.0001)
  .modulatePixelate(o1)
.out(o0)

src(o0)
  .modulate(o0)
.out(o1)

osc(3.14159,.1,7.5)
  .rotate(0,.125)
  .scale(2)
  .mask(src(o1).scale(1.25))
  .out(o2)

shape(3)
  .rotate(0, time * -0.005)
  .sub(o2)
  .mask(noise(2,1).pixelate(1.8,1.8).kaleid(8.01).scale(.25))
  .modulate(o3, .2)
  .out(o3)

render(o3)
