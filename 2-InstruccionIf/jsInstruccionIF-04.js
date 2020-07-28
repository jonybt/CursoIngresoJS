function mostrar()
{
	let vEdad;

	vEdad = parseInt(document.getElementById("txtIdEdad").value);

	if(vEdad<=17 && vEdad>=13)
	{
		alert("Usted es un adolescente");
	}
	else
	{
       alert("Usted no es un adolescente");
	}


}//FIN DE LA FUNCIÓN