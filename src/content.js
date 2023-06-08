console.log('Content File')
let app = document.getElementById('app')
let appOverlay = document.createElement('div')
               appOverlay.setAttribute('class','overlay hidden')
let section = document.createElement('section')
   section.setAttribute('class','modal hidden')

let modalHead = document.createElement('div')
    modalHead.setAttribute('class','flex')
    section.appendChild(modalHead)

let modalBody = document.createElement('div')
    section.appendChild(modalBody)
    app.append(section)

let domed = document.getElementsByClassName('modal')

setInterval(() => {
    console.log(section)

},10000)
