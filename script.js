function smoothAndScroll() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
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
  x: 2100,
}, ('onetwo'));
tl.to("#typo2", {
  x: -2100,
}, ('onetwo'));
tl.to("#typo3", {
  x: 2100,
}, ('threefour'));
tl.to("#typo4", {
  x: -2100,
}, ('threefour'));
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

function slideScroll() {
  var slider = document.querySelector(".scrollslide");
  // gsap.from(slider, {
  //   y: 500,
  //   opacity: 0,
  //   delay: .4,
  //   scrollTrigger: {
  //     trigger: "#page5",
  //     scroller: "#main",
  //     start: "top top",
  //     markers: true,
  //   }
  // })
  let timline = gsap.timeline({
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      start: "top top",
      end: "600%  50%",
      markers: true,
      scrub: 2,
      pin: true,
      delay: .1,
    }
  });
  timline.to(slider, {
    x: "-105  %",
  });
} 
slideScroll();