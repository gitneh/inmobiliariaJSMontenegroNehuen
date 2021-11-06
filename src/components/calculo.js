// let alquiler1 = prompt("Ingrese el alquiler por mes del primer año en pesos");
// if (alquiler1 !=""){console.log(alquiler1)} else {alert("Monto no ingresado") }

// let alquiler2 = prompt("Ingrese el alquiler por mes del segundo año en pesos");
// if (alquiler2 !="") {console.log(alquiler2)}else {alert("Monto no ingresado") }

// let alquiler3 = prompt("Ingrese el alquiler por mes del tercer año en pesos");
// if (alquiler3 !="") {console.log(alquiler3)}else {alert("Monto no ingresado") }

// let sumaAlq1 = (alquiler1 * 12);
// let sumaAlq2 = (alquiler2 * 12);
// let sumaAlq3 = (alquiler3 * 12);
// const sumaT = (a, b, c) => a + b + c;
// const comision = (sumaT(sumaAlq1, sumaAlq2, sumaAlq3) * 0.04);
// alert("la comisión inmobiliaria es: $" + comision);

// class contrato {
//     constructor(idContrato, nombre, valorContrato) {
//         this.nombre  = nombre.toUpperCase();
//         this.idContrato  = idContrato;
//         this.valorContrato = parseFloat(valorContrato);
//     }
//     comisionT() {
//         this.valorContrato = this.valorContrato * 0.04;
//     }
// }

// for (const contrato of contratos)
//     contrato.comisionT();

//     console.log(contratos);

// function guardarEnLocalStorage (){
// let campo1 = $("#campo1").val()
// localStorage.setItem('$("#campo1").val()', campo1 );
// }
// guardarEnLocalStorage()

// function obtenerEnLocalStorage(){
//     if(localStorage.getItem('campo1')){

//         let nombre = localStorage.getItem('campo1');
//         console.log(nombre)
//     }
//     if(localStorage.getItem('$("#campo1").val()')){ 

//         let alumno = localStorage.getItem('$("#campo1").val()');
//         alumno = JSON.parse(alumno)
//         console.log(alumno.nombre) 
//     }else {
//         console.log('No se encontraron datos en local')
//     }
// }

document.getElementById('form').addEventListener('submit',crear);
function crear(e) {
    e.preventDefault();
    let campo1 = document.getElementById('campo1').value;
    let campo2 = document.getElementById('campo2').value;
    let campo3 = document.getElementById('campo3').value;

    let sumaT = campo1+campo2+campo3
    

    if(localStorage.getItem('suma') === null){

        let suma = [];
        suma.push(sumaT)
        localStorage.setItem('suma', JSON.stringify(campo1+campo2+campo3))
    }else {
        let suma = JSON.parse(localStorage.getItem('suma'))
        libros.push(suma)
        localStorage.setItem('suma', JSON.stringify(campo1+campo2+campo3))
    }
    leer();
    document.getElementById('form').reset();

}

function leer(){

    let suma = JSON.parse(localStorage.getItem('suma'));

    document.getElementById('tbody').innerHTML = "";

    for (let i = 0; i < libros.length; i++) {
        
        let sumaT = suma[i].campo1+campo2+campo3;
        document.getElementById('tbody').innerHTML += 
        ` 
        <div class="input-group mb-3">
        <span class="input-group-text">$</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
        <span class="input-group-text">${sumaT}</span>
      </div>
        `
    }
}
leer();