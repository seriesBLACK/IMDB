"use client"

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function DarkModeSwitch() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (<>
    {mounted && currentTheme === "dark" ? (<MdLightMode className="text-xl cursor-pointer" onClick={() => setTheme("light")} />) : (<MdDarkMode className="text-xl cursor-pointer" onClick={() => setTheme("dark")} />)}

  </>
  )
}

export default DarkModeSwitch
