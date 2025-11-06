import React from "react";
import { SunIcon, MoonIcon } from "../icons";
import { useEffect, useCallback, useState } from "react";

function ToggleButton() {
  // local storage checking i think
  const [isdark, setisdark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved == "dark";
      return document.documentElement.classList.contains("dark");
    }

    return false;
  });

  // abh krege dark ko html se sync

  useEffect(() => {
    const root = document.documentElement;
    if (isdark) root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("theme", isdark ? "dark" : "light");
  }, [isdark]);

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="p-2 rounded bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 transition-colors"
      onClick={() => setisdark(!isdark)}
    >
      {isdark ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

export default ToggleButton;
