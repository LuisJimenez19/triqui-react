import { ResetBtn } from "./ResetBtn";

// eslint-disable-next-line
function ModalFinish({ win, resetGame }) {
  return (
    <div className="winer bg-opacity-70 bg-black absolute top-0 bottom-0 right-0 left-0 modal">
      <div className="">
        <p className="text-xl md:text-3xl text-light font-mono font-bold">
          {win ? <>El ganador es: <strong className="text-5xl" >{win}</strong> </> : "Hay un empate"}
        </p>
      </div>
      <ResetBtn resetGame={resetGame} />
    </div>
  );
}

export { ModalFinish };
