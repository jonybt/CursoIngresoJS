/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var vNumUno;
	var vNumDos;
	var resul;

	vNumUno = parseInt(document.getElementById("txtIdNumeroUno").value) ;
	vNumDos = parseInt(document.getElementById("txtIdNumeroDos").value) ;

	alert(vNumUno+vNumDos);

}

