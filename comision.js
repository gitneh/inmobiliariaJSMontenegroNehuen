

const localJSON = "data/datos.json";
$("#botonC").click( () => {
    $.getJSON (localJSON, function (respuesta, estado) {
        if ( estado === "success") {
            let misDatos = respuesta;
            for (const dato of misDatos) {
                $("#contratosJSON").prepend(`<div>
                                        <h4> ID: ${dato.idContrato} </h4>
                                        <p> Nombre: ${dato.nombre}</p>
                                        <b> $ ${dato.valorContrato}</b>
                                        </div>`);

            }
        }
    })
})
$("#botonC").click(() => { 
    $("#divC").toggle("slow");})


let valid = document.getElementsByClassName("valid-feedback")
valid.parentNode.removeChild(valid)

const save = (clave, valor) => { localStorage.setItem(clave, valor)}
save("contratos", JSON.stringify(contratos));

$("#btn-enviar").submit (function(e){
    e.preventDefault();
    console.log("Formulario Enviado");    
})

$(".accordion-button collapsed").click (function () {
    console.log("Desplegado");
});

