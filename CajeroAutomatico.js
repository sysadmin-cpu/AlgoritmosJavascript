
while (true) {
    var saldoInicial =500;

var operacion = prompt("Ingrese una operacion: \n1=RETIRAR\n2=DEPOSITAR ");

if (operacion==1) {
    var cRetiro = parseInt(prompt("Cantidad a Retirar: "));
    var saldo=saldoInicial - cRetiro;

} else {
    var cDeposito = parseInt(prompt("Cantidad a Depositar: "));

    var saldo = saldoInicial+cDeposito;
    saldo=saldo-cRetiro;

}

console.log("Saldo inicial: "+saldo  );
console.log("Retiro: "+cRetiro);
console.log("Deposito: "+cDeposito);
console.log("Saldo nuevo: "+saldo);

var control = prompt("¿Desea continuar ?\n1=Si\n2=No");
if (parseInt(control)==1) {
    continue;
} else {
    break;
}

}



