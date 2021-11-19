let miFormulario = document.getElementById('form');
miFormulario.addEventListener('submit',sumar);

function sumar(e) {
    e.preventDefault();
    let campo1 = parseFloat (document.getElementById('campo1').value);
    let campo2 = parseFloat (document.getElementById('campo2').value);
    let campo3 = parseFloat (document.getElementById('campo3').value);

    let sumaT = campo1+campo2+campo3;
    $("#tbody").append(`<div>
<h3>La suma total del contrato es de $${sumaT}</h3>
</div>`);
}

