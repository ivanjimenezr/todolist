let textoAcumulado = '';
function capturaText(event){
    // console.log(event['data'])
    textoAcumulado += event['data']
    console.log(textoAcumulado)
    return textoAcumulado;
}
document.querySelector('input').addEventListener('input',capturaText)
let botonPlus = document.querySelector('button.btn-add')
function botonAnadir(event){
    if (textoAcumulado != ''){

        let divEmpty = document.querySelector('div.empty')
        if (divEmpty != null){
            document.querySelector('div.empty').remove()
        }
        
        let ulElem = document.querySelector('ul')
        let liElem = document.createElement('li')
        let pElem = document.createElement('p')
        let textElem = document.createTextNode(textoAcumulado)
        ulElem.appendChild(liElem)
        liElem.appendChild(pElem)
        pElem.appendChild(textElem)

        inputvalue = document.querySelector('input')
        inputvalue.value = ''
        inputvalue.placeholder = "Add task..."

        let botonClose = document.createElement('button')
        botonClose.className = 'btn-delete'
        let xButton = document.createTextNode('x')
        botonClose.appendChild(xButton)
        liElem.appendChild(botonClose)
        textoAcumulado = '';
        let elementoPadre = pElem.parentElement;
        function removeButton (event){
            elementoPadre.remove()
        }
        botonClose.addEventListener('click', removeButton);
    } else {
        alert("Debes introducir un texto a buscar");
    }
}
botonPlus.addEventListener('click', botonAnadir);

// para evitar envio del form
const formulario = document.getElementsByTagName('form')[0];
formulario.addEventListener("click", evento => { evento.preventDefault(); })