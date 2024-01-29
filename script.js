var loader = document.querySelector("#intro");
var fronth6 = document.querySelector("#copyrightfront>h6");
var loaderhead = document.querySelector("#animatehead");
gsap.from(loader, {
  backgroundColor: "#181818",
  duration: 2,
});
gsap.from(fronth6, {
  y: "40px",
  duration: 1,
  ease: "expo-in-out",
})


function smoothAndScroll() {
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

smoothAndScroll();

function objectAnimate() {
  var longContainer = document.querySelector("#longcontainer1");
  var character = document.querySelector("#page1>img");
gsap.from(character, {
  y: 800,
  delay: .0,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    start: ".1% top",
    end: "+=3500 70%",
    // markers: true,
    pin: true,
  }
});
}

objectAnimate();

function imageScrollSlide() {
  
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    start: "top top",
    end: "+=2000 10%",
    // markers: true,
    pin: true,
    scrub:2,
  }
});
tl.to("#typo1", {
  top: "-100%",
  rotation: 60,
  duration: .7,
}, ('onetwo'));
tl.to("#typo2", {
  top: "-150%",
  duration: 1.2,
}, ('onetwo'));
tl.to("#typo3", {
  top: "-100%",
  duration: .5,
  rotation: 60,
}, ('onetwo'));
tl.to("#typo4", {
  top: "-150%",
  duration: 1.5,
  rotation: 40,
}, ('onetwo'));
}
imageScrollSlide();

function openerFollower () {
  
var opener = gsap.timeline( {
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    start: "top top",
    end: "+=1200 20%",
    // markers: true,
    pin: true,
    scrub: 2,
    delay: .5,
  }
});
opener.to("#upper", {
  height: 0,
}, ("a"));
opener.to("#lower", {
  height: 0,
}, ("a"));

}
openerFollower();

// function slideScroll() {
//   var slider = document.querySelector(".scrollslide");

//   let timline = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#page5",
//       scroller: "#main",
//       start: "top top",
//       end: "600%  50%",
//       // markers: true,
//       scrub: 2,
//       pin: true,
//       delay: .1,
//     }
//   });
//   timline.to(slider, {
//     x: "-105%",
//   });
// } 
// slideScroll();