import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { Life_Savers, Lilita_One } from "next/font/google";

const font = Life_Savers({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div className={`${font.className} text-3xl dark:text-amber-50`}>
            okit
            <span className="text-purple-500">Blog</span>
          </div>
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
