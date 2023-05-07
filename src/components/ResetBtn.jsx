// eslint-disable-next-line
function ResetBtn({ resetGame }) {
  function handleClick() {
    resetGame();
  }
  return (
    <button onClick={handleClick} className="transition-all uppercase border-t-neutral-700 py-4 px-8 bg-bgDark100 rounded-xl text-white font-rubik -outline-offset hover:scale-105 hover:brightness-150 active:bg-transparent hover:font-bold">
      reset
    </button>
  );
}
export { ResetBtn };
