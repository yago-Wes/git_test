let content_html  = [document.getElementById('plu'),document.getElementById('less')]

const content_contador = document.getElementById('acc')

content_html[0].addEventListener('click',()=>{
  let Number_contador = parseInt(content_contador.innerHTML)
  Number_contador++
  content_contador.innerHTML = Number_contador
})

content_html[1].addEventListener('click',()=>{
    let Number_contador = parseInt(content_contador.innerHTML)
    Number_contador--
    content_contador.innerHTML = Number_contador
  })
  
