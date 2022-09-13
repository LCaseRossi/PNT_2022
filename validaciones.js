
function hacerRegistro() {

    const email = document.getElementById("email")
    const Password = document.getElementById("Password")
    const Password2 = document.getElementById("Password2")
    const fname = document.getElementById("fname")
    const lname = document.getElementById("lname")
    const edad = document.getElementById("edad")
    const Profesion = document.getElementById("Profesion")
    const parrafo = document.getElementById("mensajeErrores")
    const submit = document.getElementById("Registrar")


    let warnings = document.createElement('p');
    warnings.innerHTML = "";
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!email.value.match(regexEmail)) {
        let txt = document.createTextNode("Email invalido");
        warnings.appendChild(txt);
        entrar = true
    }
    if (Password.value.lenght < 8) {
        let txt = document.createTextNode("La contraseña debe contener al menos 8 caracteres");
        warnings.appendChild(txt);
        entrar = true
    }
    if (Password.value != Password2.value) {
        let txt = document.createTextNode("Las contraseñas no son iguales");
        warnings.appendChild(txt);
        entrar = true
    }

    if (fname.value.lenght = 0) {
        let txt = document.createTextNode("Nombre invalido");
        warnings.appendChild(txt);
        entrar = true
    }
    if (lname.value.lenght = 0) {
        let txt = document.createTextNode("Apellido invalido");
        warnings.appendChild(txt);
        entrar = true
    }
    if (edad.value = 0 || edad.value > 100) {
        let txt = document.createTextNode("Edad invalida");
        warnings.appendChild(txt);
        entrar = true
    }
    if (entrar) {
        parrafo.appendChild(warnings)
    } else {
        parrafo.innerHTML = 'Registrado Correctamente'
        apagarRegistro();
    }
}
function apagarRegistro() {
    form1.style.visibility = "visible";
    form.style.visibility = "hidden";

}
function prenderRegistro() {
    form1.style.visibility = "hidden";
    form.style.visibility = "visible";
}

