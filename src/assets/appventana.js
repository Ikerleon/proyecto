let abrirModal = document.getElementById('abrirModal');
let cerrarModal = document.getElementById('cerrarmodal');
let justificarModal=document.getElementById('justificar');
let cerrar = document.getElementById('close');
let cerrar1 = document.getElementById('close1');
let cerrar2 = document.getElementById('close2');
let agregarModal= document.getElementById('enviar');
let dar_bajaModal=document.getElementById('dar_baja');
let justificar_bajaModal=document.getElementById('justificar_');
// Abri modal

abrirModal.onclick = function(){
    modal.style.visibility = "visible";
}
cerrarModal.onclick=function(){
    modal1.style.visibility = "visible";
}
justificarModal.onclick=function(){
    modal2.style.visibility = "visible";
}
// Cerrar Modal Btn

cerrar.onclick = function(){
    modal.style.visibility = "hidden";
}
cerrar1.onclick=function(){
    modal1.style.visibility = "hidden";
}
cerrar2.onclick=function(){
    modal2.style.visibility = "hidden";
}

// Cerrar en ventana 
agregarModal.onclick=function(){
    modal.style.visibility = "hidden";
    alert("Estudiante agregado correctamente");
}
dar_bajaModal.onclick=function(){
    modal1.style.visibility = "hidden";
    alert("Estudiante dado de baja");
}

justificar_bajaModal.onclick=function(){
    modal2.style.visibility = "hidden";
    alert("Estudiante justificado");
}