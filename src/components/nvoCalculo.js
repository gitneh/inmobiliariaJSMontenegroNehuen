const contenedorContratos = document.getElementById ('contratosJSON');

let contratos =[];

$.getJSON('data/datos.json', function (data) {
    console.log(data)
    mostrarContratos (data)
})

mostrarContratos(contratos)
function mostrarContratos (array){
    for (const contrato of array) {
                 $("#contratosJSON").prepend(`<div>
                                         <h4> ID: ${contrato.idContrato} </h4>
                                         <p> Nombre: ${contrato.nombre}</p>
                                         <b> $ ${contrato.valorContrato}</b>
                                         </div>`);
    }
}