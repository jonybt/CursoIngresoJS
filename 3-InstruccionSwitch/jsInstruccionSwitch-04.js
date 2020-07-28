function mostrar()
{
	let vMes;

	vMes = document.getElementById("txtIdMes").value ;

	switch(vMes){
		
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":

		 alert("Este mes tiene 30 dias");
		 break;

		case "Febrero":

		 alert("Este mes tiene 28 dias");
		 break;

		default:

		 alert("Este mes tiene 31 dias");
		 break;

	}
	



}//FIN DE LA FUNCIÓN