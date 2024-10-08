// efecto del boton
var menuToggle = document.querySelector('.menu_toggle');

menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
})

// Barra de navegación
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
 window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer Jr.", "Ingeniera Biónica &#129471;", "Artista amateur &#127912;", "Dog Lover &#128062;", "Gamer &#127918;"],
    typeSpeed: 95,
    backSpeed: 80,
    backDelay: 500,
    loop: true
})

//Funcion para validar el formulario
let btnEnviar = document.getElementById("btnEnviar");

function validateForm() {
    //elementos necesarios
    let name = document.getElementById("exampleInputName");
    let email = document.getElementById("exampleInputEmail");
    let phone = document.getElementById("exampleInputPhone");
    let message = document.getElementById("exampleInputMessage");
  
    // span para mostrar errorer 
    let errorNombre = document.getElementById("errorNombre");
    let errorTelefono = document.getElementById("errorTelefono");
    let errorEmail = document.getElementById("errorEmail");
    let errorMensaje = document.getElementById("errorMensaje");
  
    // Limpiar errores
    errorNombre.innerHTML = "";
    errorTelefono.innerHTML = "";
    errorEmail.innerHTML = "";
    errorMensaje.innerHTML = "";
    clearErrors();
  
    //bandera para la validacion
    let valid = true;
  
    // Regex patterns proporcionados por IHATE REGEX
    let namePattern = /^[a-zA-Z\s]{3,}$/;
    let emailPattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    let phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    let messagePattern = /^.{20,}$/;
  
  
    if (!namePattern.test(name.value.trim())) {
      errorNombre.innerHTML = "Por favor ingrese un nombre válido";
      
      name.setAttribute("style", "background-color: #D97575;");
      valid = false;
      
    }
  
    if (!emailPattern.test(email.value.trim())) {
      errorEmail.innerHTML = "Por favor ingrese un email válido";
      
      email.setAttribute("style", "background-color: #D97575;");
      valid = false;
  
  
    }
  
    if (!phonePattern.test(phone.value.trim())) {
      errorTelefono.innerHTML = "Por favor ingrese un teléfono válido (entre 10 y 12 dígitos)";
  
      phone.setAttribute("style", "background-color: #D97575;");
      valid = false;
    }
  
    if (!messagePattern.test(message.value.trim())) {
      errorMensaje.innerHTML = "Por favor ingresa un mensaje válido (al menos 20 caracteres)";
      message.setAttribute("style", "background-color: #D97575;");
      valid = false;
    }
    
    return valid;
}

//Funcion para limpiar errores
function clearErrors() {
    let name = document.getElementById("exampleInputName");
    let email = document.getElementById("exampleInputEmail");
    let phone = document.getElementById("exampleInputPhone");
    let message = document.getElementById("exampleInputMessage");
  
    name.setAttribute("style", "border-color: #ced4da;");
    name.setAttribute("style", "background-color: white;");
    email.setAttribute("style", "border-color: #ced4da;");
    email.setAttribute("style", "background-color: white;");
    phone.setAttribute("style", "border-color: #ced4da;");
    phone.setAttribute("style", "background-color: white;");
    message.setAttribute("style", "border-color: #ced4da;");
    message.setAttribute("style", "background-color: white;");
}

//Enviar correo
btnEnviar.addEventListener("click", function(e) {
    e.preventDefault();
    
    if (validateForm()) {
        let name = document.getElementById("exampleInputName").value;
        let email = document.getElementById("exampleInputEmail").value;
        let phone = document.getElementById("exampleInputPhone").value;
        let message = document.getElementById("exampleInputMessage").value;

        // Parámetros para enviar el correo
        let templateParams = {
            name: name,
            email_id: email,
            phone: phone,
            message: message
        };

           // Limpiar los campos
           document.getElementById("exampleInputName").value = "";
           document.getElementById("exampleInputEmail").value = "";
           document.getElementById("exampleInputPhone").value = "";
           document.getElementById("exampleInputMessage").value = "";
           clearErrors();

        // Enviar el correo usando EmailJS
        emailjs.send('service_zax6lxp','template_nuqizve', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                //alerta de exito
               Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "¡Mensaje enviado con éxito!",
                    showConfirmButton: false,
                    timer: 1500
                });
               
            }, function(error) {
                console.log('FAILED...', error);

                Swal.fire({
                  position: "center",
                  icon: "error",
                  title: response.text,
                  showConfirmButton: false,
                  timer: 2000
                });
            });
    }
});