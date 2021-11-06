
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
        localStorage.setItem('suma', JSON.stringify(suma))
    }else {
        let suma = JSON.parse(localStorage.getItem('suma'))
        suma.push(sumaT)
        localStorage.setItem('suma', JSON.stringify(suma))
    }
    leer();
    document.getElementById('form').reset();

}

function leer(){

    let suma = JSON.parse(localStorage.getItem('suma'));

    document.getElementById('tbody').innerHTML = "";

    for (let i = 0; i < suma.length; i++) {
        
        let campo1 = suma[i].document.getElementById('campo1').value;
        let campo2 = suma[i].document.getElementById('campo2').value;
        let campo3 = suma[i].document.getElementById('campo3').value;
        let sumaT = campo1+campo2+campo3;
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