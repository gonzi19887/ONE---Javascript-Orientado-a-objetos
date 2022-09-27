//importar modulos clase
import { Cliente } from './Cliente.js';
import { cuentaCorriente } from './CuentaCorriente.js';

//Aca empieza el codigo visualizador
const cliente = new Cliente("Leonardo", "123456", "87654321");
const cliente2 = new Cliente("Luisa", "123457", "87654322");

const cuentaDeLeonardo = new cuentaCorriente(cliente, "1", "001");
const cuentaDeLuisa = new cuentaCorriente(cliente2, "2","002");


let saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual de Leonardo es ` + saldoLeonardo);

saldoLeonardo = cuentaDeLeonardo.depositoEnCuenta(500);
console.log(`El saldo actual (CuentaLeonardo) ` + saldoLeonardo);

cuentaDeLeonardo.transferirParaCuenta(100, cuentaDeLuisa);

const saldoLuisa = cuentaDeLuisa.verSaldo();
console.log('El saldo actual (CuentaLuisa) ' + saldoLuisa);

const saldoALeonardo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual (CuentaLeonardo) ` + saldoALeonardo);

console.log(cuentaDeLeonardo.cantidadCuentas);