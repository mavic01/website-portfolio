import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useState(() => {
    const savedTheme = localStorage.getItem("theme"); //gets the theme when the page renders
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };
  return (
    <button
      // className={cn(
      //   "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 cursor-pointer",
      //   "focus:outline-hidden"
      // )}
      className={cn(
        "fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 cursor-pointer",
        "focus:outline-hidden"
      )}
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};

export default ThemeToggle;
