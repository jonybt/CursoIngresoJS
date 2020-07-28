/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var vNombre;
	var vEdad;

	vNombre = document.getElementById("txtIdNombre").value ;
	vEdad = document.getElementById("txtIdEdad").value;

	alert(`su nombre es ${vNombre} y tiene ${vEdad} años`);
}

