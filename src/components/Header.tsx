
"use client";

import Link from "next/link";
import { DarkThemeToggle, Navbar } from "flowbite-react";

const Header = () => {
  return (
    <Navbar fluid rounded className=" bg-neutral-800 dark:bg-slate-900 text-white">
      <Navbar.Brand>
       
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Crypto Tracker </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      <DarkThemeToggle />
      </div>
    </Navbar>
  );
}

export default Header;