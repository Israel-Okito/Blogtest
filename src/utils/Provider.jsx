"use client";

import React from "react";
import { ThemeProvider } from "next-themes";


export const Provider = ({ children }) => {
  //attribute="class" dans tailwind darkMode="class" c'est toggling dark manually dans la documentation tailwindcss pour que cela fonctionne 
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
