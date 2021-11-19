let miFormulario = document.getElementById('form');
//  Función para capturar valores del campo, y calcularlos
function sumar(e) {
    e.preventDefault();
    let campo1 = parseFloat (document.getElementById('campo1').value);
    let campo2 = parseFloat (document.getElementById('campo2').value);
    let campo3 = parseFloat (document.getElementById('campo3').value);
//  Evitar que los campos queden en blanco   
let sumaT = (campo1+campo2+campo3);
let comision = Math.round (sumaT * 0.4);
if (campo1 !="" && campo2 !="" && campo3 !="") {

    }else if(
        comision = isNaN(comision))
                        { $("#tbody").append(`<div>
                        <h3>El valor de la comisión es de $${comision}</h3>
                        </div>`);
    }else{
        $("#tbody").append(`<div>
        <h3>Debe ingresar el valor anual del contrato en los campos especificados</h3>
        </div>`);
    }
}
miFormulario.addEventListener('submit',sumar);
