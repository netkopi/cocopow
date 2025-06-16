gsap.registerPlugin(ScrollTrigger)

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
})



       
const sections = document.querySelectorAll('.fade-up')

sections.forEach((section, i) => {
    gsap.from(section, {
        y: 64,
        opacity: 0,
        duration: .5,
        scrollTrigger: {
            trigger: section,
            start: "top center",
            toggleActions: "play reverse play reverse"
        }
    })
    
})

const magneticButtons = document.querySelectorAll('.magnetic-button')
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




window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.querySelector('.loader')
        loader.style.display = 'none'
        document.body.style.overflowY = 'auto'
    }, 3000)
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


const orderForm = document.querySelector('.orderForm')
orderForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const paymentMethod = document.querySelector('#payment-method').value
    const response = document.querySelector('.autoresponse')

    switch(paymentMethod){
        case "GCash":
            response.value = `Hello Customer 👋 Thank your for choosing CocoPow. Please proceed your payment here by clicking the link: https://netkopi.github.io/cocopow/payment-transaction/payment.html?mthd=GCash`
            break
        case "BPI":
            response.value = `Hello Customer 👋 Thank your for choosing CocoPow. Please proceed your payment here by clicking the link: https://netkopi.github.io/cocopow/payment-transaction/payment.html?mthd=BPI`
            break
        default:
            response.value = `Hello Customer 👋 Thank your for choosing CocoPow. Please proceed your payment on our site.`
            break
    }
    

    orderForm.submit()
})




const orderformCheckbox = document.querySelectorAll(".order-form form input[type='checkbox']")
orderformCheckbox.forEach(box => {
    box.addEventListener('change', () => {
        if(orderformCheckbox[0].checked && orderformCheckbox[1].checked) document.querySelector("#submit-order-form").disabled = false
        if(!orderformCheckbox[0].checked || !orderformCheckbox[1].checked) document.querySelector("#submit-order-form").disabled = true
    })
})