/*Variables a crear:
eleccionUsuario,
eleccionCPU,
cantidadRondas,
contadorUsuario,
contadorCPU,

Funciones a crear:
iniciarJuego,
iniciarRonda,
obtenerResultados,
obtenerEleccionUsuario,
obtenerEleccionCpu,*/

function iniciarJuego() {
  let contadorUsuario = 0;
  let contadorCPU = 0;

  while (contadorUsuario < 5 || contadorCPU < 5) {
    let ganador = iniciarRonda();

    if (ganador === "usuario") {
      contadorUsuario++;

      if (contadorUsuario === 5) {
        alert("Ganaste el juego, Bien hecho!");
        break;
      } else {
        alert(`Puntuación:
            Usuario : ${contadorUsuario} puntos
            CPU: ${contadorCPU} puntos`);
      }
    } else if (ganador === "cpu") {
      contadorCPU++;

      if (contadorCPU === 5) {
        alert("Perdiste el juego :(");
        break;
      } else {
        alert(
          `Puntuación:
            Usuario : ${contadorUsuario} puntos
            CPU: ${contadorCPU} puntos`
        );
      }
    }
  }
}

//funcion qie obtiene las elecciones de los jugadores y devuelve un ganador
function iniciarRonda() {
  let eleccionUsuario = obtenerEleccionUsuario();

  let eleccionCpu = obtenerEleccionCpu();

  let ganadorRonda = obtenerGanador(eleccionUsuario, eleccionCpu);

  return ganadorRonda;
}

//funcion para obtener eleccion del usuario
function obtenerEleccionUsuario() {
  let eleccionUsuario;

  do {
    eleccionUsuario = prompt(
      "Ingrese su elección entre Piedra, Papel o Tijera:"
    ).toUpperCase();
  } while (
    eleccionUsuario !== "PIEDRA" &&
    eleccionUsuario !== "PAPEL" &&
    eleccionUsuario !== "TIJERA"
  );

  return eleccionUsuario;
}

//function para obtener eleccion de CPU
function obtenerEleccionCpu() {
  let elegirNumCpu = () => Math.floor(Math.random() * 3);

  const numCpu = elegirNumCpu();

  let eleccionCpu;

  switch (numCpu) {
    case 0:
      eleccionCpu = "PIEDRA";
      break;

    case 1:
      eleccionCpu = "PAPEL";
      break;

    case 2:
      eleccionCpu = "TIJERA";
      break;
  }

  return eleccionCpu;
}

//funcion que determina quien gano la ronda o si fue empate
function obtenerGanador(eleccionUsuario, eleccionCPU) {
  let ganador;

  switch (eleccionUsuario) {
    case "PIEDRA":
      if (eleccionCPU === "PIEDRA") {
        alert("CPU eligió PIEDRA. Es un empate -.-");
        ganador = "empate";
      } else if (eleccionCPU === "PAPEL") {
        alert("CPU elegió PAPEL. Perdiste :(");
        ganador = "cpu";
      } else {
        alert("CPU eligió TIJERA. Ganaste :D");
        ganador = "usuario";
      }
      break;

    case "PAPEL":
      if (eleccionCPU === "PIEDRA") {
        alert("CPU eligió PIEDRA. Ganaste :D");
        ganador = "usuario";
      } else if (eleccionCPU === "PAPEL") {
        alert("CPU elegió PAPEL. Es un empate -.- :(");
        ganador = "empate";
      } else {
        alert("CPU eligió TIJERA. Perdiste :(");
        ganador = "cpu";
      }
      break;

    case "TIJERA":
      if (eleccionCPU === "PIEDRA") {
        alert("CPU eligió PIEDRA. Perdiste :(");
        ganador = "cpu";
      } else if (eleccionCPU === "PAPEL") {
        alert("CPU elegió PAPEL. Ganaste :D");
        ganador = "usuario";
      } else {
        alert("CPU eligió TIJERA. Empataste -.-");
        ganador = "empate";
      }
      break;
  }
  return ganador;
}

iniciarJuego();
