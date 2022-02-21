let tl = gsap.timeline({defaults: {duration: 1.5}})

tl
.fromTo('#text', {scale: 3, y: '-200%', opacity: 0}, {scale: .6, y: "20%", opacity: 1})
.fromTo('#mark', {y: '200%'}, {y: '-10%'}, "-=1.4")
.to('#text', {scale: 1, y: 0, ease: 'power2.out'})
.to('#mark', {y:0 , ease: 'power2.out'}, "-=1.4")
.to('#text', {scale: .8, y: "-20%", duration: 1.2})
.to('#mark', {y: '10%', duration: 1.2}, '-=1.2')
.to('#text', {scale: 1, y: 0})
.to('#mark', {y: 0}, '-=1.4')
.to('#text', {scale: 3, opacity: 0, y: '-30%', duration: 3})
.to('#mark', {scale: 3, opacity: 0, y: '30%', duration: 3}, '-=3')
.to('.preloader', {opacity: 0, duration: 3}, '-=3')
.to('.preloader', {display: 'none', duration: .1})
.fromTo('.logo img', {scale: 2, position: "fixed", opacity:0 , top: '25%', left: '25%', duration: 2},{scale: 1, opacity: .5}, "-=3")
.to('.logo img', {position: 'fixed',opacity: 1, top: '3%', left: "5%", scale: 1}, '-=1.4')
.to('.logo img', {position: 'relative', duration: .1})
.from('header section h2', {opacity: 0, xPercent: -100, duration: 2}, '-=2.5')
.from('.showcase', {opacity: 0, xPercent: 100}, '-=2')
.from('.floating-bar', {opacity: 0, yPercent: 100}, '-=1.6')
.from('header nav ul', {opacity: 0, yPercent: -100}, '-=2')
.from('.nav-actions', {opacity: 0, yPercent: -100, xPercent: 100}, '-=2')
.from('header section p', {opacity: 0, yPercent: 100, duration: 2}, '-=1.5')
.from('.section-actions', {opacity: 0, yPercent: 100, duration: 2}, '-=2')
