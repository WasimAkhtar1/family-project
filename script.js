







var x=document.querySelector(".cursor")
var y=document.querySelector(".cursor1")
document.addEventListener("mousemove",function(dets){
x.style.left=dets.x+"px"
x.style.top=dets.y+"px"
y.style.top=dets.y-250+"px"
y.style.left=dets.x-250+"px"
})









gsap.to("nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
      scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
      }
    

    
})

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})

gsap.from(".page3 ,.about-us",{
  opacity:0,
  duration:1,
  y:50,
  stagger:0.1,
  // delay:1,
  // scale:0.8,
  scrollTrigger:{
    trigger:".page3",
    scroller:"body",
    start:"top 70%",
    end:"top 65%",
    scrub:2,
  }
})


gsap.from(".card",{
  opacity:0,
  duration:1,
  y:50,
  scale:0.8,
  stagger:0.2,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    start:"top 70%",
    end:"top 65%",
    scrub:2,
  }

  
})

gsap.from("#colon",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:"#colon",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:4,
  }
})

gsap.from("#colon1",{
  y:70,
  x:70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:4,
  }
})

gsap.from(".page5 h1",{
  y:50,
  scrollTrigger:{
    trigger:".page5 h1",
    scroller:"body",
    start:"top 75%",
    end:"top 70%",
    scrub:2,
  }
})

var hey=document.querySelectorAll("nav>h4")
hey.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    x.style.scale=3
    x.style.border="1px solid #fff"
    x.style.backgroundColor="transparent"
  })
})
hey.forEach(function(elem){
  elem.addEventListener("mouseleave",function(){
    x.style.scale=1
    x.style.border="1px solid #95c11e"
    x.style.color ="#95c11e";
    x.style.backgroundColor="#95c11e";
  })
})


var zero=document.querySelector(".icon i",)
zero.forEach(function(elem1){
  elem1.addEventListener("mouseenter",function(){
    x.style.scale=3
    x.style.border="1px solid #fff"
    x.style.backgroundColor="transparent"
  })
})


