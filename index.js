let nameVisita;
let ageVisita;

alert("Bienvenido al sistema de ingreso de nuestra institución");
alert(
  "Elija su trámite: \n 1) Dejar una nota \n 2) Ir a una oficina \n 3) Salir"
);

let menu = prompt("Ingrese el numero correspondiente a la opción deseada");

if (menu == 1) {
  nameVisita = prompt("Ingrese su nombre y apellido");
  ageVisita = prompt("Ingrese su edad");
  alert(
    "Muchas gracias, " +
      nameVisita +
      "! Puede dejar la nota en Mesa de Entradas, Planta baja. Hasta luego!"
  );
}
elseif(menu == 2);
{
  nameVisita = prompt("Ingrese su nombre y apellido");
  ageVisita = prompt("Ingrese su edad");
  oficinaVisita = prompt("En que oficina necesita hacer su trámite?");
}
elseif(menu == 3);
{
  alert("Muchas gracias");
}

/* 
if (
  window.confirm(
    "'Sus datos son correctos?' \n" +
      nameVisita +
      ageVisita +
      "\n" +
      oficinaVisita
  )
)
  alert("Los datos son correctos");
else alert("Los datos son incorrectos");
 */
