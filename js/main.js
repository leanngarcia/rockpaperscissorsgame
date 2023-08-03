const botonesEleccion = document.getElementsByClassName("btnJugador");
const numRondas = document.getElementById("rondas");
const ptosJugador = document.getElementById("ptsJugador");
const ptosCpu = document.getElementById("ptsCpu");
const opcionCpu = document.getElementById("opcionCpu");
const mostrarResultado = document.createElement("p");

let puntosJugador = 0;
let puntosCpu = 0;
let numeroRondas = 0;

for (const botones of botonesEleccion) {
  botones.addEventListener("click", (e) => {
    const eleccionJugador = e.target.id.toUpperCase(); //obtengo eleccion del jugador
    const eleccionCpu = obtenereleccionCpu(); //obtengo eleccion del CPU

    console.log("Eleccion del jugador: " + eleccionJugador);
    console.log("Eleccion del CPU: " + eleccionCpu);

    const ganador = obtenerGanador(eleccionJugador, eleccionCpu);
    console.log("El ganador de la ronda es " + ganador);

    mostrarResultadoRonda(eleccionCpu, ganador);
    modificarTablero(ganador);
    terminarJuego(puntosJugador, puntosCpu);
  });
}

//function para obtener eleccion de CPU
function obtenereleccionCpu() {
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
function obtenerGanador(eleccionjugador, eleccionCpu) {
  let ganador;

  switch (eleccionjugador) {
    case "PIEDRA":
      if (eleccionCpu === "PIEDRA") {
        ganador = "empate";
      } else if (eleccionCpu === "PAPEL") {
        ganador = "cpu";
      } else {
        ganador = "jugador";
      }
      break;

    case "PAPEL":
      if (eleccionCpu === "PIEDRA") {
        ganador = "jugador";
      } else if (eleccionCpu === "PAPEL") {
        ganador = "empate";
      } else {
        ganador = "cpu";
      }
      break;

    case "TIJERA":
      if (eleccionCpu === "PIEDRA") {
        ganador = "cpu";
      } else if (eleccionCpu === "PAPEL") {
        ganador = "jugador";
      } else {
        ganador = "empate";
      }
      break;
  }
  return ganador;
}

function modificarTablero(ganadorRonda) {
  numeroRondas++;
  numRondas.textContent = `Ronda ${numeroRondas}`;

  if (ganadorRonda === "jugador") {
    console.log("Gano Jugador");
    puntosJugador++;
    ptosJugador.textContent = `Jugador: ${puntosJugador}`;
  } else if (ganadorRonda === "cpu") {
    console.log("Gano Cpu");
    puntosCpu++;
    ptosCpu.textContent = `CPU: ${puntosCpu}`;
  } else {
    console.log("Empate");
  }
  console.log("Puntos jugador: " + puntosJugador);
  console.log("Puntos CPU " + puntosCpu);
}

function mostrarResultadoRonda(eleccionCpu, ganador) {
  if (numRondas) {
    opcionCpu.appendChild(mostrarResultado);
  }

  if (ganador === "jugador") {
    mostrarResultado.textContent = `CPU eligió ${eleccionCpu}. Ganaste!!! `;
  } else if (ganador === "cpu") {
    mostrarResultado.textContent = `CPU eligió ${eleccionCpu}. Perdiste :(`;
  } else {
    mostrarResultado.textContent = `CPU eligió ${eleccionCpu}. Es un empate`;
  }
}

function terminarJuego(puntosJugador, puntosCpu) {
  if (puntosJugador === 5) {
    ptosJugador.textContent = `Jugador: ${puntosJugador}`;
    alert("Ganaste! Bien hecho :D");
    reiniciarScore();
  } else if (puntosCpu === 5) {
    ptosCpu.textContent = `CPU: ${puntosCpu}`;
    alert("Perdiste... :( Intenta nuevamente");
    reiniciarScore();
  }
}

function reiniciarScore() {
  puntosJugador = 0;
  puntosCpu = 0;
  numeroRondas = 0;

  numRondas.textContent = `Ronda ${numeroRondas}`;
  ptosJugador.textContent = `Jugador: ${puntosJugador}`;
  ptosCpu.textContent = `CPU: ${puntosCpu}`;
}
