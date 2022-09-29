export class SistemaAutenticacion {
	static login(usuario, clave) {
		if ("autenticable" in usuario && usuario.autenticable instanceof function) {
			return usuario.autenticable(clave);
		}else{
			return false;
		}
	
	}
}