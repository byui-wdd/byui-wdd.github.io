ScrollTrigger.defaults({
    start: "top top",
    pin: true,
    scrub: 1,
    // markers: true
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#internet'
        // below end: is supposed to help with different device sizes and media queries
        //end: () => "+=" + document.querySelector('#internet').offsetWidth
    },
});
let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#www'
    }
});
let t3 = gsap.timeline({
    scrollTrigger: {
        trigger: '#request'
    }
});
let t4 = gsap.timeline({
    scrollTrigger: {
        trigger: '#hosting'
    }
});
let t5 = gsap.timeline({
    scrollTrigger: {
        trigger: '#languages'
    }
});
let t6 = gsap.timeline({
    scrollTrigger: {
        trigger: '#devices'
    }
});


tl.from('.internet-img', {
    x: '100vw',
    opacity: 0
})
.from(".internet-content", {
    y: '100vh',
    opacity: 0
})
.from('.hr1', {
    x: '100vw',
    opacity: 0 
})
.from('.hr1b', {
    x: '-100vh',
    opacity: 0
});

t2.from('.www-img', {
    x: '-100vw',
    opacity: 0
})
.from(".www-content", {
    y: '-100vh',
    opacity: 0
})
.from('.hr2', {
    x: '100vw',
    opacity: 0
})
.from('.hr2b', {
    x: '-100vh',
    opacity: 0
});

t3.from('.laptop-img', {
    x: '-100vw',
    opacity: 0
})
.from('.r-arrow-img', {
    x: '-100vw',
    opacity: 0
})
.from('.server-img', {
    x: '100vw',
    opacity: 0
})
.from('.dns-img', {
    y: '100vh',
    opacity: 0
})
.from('.l-arrow-img', {
    x: '100vw',
    opacity: 0
})

t4.from('.hosting-img', {
    x: '100vw',
    opacity: 0
})
.from(".hosting-content", {
    y: '100vh',
    opacity: 0
})
.from('.hr4', {
    x: '100vw',
    opacity: 0 
})
.from('.hr4b', {
    x: '-100vh',
    opacity: 0
});

t5.from('.front-end-img', {
    x: '-100vw',
    opacity: 0
})
.from('.front-end-content', {
    x: '-100vw',
    opacity: 0
})
.from('.back-end-img', {
    x: '100vw',
    opacity: 0
})
.from('.back-end-content', {
    x: '100vw',
    opacity: 0
});

t6.from('.devices-img', {
    y: '-100vh',
    opacity: 0
}).to('.devices-img', {
    y: '100vh',
    opacity: 0
}).from('.access-img', {
    y: '100vh',
    opacity: 0
});