import { SwitchToggle } from "./SwitchToggle"
// eslint-disable-next-line
function Header({children}) {
  return (
    <header className="flex items-end justify-center w-full animate-upToDown" >
        <h1 className="text-blueDark dark:text-rose-400 text-5xl md:text-8xl font-bold font-rubik pt-10 animate-pulse">
          {children}
        </h1>
        <SwitchToggle/>
      </header>
  )
}
export { Header}