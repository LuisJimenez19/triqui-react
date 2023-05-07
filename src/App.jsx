import { useState, useEffect } from "react";
/* components */
import { Header } from "./components/Header";
import { Turn } from "./components/Turn";
import { Cell } from "./components/Cell";
import { ResetBtn } from "./components/ResetBtn";
import { ModalFinish } from "./components/ModalFinish";
/* constants */
import { TURNOS } from "./constants/constans";
/* Logic */
import { checkWin } from "./logic/board";
import confetti from "canvas-confetti";

function App() {
  /* Turno */
  const [turn, setTurn] = useState(null);
  /* Wninner */
  const [win, setWin] = useState(null); // x u o; false = empate

  useEffect(() => {
    const boardFromLocal = JSON.parse(localStorage.getItem("board"));
    const turnFromLocal = JSON.parse(localStorage.getItem("turno"));
    const winnerFromLocal = JSON.parse(localStorage.getItem("winner"));

    if (boardFromLocal && turnFromLocal) {
      setBoard(boardFromLocal);
      setTurn(turnFromLocal);
      setWin(winnerFromLocal);
    } else {
      const keys = Object.keys(TURNOS);
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      setTurn(TURNOS[randomKey]);
    }
  }, []);

  /* board */
  const [board, setBoard] = useState(Array(9).fill(null));

  function updateBoard(index) {
  
    const newBoard = [...board];
    /* Si se puede realizar la jugada y no hay ganador */
    if (newBoard[index] === null && win === null) {
      /* Cambia el turno y hace jugada*/
      const newTurn = turn == TURNOS.x ? TURNOS.o : TURNOS.x;
      setTurn(newTurn);
      newBoard[index] = turn;

      
      /* checkea si hay un ganador o empate */
      const check = checkWin(newBoard);
      if (check === undefined) {
        const checkEmpty = newBoard.every((cel) => cel !== null);
        checkEmpty && setWin(false);

      } else if (check) {
        localStorage.setItem("winner", JSON.stringify(check));
        setWin(check);
        confetti({
          particleCount: 100,
          spread: 150,
          startVelocity: 100,
          ticks: 30,
        });
      }
      /* Guarda la partida */
      localStorage.setItem("board", JSON.stringify(newBoard));
      localStorage.setItem("turno", JSON.stringify(newTurn));

      setBoard(newBoard);
    }
  }

  function resetGame() {
    localStorage.removeItem("winner");
    localStorage.removeItem("turno");
    localStorage.removeItem("board");
    setWin(null);
    setTurn("x");
    setBoard(Array(9).fill(null));
  }

  return (
    <main className="body min-h-screen w-full dark:bg-blueDark bg-light text-center">
      <div className="app max-w-xl m-auto">
        <Header>Triqui!</Header>

        {/* Tablero */}
        <section className="board animate-zoom">
          {board.map((celda, index) => {
            return (
              <Cell
                index={index}
                updateBoard={updateBoard}
                key={index}
                value={celda}
              />
            );
          })}
        </section>

        <div className="flex justify-center gap-5 flex-col items-center">
          <div className="flex gap-10">
            <Turn turno={TURNOS.x} isSelected={turn === TURNOS.x} />
            <Turn turno={TURNOS.o} isSelected={turn === TURNOS.o} />
          </div>
          {board.some((cel) => cel != null) ? (
            <ResetBtn resetGame={resetGame} />
          ) : null}
        </div>
      </div>

      {/* Finish */}
      {win != null && <ModalFinish win={win} resetGame={resetGame} />}
    </main>
  );
}

export default App;

/*
TODO:
  turnos
  drawTablero
  dbujarapasos
  checkear si hay movimientos validos
  checkear si hay ganador o empate
  dibujar
  guardar la partida en el localStorage

*/
