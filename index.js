/* gsap.registerPlugin(ScrollTrigger)

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 1,
    multiplier: 1,
  });

const heroBg = document.querySelector('.hero img')
const hero = document.querySelector('.hero')
gsap.to(heroBg, {
    y: 120,
    duration: 1,
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: hero,
        start: "-80px top",
        scrub: true 
    }
})


const aboutImg = document.querySelector('.about img')
const about  = document.querySelector('.about')
gsap.to(aboutImg, {
    y: 64,
    duration: 3,
    scrollTrigger: {
        trigger: about,
        start: "-256px top",
        end: "bottom top",
        scrub: true
    }
}) */



/*        
const sections = document.querySelectorAll('.fade-up')

sections.forEach((section, i) => {
    gsap.from(section, {
        y: 64,
        opacity: 0,
        duration: .5,
        scrollTrigger: {
            trigger: section,
            start: "-300px top",
            toggleActions: "play reverse play reverse"
        }
    })
    
}) */

/* const magneticButtons = document.querySelectorAll('.magnetic-button')
const magneticTexts = document.querySelectorAll('.magnetic-text')

magneticButtons.forEach((button, i) => {
    button.addEventListener('mousemove', (e) => {
        const boundBox = button.getBoundingClientRect()
        const newX = (e.clientX - boundBox.left) / button.offsetWidth - 0.5
        const newY = (e.clientY - boundBox.top) / button.offsetHeight - 0.5

        const magnetStrength = button.dataset.strength
        const textStrength = button.dataset.textStrength

        gsap.to(button, {
            x: newX * magnetStrength,
            y: newY * magnetStrength,
            duration: 1,
            ease: Power4.easeOut
        })
        gsap.to(magneticTexts[i], {
            x: newX * textStrength,
            y: newY * textStrength,
            duration: 1,
            ease: Power4.easeOut
        })

    })
    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            x: 0,
            y: 0,
            duration: 1,
            ease: Elastic.easeOut
        })
        gsap.to(magneticTexts[i], {
            x: 0,
            y: 0,
            duration: 1,
            ease: Elastic.easeOut
        })
    })
})


const teamMates = document.querySelectorAll('.team .img-container')
const teamInfos = document.querySelectorAll('.team .info')
teamMates.forEach((mate, i) => {
    mate.addEventListener('mouseenter', () => {
        gsap.to(mate, {
            scale: 1.1,
            duration: 1,
        })
        gsap.to(teamInfos[i], {
            opacity: 1
        })
    })
    mate.addEventListener('mouseleave', () => {
        gsap.to(mate, {
            scale: 1,
            duration: 1
        })
        gsap.to(teamInfos[i], {
            opacity: 0
        })
    })
}) */



window.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader')
    loader.style.display = 'none'
})

const aboutLink = document.querySelectorAll('.about-link')
const productsLink = document.querySelectorAll('.products-link')
const howToOrderLink = document.querySelectorAll('.how-to-order-link')
const logo = document.querySelector('.logo')

const heroSection = document.querySelector('.hero')
const aboutSection = document.querySelector('.about')
const productsSection = document.querySelector('.products')
const howToOrderSection = document.querySelector('.how-to-order')

logo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
aboutLink.forEach(link => {
    link.addEventListener('click', () => {
        aboutSection.scrollIntoView({behavior:'smooth'})
    })
})
productsLink.forEach(link => {
    link.addEventListener('click', () => {
        productsSection.scrollIntoView({behavior:'smooth'})
    })
})
howToOrderLink.forEach(link => {
    link.addEventListener('click', () => {
        howToOrderSection.scrollIntoView({behavior:'smooth'})
    })
})

