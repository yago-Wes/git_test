const content_html = [document.getElementById('plu'), document.getElementById('less')]
const content_contador = [document.getElementById('acc'), document.getElementById('reset')]

content_html[0].addEventListener('click', () => {
    let Number_contador = parseInt(content_contador[0].innerHTML)
    Number_contador++
    content_contador[0].innerHTML = Number_contador
    content_html[0].style.width = '45px'
    content_html[0].style.height = '45px'
    setTimeout(() => {
        content_html[0].style.width = '50px'
        content_html[0].style.height = '50px'
    }, 100)

})

content_html[1].addEventListener('click', () => {
    let Number_contador = parseInt(content_contador[0].innerHTML)
    Number_contador--
    content_contador[0].innerHTML = Number_contador
    content_html[1].style.width = '45px'
    content_html[1].style.height = '45px'
    setTimeout(() => {
        content_html[1].style.width = '50px'
        content_html[1].style.height = '50px'
    }, 100)

})

content_contador[0].addEventListener('mouseover', () => {

    content_contador[0].style.display = 'none'
    content_contador[1].style.display = 'flex'
})
content_contador[1].addEventListener('mouseout', () => {

    content_contador[0].style.display = 'flex'
    content_contador[1].style.display = 'none'


})

content_contador[1].addEventListener('click', () => {

    content_contador[0].innerHTML = 0
})