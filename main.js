// Barra de navegación
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
 window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

// Botones cards ---hay que arreglar
const btn = document.getElementsByClassName("btn")
btn.forEach(btn => {
    btn.addEventListener('click', function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
    
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);
    
        setTimeout(() => {
            ripples.remove()
        }, 1000);
    });

})

//Validación formulario
//Variables Regex
const Valnombre = /^[a-zA-Z\s]{3,}$/; //nombre
const Valemail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/; //email
const Valnum = /^((?!000)\d{3})[-\s]?\d{3}[-\s]?\d{4}$/ ; //telefono

//validar el formulario
//agregar una alerta al mandar el formulario
