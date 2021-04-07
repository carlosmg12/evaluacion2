var formulario = document.getElementById("formulario");
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var rut = document.getElementById("rut");
var correo = document.getElementById("correo");
var celular = document.getElementById("celular");
var descripcion = document.getElementById("descripcion");
var mensaje = document.getElementById("mensaje");
var alertaTotal = document.getElementById("alertaTotal");
formulario.addEventListener("submit", function (evento) {
    var python = document.forms["formulario"]["python"].checked;
    var java = document.forms["formulario"]["java"].checked;
    var ts = document.forms["formulario"]["ts"].checked;
    var php = document.forms["formulario"]["php"].checked;
    var c = document.forms["formulario"]["c"].checked;
    var c2 = document.forms["formulario"]["c2"].checked;
    var rutValido = /^\d{1,2}\d{3}\d{3}[-][0-9kK]{1}$/;
    var numeroValido = /^9\d{8}$/;
    var alerta = "";
    var datosValidos = true;
    evento.preventDefault();
    if (nombre.value.length == 0) {
        alerta += "Ingrese un nombre por favor.<br>";
        datosValidos = false;
    }
    if (apellidos.value.length == 0) {
        alerta += "Ingrese sus apellidos por favor.<br>";
        datosValidos = false;
    }
    if (rut.value.length == 0) {
        alerta += "Ingrese su rut por favor.<br>";
        datosValidos = false;
    }
    if (rut.value.length > 0 && !rutValido.test(rut.value)) {
        alerta += "El rut no tiene un formato valido.<br>";
    }
    if (correo.value.length == 0) {
        alerta += "Ingrese un correo por favor.<br>";
        datosValidos = false;
    }
    if (celular.value.length == 0) {
        alerta += "Ingrese un n\u00FAmero de tel\u00E9fono por favor.<br>";
        datosValidos = false;
    }
    if (celular.value.length > 0 && !numeroValido.test(celular.value)) {
        alerta += "Ingrese un n\u00FAmero de tel\u00E9fono v\u00E1lido por favor. (primer digito 9 m\u00E1s 8 d\u00EDgitos)<br>";
        datosValidos = false;
    }
    if (!python && !java && !ts && !php && !c && !c2) {
        alerta += "Seleccione al menos un lenguaje de programaci\u00F3n por favor.<br>";
        datosValidos = false;
    }
    if (descripcion.value.length == 0) {
        alerta += "Ingrese una breve descrpci\u00F3n por favor.<br>";
        datosValidos = false;
    }
    if (!datosValidos) {
        alertaTotal.innerHTML = alerta;
    }
    if (datosValidos) {
        formulario.style.display = "none";
        mensaje.style.display = "block";
        mensaje.innerHTML = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted.";
        mensaje.style.color = "white";
    }
    /*evento.preventDefault();*/
});
function limpiarDatos() {
    formulario.reset();
}
