const contenedorContratos = document.getElementById ('contratosJSON');

let contratos =[];

$.getJSON('data/datos.json', function (data) {
    console.log(data)
    mostrarContratos (data)
})

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
