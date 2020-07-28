/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
let numUno;
let numDos;


numUno = parseInt(document.getElementById("txtIdNumeroUno").value); 
numDos = parseInt(document.getElementById("txtIdNumeroDos").value); 

alert(numUno+numDos);
	
}

function restar()
{
  let numUno;
  let numDos;

  numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
  numDos = parseInt(document.getElementById("txtIdNumeroDos").value);

  alert(numUno-numDos);

}

function multiplicar()
{
  let numUno;
  let numDos;

  numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
  numDos = parseInt(document.getElementById("txtIdNumeroDos").value);

  alert(numUno*numDos);
}
function dividir()
{
  let numUno;
  let numDos;

  numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
  numDos = parseInt(document.getElementById("txtIdNumeroDos").value);
  
  alert(parseFloat(numUno/numDos).toFixed(3));
}



