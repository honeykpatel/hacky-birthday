const circle1 = document.querySelector(".ellipse");
const hbd = document.querySelector(".hbd");
const hacky = document.querySelector(".hacky");
const circle2 = document.querySelector(".ellipse2");
const triangle1 = document.querySelector(".triangle1");
const triangle2 = document.querySelector(".triangle2");
const square = document.querySelector(".square");
const plane = document.querySelector(".paper-plane");
const heading = document.querySelector(".heading");



const tl =  new TimelineMax();

// tl.fromTo(circle1, 3, {height: "30%", width:"20%"}, {height: "160%", width:"95%", ease: Power1.easeInOut})
tl.fromTo(circle1, 2, {x:"-150"}, {x:"20%", ease: Power2.easeInOut})
.fromTo(hbd, 1, {x:"-150%"}, {x:"10%", ease: Power2.easeInOut})
.fromTo(hacky, 1, {x:"-150%"}, {x:"10%", ease: Power2.easeInOut},"-=1")
.fromTo(circle2, 1, {opacity:"0", x:"550%"}, {opacity:"1", x:"10%", ease: Power2.easeInOut},"-=1")
.fromTo(triangle1, 1, {y:"250%", opacity:"0"}, {y:"10%", opacity:"1", ease: Power2.easeInOut},"-=1")
.fromTo(triangle2, 1, {x:"550%", opacity:"0" }, {x:"0%", opacity:"1" , ease: Power2.easeInOut},"-=1")
.fromTo(square, 1, {y:"450%", opacity:"0"}, {y:"10%", opacity:"1", ease: Power2.easeInOut},"-=1")
.fromTo(plane, 1, {x:"-250%", opacity:"0"}, {x:"0%", opacity:"1", ease: Power2.easeInOut},"-=1")
.fromTo(heading, 1, {y:"-450%", opacity:"0"}, {y:"0%", opacity:"1", ease: Power2.easeInOut},"-=1")








const flightPath={
	curviness: 1.25,
	autoRotate: true,
	values: [
	{x: (window.innerWidth/8), y: -20},
    {x: (window.innerWidth/8)*2, y:10},
    {x: (window.innerWidth/8)*5, y: 300},
    {x: (window.innerWidth/8)*7, y: 400},
    // {x: (window.innerWidth/8)*5, y: 300},
    // {x: (window.innerWidth/8)*6, y: 400},
    // {x: -(window.innerWidth/8)*6, y: 400},
    // {x: (window.innerWidth/8), y:-150},
	// {x:100, y:-40},
	// {x:200, y:-40},
	// {x:400, y:-20},
	// {x:900, y:500},
	// {x:1000, y:700},
	// {x:-900, y:700},
	// {x:-800, y:500},
	// {x:750, y:200},
	// {x:850, y:300},
	// {x:window.innerWidth, y:-150}
	]
}

const tween = new TimelineLite();

tween.add(
	TweenLite.to(".paper-plane",1, {
		bezier: flightPath,
		ease: Power1.easeInOut
	})
);

const controller = new ScrollMagic.Controller()

const scene = new ScrollMagic.Scene({
	triggerElement: ".one",
	duration: 1000,
	triggerHook: 0.3
})
  .setTween(tween)
  //.setPin(".one")
  .addTo(controller);
