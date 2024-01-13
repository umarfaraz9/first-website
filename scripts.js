

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink",{
  Stagger:.2,
  y:15,
  duration: 1,
  ease:Power2,
  opacity:0
});

Shery.textAnimate("#headings h1" , {
  
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});


gsap.from(".anim2",{
  y:50,
  Stagger:.3,
  opacity:0,
  ease:Expo,
  duration:1

});
Shery.imageEffect(".imgff img", {
  style: 4,
  config:{"uColor":{"value":true},"uSpeed":{"value":0.29,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.79,"range":[0,5]},"uFrequency":{"value":3.21,"range":[0,10]},"geoVertex":{"range":[1,64],"value":28.41},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6115867031824492},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.92,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  
  
});
Shery.imageEffect("#imgtext img ", {
  style: 3,
  config:{"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":27.48,"range":[0,100]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7499999776482589},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.82,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  
});


gsap.from("#imgtext img",{
  z:"80",
  opacity:0,
  duration:2.2,
  ease:Expo,

});

Shery.imageEffect("#bimg", {
  style: 6,

  config:{"noiseDetail":{"value":16.79,"range":[0,100]},"distortionAmount":{"value":1.3,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.4,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.318894437347579},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.82,"range":[1,15]},"durationOut":{"value":1.3,"range":[0.1,5]},"durationIn":{"value":0.74,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":26}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":13.74,"range":[0,100]}},
  gooey: true,
});

document.querySelector("#ftext button")
.addEventListener("mouseover",function(){
  gsap.to("#future video",{
    opacity: 1,
    duration: 1.5,
    
  })
});

document.querySelector("#ftext button")
.addEventListener("mouseleave",function(){
    
  gsap.to("#future video",{
    opacity: 0,
    duration: 1.5,
    
  })



  
});