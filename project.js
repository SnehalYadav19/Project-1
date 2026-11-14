var tl = gsap.timeline()

tl.from("nav h1,nav h4,nav button",{
    y:-30,
    delay:0.7,
    opacity:0,
    duration:0.6,
    stagger:0.16
})

tl.from(".centre-part1 h1",{
    x:-200,
    delay:0.2,
    opacity:0

})

tl.from(".centre-part1 p",{
    x:-100,
    delay:0.2,
    opacity:0
    
})
tl.from(".centre-part1 button",{
    x:-100,
    delay:0.2,
    opacity:0
    
})

tl.from(".centre-part2 img",{
    opacity:0,
    duration:0.5
},"-=0.3")

tl.from(".section1bottom img",{
    x:-40,
    stagger:0.15,
    opacity:0
})