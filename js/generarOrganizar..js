var numeros = new Array(20);
 
function generarOrganizar() {

for (i = 0; i < numeros.length; i++) {
numeros[i] = Math.floor((Math.random() * 100) + 1);
}
//document.getElementById("numeros").innerHTML = numeros.sort(function(a, b){return a-b});
let numero = [numeros];
let n = numeros.length - 1;
    let intercambiar;

    do {
        intercambiar = false;

        for(let i = 0; i < n; ++i) {
            if (numeros[i] > numeros[i + 1]) {
                let temp = numeros[i];
                numeros[i] = numeros[i + 1];
                numeros[i + 1] = temp;

                intercambiar = true;
            }
        }

        --n;
    } while (intercambiar);
document.getElementById("numero").innerHTML=numero
}

