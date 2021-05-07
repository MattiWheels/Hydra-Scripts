// @mattiwheels

noise(50,.1)
  .brightness(.5)
  .contrast(1.4)
  .modulatePixelate(o1, () => Math.sin(time * .1))
  .blend(gradient(.1).diff(osc(1,-.333,.8)))
  .out(o0)

shape([3,5,7,4].smooth())
  //.scrollX(.081)
  //.scrollY(-.01)
  .mask(shape([3,2,8,6,4,6,5].fast().smooth()).rotate(Math.PI/2))
  .rotate(0, .1)
  .scale(() => mouse.x * .005)
  .modulate(o1, -.13)
  .modulate(o1, .13)
  .mult(voronoi(4,2,.1)
        .pixelate(30,300)
        .diff(gradient(1)))
  .out(o1)

src(o1)
  .modulate(o0)
  .modulate(o1)
  .modulate(o2)
  .out(o2)

render(o2)
