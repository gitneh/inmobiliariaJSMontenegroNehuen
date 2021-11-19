let miFormulario = document.getElementById('form');
miFormulario.addEventListener('submit',sumar);

function sumar(e) {
    e.preventDefault();
    let campo1 = parseFloat (document.getElementById('campo1').value);
    let campo2 = parseFloat (document.getElementById('campo2').value);
    let campo3 = parseFloat (document.getElementById('campo3').value);
    if ((campo1 !="") && (campo2 !="") && (campo3 !="")){
        let sumaT = parseFloat (campo1+campo2+campo3);
        let comision = parseFloat (sumaT * 0.4);
        
    $("#tbody").append(`<div>
                        <h3>El valor de la comisión es de $${comision}</h3>
                        </div>`);
    }else{
        $("#tbody").append(`<div>
        <h3>Debe ingresar el valor anual del contrato en los campos especificados</h3>
        </div>`);
    }
}

