//importar modulos clase
import { CuentaCorriente } from './CuentaCorriente.js';

//Aca empieza el codigo visualizador
const cuentaDeLeonardo = new cuentaCorriente();
let saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual es ` + saldo);


saldo = cuentaDeLeonardo.depositoEnCuenta(500);
console.log(`El saldo actual es ` + saldo);

saldo = cuentaDeLeonardo.retirarDeCuenta(200);
console.log(`El saldo actual es ` + saldo);

