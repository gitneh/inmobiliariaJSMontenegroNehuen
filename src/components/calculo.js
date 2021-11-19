let miFormulario = document.getElementById('form');
// miFormulario.addEventListener('submit',sumar);
//  Función para capturar valores del campo, y calcularlos
function sumar(e) {
    e.preventDefault();
    let campo1 = parseFloat (document.getElementById('campo1').value);
    let campo2 = parseFloat (document.getElementById('campo2').value);
    let campo3 = parseFloat (document.getElementById('campo3').value);
//  Evitar que los campos queden en blanco   
    do {
        let sumaT = (campo1+campo2+campo3);
        let comision = Math.round (sumaT * 0.4);
    $("#tbody").append(`<div>
                        <h3>El valor de la comisión es de $${comision}</h3>
                        </div>`);
    }while (isNaN(comision));
}
miFormulario.addEventListener('submit',sumar);
// if (campo1 !="" && campo2 !="" && campo3 !="");