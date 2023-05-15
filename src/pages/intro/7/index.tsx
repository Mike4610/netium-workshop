import React, { FC, useEffect, useState } from "react";

/**
 * localStorage
 * O hook useContext permite-nos partilhar estados entre componentes
 * Sem a necessidade de passar props para os mesmos
 * Podemos considerar o useContext como uma forma de criar um estado GLOBAL
 */

interface IconProps {
  variant: "sun" | "moon";
  onClick: () => void;
}

const Icon: FC<IconProps> = ({ variant, onClick }) => {
  switch (variant) {
    case "sun":
      return (
        <svg
          onClick={onClick}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 text-white cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      );

    case "moon":
      return (
        <svg
          onClick={onClick}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 text-gray-800 cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      );
  }
};

const IntroPage7: FC = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (!theme || theme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // toggle theme
  function toggleTheme() {
    if (theme === "light") {
      // when theme is changed, set the localStorage
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      // when theme is changed, set the localStorage
      localStorage.setItem("theme", "light");
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100 dark:bg-gray-800">
      <Icon variant={theme === "dark" ? "sun" : "moon"} onClick={toggleTheme} />
    </div>
  );
};

export default IntroPage7;
