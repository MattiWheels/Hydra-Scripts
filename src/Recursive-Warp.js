// @mattiwheels

voronoi(5,.5,1000)
  .color([.2,.8,.8],
         [.5,1,1],
         [1,.3,.5])
  .brightness(1)
  .modulateScale(osc(10,.2,0)
                 .kaleid(100)
                 .modulateScale(osc(1,.01,-1).kaleid(100).modulateScale(osc(1,.8,0)
                 .kaleid(100)
                 .modulateScale(osc(1000,.01,-1).kaleid(100)),1,.1)),.1,.01)
  .out(o0)
