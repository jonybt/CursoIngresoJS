function mostrar()
{
    let vEdad;
    
    vEdad = parseInt(document.getElementById("txtIdEdad").value);

    if(vEdad > 17)
    {
      alert("Usted es mayor de edad");
    }else
     {
         alert("Usted es menor de edad");
     }
}//FIN DE LA FUNCIÓN