var crsr = document.querySelector("#cursor") //dom tht connects html with js
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x-150 +"px"
    blur.style.top=dets.y-150+"px"
})

gsap.to("#nav",{ 
    backgroundColor : "#000" ,
    height:"100px ",
    duration: 0.2,
    // delay:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%", //for little scroll at black-header 
        end:"top -11%",  //back to normal transparent bg
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -20%",
        end:"top -70%",
        scrub:1 
    }
})
