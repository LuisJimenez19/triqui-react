// eslint-disable-next-line
function Cell({ value, updateBoard, index }) {
  const classNameCell = `text-slate-100 dark:text-slate-900 border-light dark:border-bgDark100 bg-bgDark100 dark:bg-light flex justify-center items-center text-center relative animate-zoom outline-rose-900 cell`;

  function handleClick() {
    updateBoard(index);
  }

  return (
    <div onClick={handleClick} className={classNameCell}>
      {value !== null && <p className="absolute text-8xl -translate-y-3 flex items-center animate-show ">{value}</p>}
    </div>
  );
}

export  {Cell};
