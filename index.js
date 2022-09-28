//importar modulos clase
import { Cliente } from './Cliente.js';
import { cuentaCorriente } from './CuentaCorriente.js';
import { cuentaAhorro } from './CuentaAhorro.js';
import {CuentaNomina} from "./CuentaNomina.js";


//Aca empieza el codigo visualizador
const cliente = new Cliente("Leonardo", "123456", "87654321");
const cliente2 = new Cliente("Luisa", "123457", "87654322");

const cuentaDeLeonardo = new cuentaCorriente(cliente, "1", "001");
const cuentaDeLuisa = new cuentaCorriente(cliente2, "2", "002");

const cuentaAhorroLeonardo = new cuentaAhorro(cliente, "9985", "001", 0);

