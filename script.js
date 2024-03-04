
function loco(){
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}



loco()

gsap.to(".page1 video",{
    filter:"blur(20px)",
    transform: "scaleX(0.90)",
    scrollTrigger:{
        tigger:".page1",
        scroller:".main",
        // markers:true,
        start:"top 0",
        end:"top -40%",
        scrub:true

    }
})

gsap.to(".nav-part2",{
    y:-100,
    duration:1,
    scrollTrigger:{
        trigger:".nav-part2",
        scroller:".main",
        start:"top 0",
        end:"top -10%",
        scrub:true,
    }
})


gsap.to(".nav i",{
    display:"block",
    duration:1,
    scrollTrigger:{
        trigger:".nav-part1",
        scroller:".main",
       start:"top -15%",
        end:"top -20%",
        scrub:true

    }
})


gsap.to(".page2-left img",{
    transform:"translateY(-50%) translateX(9%)",
    duration:10,
    repeat:-1,
    ease:"none"
})


function page1Anination(){
    var tl1 = gsap.timeline({ scrollTrigger:{
        trigger:".page2-right",
        scroller:".main",
        // markers:true,
        start:"top 70%",
        end:"top 40%",
        scrub:2
    }})
    
    
    
    tl1.from(".page2-right h1",{
        y:50,
        x:-10,
        duration:3,
        scale:"1.2",
        opacity:0,
       
    })
    
    tl1.from(".page2-right p",{
        y:50,
        x:-10,
        duration:3,
        scale:"1.2",
        opacity:0,
       
    })
    
    
    tl1.from(".page2-right button",{
        y:50,
        x:-10,
        duration:3,
        scale:"1.2",
        opacity:0,
       
    })
    
    
    tl1.from(".page2-left",{
        y:50,
        x:-10,
        duration:3,
        scale:"1.2",
        opacity:0,
       
    })
}


page1Anination()


function page2animation(){
    var tl2 = gsap.timeline({ scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        // markers:true,
        start:"top 60%",
        end:"top 20%",
        scrub:2
    }})
    
    
    
    tl2.from(".page3-left h1",{
        y:-30,
        duration:3,
        opacity:0,
        scale:"1.2",
       
    })
    
    
    tl2.from(".page3-left p",{
        y:-30,
        duration:3,
        opacity:0,
        scale:"1.2",
       
    })
    
    tl2.from(".page3-left button",{
        y:-30,
        duration:3,
        opacity:0,
        scale:"1.2",
       
    })
    
    
    tl2.from(".page3-right video",{
        y:-10,
        duration:3,
        opacity:0,
        scale:"1.1",
       
    })
}

page2animation()



document.addEventListener("mousemove",(e)=>{
    gsap.to(".curser",{
        top:e.y,
        left:e.x, 
    })
})


function helmetanimation(){
    var tl3 = gsap.timeline({  scrollTrigger:{
        start:"top 160%",
        end:"top 70%",
        // markers:true,
        trigger:".helmet h2",
        scroller:".main",
        scrub:2
    }})
    
    
    
    tl3.from(".helmet h2",{
        y:200,
        opacity: 0,
        scale : 1.4,
        duration:1,
      
    })
    
    
    tl3.from(".helmet p",{
        y:200,
        opacity: 0,
        scale : 1.4,
        duration:1,

      
    })
    
    tl3.from(".helmet button",{
        y:200,
        opacity: 0,
        scale : 1.4,
        duration:1,
        
      
    })
}


helmetanimation()



function page4animation(){
    var tl4 = gsap.timeline({ scrollTrigger:{
        // markers:true,
        start:"top 30%",
        end:"top 90%",
        trigger:".elem1-left h3",
        scroller:".main",
        scrub:2
    }})
    
    
    
    tl4.from(".elem1-left",{
        y:-100,
        opacity:0,
        scale:1.2,
        duration:1,
    
       
    })
    
    
    tl4.from(".elem1-right video",{
        y:-30,
        opacity:0,
        scale:1.1,
        duration:1,
    
       
    })
    
    
    
    
    var tl5 = gsap.timeline({scrollTrigger:{
        scroller:".main",
        trigger:".elem2-left",
        start:"top 60%",
        end:"top 100%",
        scrub:2,
    }})
    
    
    tl5.from(".elem2-left",{
        y:-30,
        opacity:0,
        scale:1.1,
        duration:1,
        
    })
    
    
    tl5.from(".elem2-right h3",{
        y:-30,
        opacity:0,
        scale:1.1,
        duration:1,
        
    })
    
    tl5.from(".elem2-right button",{
        y:-30,
        opacity:0,
        scale:1.1,
        duration:1,
        
    })
    
    
    var tl6 = gsap.timeline({scrollTrigger:{
        scroller:".main",
        trigger:".elem3-left h3",
        start:"top 60%",
        end:"top 100%",
        scrub:2,
        // markers:true
    }})
    
    
    
    
    
    tl6.from(".elem3-left h3",{
        y:-30,
        opacity:0,
        scale:1.1,
        duration:1,
        
    })
    
    
    tl6.from(".elem3-right video",{
        y:-30,
        opacity:0,
        scale:1.1,
        duration:1,
        
    })
    
    
    
    
    var tl7 = gsap.timeline({scrollTrigger:{
        scroller:".main",
        trigger:".elem4-left ",
        start:"top 60%",
        end:"top 100%",
        scrub:2,
        // markers:true
    }})
    
    
    tl7.from(".elem4-left video",{
        y:-30,
        opacity:0,
        scale:1.1,
        duration:1,
        
    })
    
    
    tl7.from(".elem4-right h3",{
        y:-30,
        opacity:0,
        scale:1.1,
        duration:1,
        
    })
    
    
    tl7.from(".elem4-right button",{
        y:-30,
        opacity:0,
        scale:1.1,
        duration:1,
        
    })
}


page4animation()


gsap.from(".page5",{
    transform:"translateX(50%)"
})



function page4page5Animation() {

    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page5",
            scroller: ".main",
            start: "top 0",
            end: "top -70%",
            scrub: 3,
            pin: true
        }
    })
    tl4.to("#page5-content", {
        transform: "translateX(-50%)",
    }, "okay")
    tl4.to("#page5 #slider-in", {
        x: 650,
    }, "okay")
}

page4page5Animation()


function page6animation(){
    var tl = gsap.timeline({scrollTrigger:{
        trigger:".page6",
        scroller:".main",
        // markers:true,
        start:"top 50%",
        end:"top 30%",
        scrub:2
        
    }})
    
    tl.from(".page6 h1",{
        opacity:0,
        scale:1.3,
        x:100,
        
    })
    
    tl.from(".page6-left p",{
        opacity:0,
        scale:1.3,
        x:100,
        
    })
    
    
    
    tl.from(".page6-right p",{
        opacity:0,
        scale:1.3,
        x:100,
        
    })
    
    
    tl.from(".page6-right h6",{
        opacity:0,
        scale:1.3,
        x:100,
        
    })
    
}


page6animation()


gsap.from(".page6-box .box",{
    transform:"scale(.8) scale(1) ",
    scrollTrigger:{
        // markers:true,
        start:"top 70%",
        end:"top 40%",
        scroller:".main",
        trigger:".page6-box .box",
        scrub:true
    }
})




