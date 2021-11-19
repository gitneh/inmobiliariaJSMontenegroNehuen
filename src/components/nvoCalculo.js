const contenedorContratos = document.getElementById ('contratosJSON');

let contratos = [];
$.getJSON('datos.json', function (data) {
    mostrarContratos (data)
})
mostrarContratos(contratos)
function mostrarContratos (array){
    for (const contrato of array) {
        let div = document.createElement('div');
        div.innerHTML += (`<div>
                            <h4> ID: ${contrato.idContrato} </h4>
                            <p> Nombre: ${contrato.nombre}</p>
                            <b> $ ${contrato.valorContrato}</b>
                            </div>`);
        contenedorContratos.appendChild(div)
    }
}

function agregarContrato () {

}