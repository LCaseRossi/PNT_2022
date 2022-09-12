 

function hacerRegistro(){

const email = document.getElementById("email")
const Password = document.getElementById("Password")
const Password2 = document.getElementById("Password2")
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const edad = document.getElementById("edad")
const Profesion = document.getElementById("Profesion")
const form = document.getElementById("form")
const form1 = document.getElementById("form1")
const parrafo = document.getElementById("warnings")
const submit = document.getElementById("Registrarse")

    let warnings=""
    let entrar=false
    let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML=""
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings+='Email invalido <br>'
        entrar=true
    }
    if(Password.value.lenght<8){
        warnings+='La contraseña debe contener al menos 8 caracteres <br>'
        entrar=true
    }
    if(Password.value!=Password2.value){
        warnings+='Las contraseñas no son iguales  <br>'
        entrar=true
    }

    if(fname.value.lenght=0){
        warnings+='Nombre invalido <br>'
        entrar=true
    }
    if(lname.value.lenght=0){
        warnings+='Apellido invalido <br>'
        entrar=true
    }
    if(edad.value=0 || edad.value>100 ){
        warnings+='Edad invalida <br>'
        entrar=true
    }
     if (entrar){
        parrafo.innerHTML=warnings
    }else{
        parrafo.innerHTML='Registrado Correctamente' 
       apagarRegistro();
    }
}
function apagarRegistro(){
    form1.style.visibility = "visible";
    form.style.visibility = "hidden";
    
}
function prenderRegistro(){
    const form = document.getElementById("form");
    const form1 = document.getElementById("form1");
    form1.style.visibility = "hidden";
    form.style.visibility = "visible";
   
    
}

