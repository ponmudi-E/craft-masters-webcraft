window.addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY>10)
})




const faqs= document.querySelectorAll(".faq");

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

        const icon=faq.querySelector('.faq__icon i')
        if (icon.className==='uil uil-plus-circle'){
            icon.className = "uil uil-minus-circle"
        }
        else{
            icon.className = "uil uil-plus-circle"
        }
    })
})




