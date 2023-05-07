import {COMBOSWIN} from "../constants/constans";

/* Recibe un arreglo, devuelve "x u o" cuando haya ganador, si no devuelve undefine */
export function checkWin(BoardToCheck) {
    for (const combo of COMBOSWIN) {
      const [a, b, c] = combo;
      if (
        BoardToCheck[a] &&
        BoardToCheck[a] === BoardToCheck[b] &&
        BoardToCheck[a] === BoardToCheck[c]
      ) {
        
        return BoardToCheck[a];
      }
    }
  }