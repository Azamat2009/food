let inputs = document.querySelectorAll('.order__input')
let form = document.forms.reg
let allInps = document.querySelectorAll('form input')



let regex = {
    name: /^[a-z ,.'-]+$/g,
    phone: /^998[012345789][0-9]{8}$/g
}


function validate(regex, field) {
    if (regex.test(field.value)) {
      
        field.style.borderColor = "green"
    } else {
      
        field.style.borderColor = "red"
    }

}

allInps.forEach(inp => {
    inp.onkeyup = () =>{
      validate(regex[inp.name], inp)

    }
});

form.onsubmit = (event) => {
    event.preventDefault();
    let errorss = 0

    inputs.forEach(inp => {
        inp.classList.remove('invalid')
        if (inp.value.length < 1) {

            inp.classList.add('invalid')
            errorss++
        }
    })
    
    
    ;


    if (errorss > 0) {
        console.log('error');
    } else {
        submit(form)
    }

}


function submit(formElement) {
    let user = {}

    let fm = new FormData(formElement)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}


let close = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let text = document.querySelector('#current')
let total = document.querySelector('#total')
let slide = document.querySelectorAll('.offer__slide')

let nextSlider = 0

close.onclick = () => {
    nextSlider--
    shou_slide(nextSlider)
}


next.onclick = () => {
    nextSlider++
    shou_slide(nextSlider)
}


function shou_slide(nc) {
    if (nc >= slide.length) {
        slide_next = 0
    }

    if (nc == -1) {
        nextSlider = slide.length - 1
    }
    slide.forEach((slide) => {
        slide.style.display = "none"
        slide.classList.remove('fade')
    })
    slide[nextSlider].classList.add('fade')
    slide[nextSlider].style.display = "block"

    text.innerHTML = '0' + (nextSlider + 1)
}

shou_slide()


let tabcontents = document.querySelectorAll('.tabcontent')
let btns = document.querySelectorAll('.tabheader__item')

showTabs()

function showTabs(n = 0) {
    tabcontents.forEach(element => {
        element.style.display = "none"
        element.classList.remove('fade')
    });
    tabcontents[n].classList.add('fade')
    tabcontents[n].style.display = "block"
}


btns.forEach((btn, index) => {
    btn.onclick = () => {
        btns.forEach(el => el.classList.remove('tabheader__item_active'))

        btn.classList.add('tabheader__item_active')
        showTabs(index)
    }
}) 