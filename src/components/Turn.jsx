// eslint-disable-next-line
function Turn({ turno, isSelected }) {
    const classNameTurn = isSelected
      ? `w-12 h-12 border text-light dark:text-bgDark100 border-light dark:border-bgDark100 rounded-xl bg-bgDark100 dark:bg-white text-3xl flex justify-center aling-center shadow-blueDark shadow-sm dark:shadow-white`

      : `w-12 h-12   border dark:text-light text-bgDark100 dark:border-light border-bgDark100 rounded-xl text-3xl flex justify-center aling-center`;
    return <span className={classNameTurn}>{turno}</span>;
  }

export  {Turn}
