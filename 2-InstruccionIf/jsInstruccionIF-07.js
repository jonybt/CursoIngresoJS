function mostrar()
{
	let vEdad;
	let vEsCivi;

	vEdad = parseInt(document.getElementById("txtIdEdad").value);
	vEsCivi = document.getElementById("estadoCivil").value;
	
	if(vEdad<18 && vEsCivi!="Soltero")
	{
		alert("Usted es muy pequeño para no ser soltero");
	}

}//FIN DE LA FUNCIÓN