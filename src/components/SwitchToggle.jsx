import { useState, useEffect } from "react";

function SwitchToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const darkModeLocal = localStorage.getItem("isDark");
    return darkModeLocal === "dark";
  });

  useEffect(() => {
    const darkModeLocal = localStorage.getItem("isDark");
    setIsDarkMode(darkModeLocal === "dark");
    handleDarkMode(darkModeLocal === "dark");
  }, []);

  function handleClick() {
    const nowDarkMode = !isDarkMode;
    setIsDarkMode(nowDarkMode);
    localStorage.setItem("isDark", nowDarkMode ? "dark" : "light");
    handleDarkMode(nowDarkMode);
  }

  function handleDarkMode(mode) {
    if (mode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`container-switch bg-slate-900 rounded-full flex`}
    >
      <span className="light">☀</span>
      <span className="dark ">🌚</span>
      <span
        className={`switch bg-slate-500 ${
          isDarkMode ? "switch--dark" : "switch--light"
        }`}
      ></span>
    </div>
  );
}

export { SwitchToggle };
