/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var vCodigo;

	vCodigo = prompt("codigo","Ingre su codigo de identificacion personal");
	document.getElementById("txtIdNombre").value = vCodigo;
}

