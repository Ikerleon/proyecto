let abrirModal = document.getElementById('abrirModal');
let cerrar = document.getElementById('close');
let agregarModal= document.getElementById('enviar');
// Abri modal
abrirModal.onclick = function(){
    modal.style.visibility = "visible";
}
// Cerrar Modal Btn
cerrar.onclick = function(){
    modal.style.visibility = "hidden";
}
// Cerrar en ventana 
agregarModal.onclick=function(){
    modal.style.visibility = "hidden";
}

  