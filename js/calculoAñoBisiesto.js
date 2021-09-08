function calculoAñoBisiesto(){
    var calculoaño = parseInt(document.getElementById("gregoriano").value);
    if (calculoaño % 400 === 0 || calculoaño % 4 === 0){
        if (calculoaño >= 1582){
            alert("el año es Bisiesto");
        }
       
   }
    else 
    alert("el año no es Bisiesto");
}