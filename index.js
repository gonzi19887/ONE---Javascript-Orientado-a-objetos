//importar modulos clase
import { Cliente } from './Cliente.js';
import { cuentaCorriente } from './CuentaCorriente.js';

//Aca empieza el codigo visualizador
const cliente = new Cliente();
cliente.nombreCliente = "leonardo";
cliente.dniCliente = "123456";
cliente.rutCliente = "87654321";

const cuentaDeLeonardo = new cuentaCorriente();
cuentaDeLeonardo.numero = "1";
cuentaDeLeonardo.agencia = "001";
cuentaDeLeonardo.cliente = cliente;

console.log(cuentaDeLeonardo);

let saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual es ` + saldoLeonardo);


saldoLeonardo = cuentaDeLeonardo.depositoEnCuenta(500);
console.log(`El saldo actual (CuentaLeonardo) ` + saldoLeonardo);

const cliente2 = new Cliente();
cliente2.nombreCliente = "luisa";
cliente2.dniCliente = "123457";
cliente2.rutCliente = "87654322";

const cuentaDeLuisa = new cuentaCorriente();
cuentaDeLuisa.numero = "2";
cuentaDeLuisa.agencia = "002";
cuentaDeLuisa.cliente = cliente2;

cuentaDeLeonardo.transferirParaCuenta(100, cuentaDeLuisa);

console.log("Cuenta de Luisa ", cuentaDeLuisa);


const saldoLuisa = cuentaDeLuisa.verSaldo();
console.log('El saldo actual (CuentaLuisa) ' + saldoLuisa);

const saldoALeonardo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual (CuentaLeonardo) ` + saldoALeonardo);