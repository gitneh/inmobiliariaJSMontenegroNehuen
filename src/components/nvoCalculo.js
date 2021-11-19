const contenedorContratos = document.getElementById ('contratosJSON');

let contratos =[];
// Llamada asíncrona
$.getJSON('data/datos.json', function (data) {
    console.log(data)
    mostrarContratos (data)
})
// Uso del JSON para agregarlo al HTML
mostrarContratos(contratos)
function mostrarContratos (array){
    for (const contrato of array) {
                 $("#contratosJSON").append(`<div>
                                         <h4> ID: ${contrato.idContrato} </h4>
                                         <p> Nombre: ${contrato.nombre}</p>
                                         <p> $ ${contrato.valorContrato}</p>
                                         </div>`);
    }
}
