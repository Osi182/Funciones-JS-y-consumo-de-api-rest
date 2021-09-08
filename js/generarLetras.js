var letrasA = new Array(10);
var letrasB = new Array(10);
function generarLetras(){
   
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < letrasA.length; i++ ) {
        letrasA[i]= characters.charAt(Math.floor(Math.random() * charactersLength));
       
     }
     for ( var i = 0; i < letrasB.length; i++ ) {
        letrasB[i]= characters.charAt(Math.floor(Math.random() * charactersLength));
       
     }
     document.getElementById("letrasA").innerHTML = 'Conjunto A: (' + '' + letrasA.sort(function(a, b){return a-b}) +')';
     document.getElementById("letrasB").innerHTML = 'Conjunto B: (' + '' + letrasB.sort(function(a, b){return a-b}) + ')';
     document.getElementById("union").innerHTML = 'Union: (' + '' + Array.from(new Set(letrasA.concat(letrasB))) +')';
     document.getElementById("intercepcion").innerHTML = 'Intercepcion: (' + '' + letrasA.filter(v => letrasB.includes(v)) +')';
     document.getElementById("diferencia").innerHTML = 'Diferencia: (' + '' + letrasA.filter(x => !letrasB.includes(x)) +')';
     document.getElementById("diferenciaSimetrica").innerHTML = 'Diferencia Simetrica: (' + '' + letrasA.concat(letrasB).filter(v => !letrasA.includes(v) || !letrasB.includes(v)) +')';
     
}