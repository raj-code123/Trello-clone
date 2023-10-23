import React from "react";
import { useState, useEffect } from "react";
const DarkModeButton = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
  );
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];
  function onWindowMatch(){
    if(localStorage.theme === 'dark' || (!('theme' in localStorage)) && darkQuery.matches){
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  useEffect(() => {
    switch (theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  return (
    <div className="fixed z-50 bottom-10 right-10 duration-100 dark:text-gray-100 dark:bg-slate-600 bg-gray-100 rounded">
      {options?.map((opt) => (
        <button
          key={opt.text}
          className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
            theme === opt.text && "text-sky-600"
          }`}
          onClick={() => setTheme(opt.text)}
        >
          <ion-icon name={opt.icon}></ion-icon>
        </button>
      ))}
    </div>
  );
};

export default DarkModeButton;
