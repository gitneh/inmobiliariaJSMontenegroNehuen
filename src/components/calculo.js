let alquiler1 = prompt("Ingrese el alquiler por mes del primer año en pesos");
if (alquiler1 !=""){console.log(alquiler1)} else {alert("Monto no ingresado") }

let alquiler2 = prompt("Ingrese el alquiler por mes del segundo año en pesos");
if (alquiler2 !="") {console.log(alquiler2)}else {alert("Monto no ingresado") }

let alquiler3 = prompt("Ingrese el alquiler por mes del tercer año en pesos");
if (alquiler3 !="") {console.log(alquiler3)}else {alert("Monto no ingresado") }

let sumaAlq1 = (alquiler1 * 12);
let sumaAlq2 = (alquiler2 * 12);
let sumaAlq3 = (alquiler3 * 12);
const sumaT = (a, b, c) => a + b + c;
const comision = (sumaT(sumaAlq1, sumaAlq2, sumaAlq3) * 0.04);
alert("la comisión inmobiliaria es: $" + comision);

class contrato {
    constructor(idContrato, nombre, valorContrato) {
        this.nombre  = nombre.toUpperCase();
        this.idContrato  = idContrato;
        this.valorContrato = parseFloat(valorContrato);
    }
    comisionT() {
        this.valorContrato = this.valorContrato * 0.04;
    }
}

for (const contrato of contratos)
    contrato.comisionT();

    console.log(contratos);
