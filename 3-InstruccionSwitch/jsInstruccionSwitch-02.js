function mostrar() {
	let vMes;

	vMes = document.getElementById("txtIdMes").value;

	switch (vMes) {
		case "Julio":
		case "Agosto":

			alert("Abrigate que hace frio");
			break;

		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":

			alert("Falta para el invierno");
			break;

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":

			alert("Ya pasamos el frio, ahora calor!!!.");
			break;




	}



}//FIN DE LA FUNCIÓN