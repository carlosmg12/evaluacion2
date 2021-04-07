let formulario:any=document.getElementById("formulario");

let nombre:any=document.getElementById("nombre");
let apellidos:any=document.getElementById("apellidos");
let rut:any=document.getElementById("rut");
let correo:any=document.getElementById("correo");
let celular:any=document.getElementById("celular");
let descripcion:any=document.getElementById("descripcion");
let mensaje:any=document.getElementById("mensaje");
let alertaTotal:any=document.getElementById("alertaTotal")




formulario.addEventListener("submit",function(evento){
    let python:any=document.forms["formulario"]["python"].checked;
    let java:any=document.forms["formulario"]["java"].checked;
    let ts:any=document.forms["formulario"]["ts"].checked;
    let php:any=document.forms["formulario"]["php"].checked;
    let c:any=document.forms["formulario"]["c"].checked;
    let c2:any=document.forms["formulario"]["c2"].checked;
    let rutValido=/^\d{1,2}\d{3}\d{3}[-][0-9kK]{1}$/;
    let numeroValido=/^9\d{8}$/;
    let alerta="";
    let datosValidos=true;
    
    evento.preventDefault();
    if(nombre.value.length==0){
        alerta+=`Ingrese un nombre por favor.<br>`;
        datosValidos=false;
    }
    if(apellidos.value.length==0){
        alerta+=`Ingrese sus apellidos por favor.<br>`;
        datosValidos=false;
    }
    if(rut.value.length==0){
        alerta+=`Ingrese su rut por favor.<br>`;
        datosValidos=false;
    }
    if(rut.value.length>0 && !rutValido.test(rut.value)){
        alerta+=`El rut no tiene un formato valido.<br>`;
        datosValidos=false;
    }
    if(correo.value.length==0){
        alerta+=`Ingrese un correo por favor.<br>`;
        datosValidos=false;
    }
    if(celular.value.length==0){
        alerta+=`Ingrese un número de teléfono por favor.<br>`;
        datosValidos=false;
    }
    if(celular.value.length>0 && !numeroValido.test(celular.value)){
        alerta+=`Ingrese un número de teléfono válido por favor. (primer digito 9 más 8 dígitos)<br>`;
        datosValidos=false;
    }
    if(!python && !java && !ts && !php && !c && !c2){
        alerta+=`Seleccione al menos un lenguaje de programación por favor.<br>`
        datosValidos=false;
    }
    if(descripcion.value.length==0){
        alerta+=`Ingrese una breve descrpción por favor.<br>`;
        datosValidos=false;
    }
    if(!datosValidos){
        alertaTotal.innerHTML=alerta;
    }
    if(datosValidos){
        formulario.style.display="none";
        mensaje.style.display="block";
        mensaje.innerHTML="Hemos recibido sus datos, pronto nos estaremos comunicando con usted.";   
        mensaje.style.color="white";
    }


    /*evento.preventDefault();*/
    
});


function limpiarDatos(){
    formulario.reset();
}