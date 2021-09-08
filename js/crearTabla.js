function crearTabla(){
    var numeroFilas= document.getElementById("numeroFilas").value;
    var numeroColumnas= document.getElementById("numeroColumnas").value;
    var divTabla=document.getElementById("divTabla");
    divTabla.innerHTML="";
    var tabla = "<table border>";
    
    for (var i=1; i<=numeroFilas; i++){
        tabla += "<tr>";
        for(var x =1; x<=numeroColumnas; x++){
            tabla += "<td>Esto es una prueba</td>";

        }
        tabla += "</tr>";
    }
    tabla += "</table border>";
    
    divTabla.innerHTML=tabla;

   
}