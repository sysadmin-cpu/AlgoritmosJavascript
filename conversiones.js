//funciones de conversion

//conversion de dolares a euros
function DolarToEuro(dolares){
    //un dolar estadounidense equivale a 0.93euros
    var UndolarEnEuros=0.93
    return dolares*UndolarEnEuros;
}

//conversion de dolares a Yenes Japones
function DolarToYenesJapones(dolares){
    //un dolar estadounidense equivale a 126.78yenes japoneses
    var UndolarEnYenJapones=126.78;
    return dolares*UndolarEnYenJapones;
}

function DolarToLibraEsterlina(dolares){
    //un dolar estadounidense equivale a 0.79 Libras Esterlina
    var UndolarEnLibraEsterlina=0.79;
    return dolares*UndolarEnLibraEsterlina;
}


function Ejercicio1(){
    var iniciar = prompt("Bienvenidos a ConversionJavascript\n¿Arrancar con la conversión?\n1=Si\n2=No");

if (iniciar==1) {
    do {
        //Elegir la opción de conversión
    var opcion = prompt("Conversion de Dólares\nIngrese una opcion\n1=A EUROS\n2=Yenes Japones\n3=Libra Esterlina");
    
    var respuesta;
    var dolares;
    if (opcion==1) {
        dolares = prompt("Ingrese la Cantidad En doláres(USD): ");
        respuesta = DolarToEuro(dolares);
    
    } else if(opcion==2) {
        dolares = prompt("Ingrese la Cantidad En doláres(USD): ");
        respuesta = DolarToYenesJapones(dolares);
    
    } else if (opcion==3) {
        dolares = prompt("Ingrese la Cantidad En doláres(USD): ");
        respuesta = DolarToLibraEsterlina(dolares);
    
    } else {
        console.log("¡Opción inválida!, Ingrese una opcion Válida")
    }
      
    
    console.log(respuesta);
    var continuarOsalir=prompt("¿Quiere continuar?\nMarque una opción\n1=Si\n2=No");
    
    if (continuarOsalir==1) {
        continue;
    } else {
        break;
    }
    } while (iniciar);
} else {
    console.log("¡Gracias por hacer uso de nuestro programa!");
}

}


//llamar a la function Ejercicio1() para que ejecute su procedimiento
Ejercicio1();




