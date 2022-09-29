//importar modulos clase
import { Cliente } from './Cuentas/Cliente.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';

//Aca empieza el codigo visualizador
const cliente = new Cliente("Leonardo", "123456", "87654321");
const cliente2 = new Cliente("Luisa", "123457", "87654322");

const empleado = new Empleado("Luisa", "87654323", 10000);

empleado.asignarClave('1234');

const gerente = new Gerente("Carlos", "87654323", 12000);
const director = new Director("Leonardo", "87654323", 15000);

console.log(gerente.verBonificacion());
console.log(director.verBonificacion());

console.log(SistemaAutenticacion.login(empleado, '1234'));