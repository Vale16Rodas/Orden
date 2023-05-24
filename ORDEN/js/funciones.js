$(document).ready(function() {
    console.log('am here ');

    var espacio = " ";
    var coma = ",";

   

    $('#boton').on('click', function(){
        var nombre = $('#nombre').val();
        var cadena = $("#arreglo").val();
        identificarCadena(cadena, espacio && coma);
    });

    var arrayDeCadenas;
    arrayDeNumeros = []

    function identificarCadena(DividirCadena, separador) {
        arrayDeCadenas = [];
        arrayDeCadenas = DividirCadena.split(separador);
        
        size = arrayDeCadenas.length;
        console.log("<br>El array tiene " + size + " elementos: ");
        
        console.log('array'+arrayDeCadenas );
        for (var i = 0; i < size; i++) {
            arrayDeNumeros[i]=Number(arrayDeCadenas[i]);
        }
        arrayDeNumeros.sort(function(a, b) {
            return a - b;})
        console.log('arrayDeNumeros'+arrayDeNumeros );
        $("div").remove(".remove");

        for (var i = 0; i < size; i++) {
            console.log(i)
            console.log(arrayDeNumeros[i] );
            $("#numero").append("<div class='remove'>"+(i+1)+"</div>");
            $("#orden").append(" <div class='remove'>"+arrayDeNumeros[i]+"</div>");
        }
        

        let mayor, menor;
        mayor=menor=arrayDeCadenas;

        
        console.log("El mayor valor es: " + mayor);
        console.log("El menor valor es: " + menor);
      
        $("#nmayor").append("<div class=' remove'>"+arrayDeNumeros[0]+"</div>");
        $("#nmenor").append("<div class=' remove'>"+arrayDeNumeros[size-1]+"</div>");

         nombre = $('#nombre').val("");
         cadena = $("#arreglo").val("");
         // fetch('conexion.php',{method: 'POST',body:{nom:nombre,cad:cadena,min:arrayDeNumeros[0],max:arrayDeNumeros[size-1]}});

    }

    
    
})