let nameVisita;
let ageVisita;
let numRrhh = 0;

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
      "! Puede dejar la nota en Mesa de Entradas, planta baja. Hasta luego!"
  );
} else if (menu == 2) {
  nameVisita = prompt("Ingrese su nombre y apellido");
  ageVisita = prompt("Ingrese su edad");
  alert(
    "Elija una oficina: \n 1) RRHH \n 2) Compras \n 3) Tesoreria \n 4) Secretaría "
  );
  let numOficina = prompt(
    "Ingrese el número correspondiente a la opción deseada"
  );
  if (numOficina == 1) {
    alert(
      "La oficina de Recursos Humanos se encuentra en el 1er Piso, será llamado con numero " +
        numRrhh
    );
    numRrhh = numRrhh++;
    console.log(numRrhh);
  }
} else menu == 3;
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
