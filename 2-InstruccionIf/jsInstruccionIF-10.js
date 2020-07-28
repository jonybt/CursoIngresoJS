function mostrar() {
	let vMaximo = 10;
	let vMinimo = 1;
	let vResultado;

	vResultado = parseInt(Math.round(Math.random() * (vMaximo - vMinimo) + vMinimo));

	if (vResultado > 8) {
		alert("SU NOTA FUE " + vResultado + " EXCELENTE");
	} else if (vResultado < 4) {
		alert("SU NOTA FUE " + vResultado + " LA PROXIMA SE PUEDE");
	} else {
		alert("SU NOTA FUE " + vResultado + " APROBO");
	}

}//FIN DE LA FUNCIÓN