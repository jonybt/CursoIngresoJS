function mostrar()
{
	let vEdad;
	let vEsCiv;

	vEdad = parseInt(document.getElementById("txtIdEdad").value);
	vEsCiv = document.getElementById("estadoCivil").value;

	if (vEdad>17 && vEsCiv == "Soltero")
	{
	  alert("Es soltero y no es menor");
    }


}//FIN DE LA FUNCIÓN