import React from "react";
import { useState, useEffect } from "react";

import { Home, About, Project, Navbar, Footer } from "./components/index";

const App = () => {
  const [theme, setTheme] = useState(null);
  const storedThemeShivam = window.localStorage.getItem("storedThemeShivam");

  useEffect(() => {
    if (storedThemeShivam === "dark") {
      setTheme("dark");
    } else if (storedThemeShivam === "light") {
      setTheme("light");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("storedThemeShivam", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("storedThemeShivam", "light");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <Navbar theme={theme} handleThemeSwitch={handleThemeSwitch} />
      <Home />
      <About />
      <Project />
      <Footer />
    </div>
  );
};

export default App;
