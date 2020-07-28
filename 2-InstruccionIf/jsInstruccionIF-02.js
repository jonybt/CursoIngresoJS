function mostrar()
{
	//tomo la edad  
	let vEdad;

	vEdad = parseInt(document.getElementById("txtIdEdad").value);

	if(vEdad > 17)
	{
      alert("Usted es mayor de edad");
	}else
	{
		alert("Usted es un niño");
	}
	

}//FIN DE LA FUNCIÓN