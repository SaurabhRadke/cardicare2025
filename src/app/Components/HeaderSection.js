import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { IoSunny, IoClose } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import logo from "@/app/assets/cardicare_logo.png"
import ButtonComponent from './ButtonCompoents';
const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-cardicare", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contactus", label: "Contact" }
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const NavLink = ({ href, label }) => (
    <Link href={href}>
      <div className={`relative tracking-widest overflow-hidden group cursor-pointer ${
        pathname === href && 'border-b-2 text-teal-500 border-teal-500'
      }`}>
        <h1 className="w-full h-full group-hover:-translate-y-6 duration-500">
          {label}
        </h1>
        <h1 className="absolute top-full left-0 w-full h-full group-hover:-translate-y-7 duration-500">
          {label}
        </h1>
      </div>
    </Link>
  );

  return (
    <>
      <div className="w-full z-50 shadow-md shadow-[#d6676748] bg-white border-b-[#fb71869a] py-3 border-[1px] px-3 md:px-8 flex justify-between items-center">
        <div className="text-2xl font-semibold tracking-wider">
        <Image src={logo} alt="logo" className="w-36 md:w-52"/>        </div>

        {/* Desktop Navigation */}
        <div className="lg:flex hidden">
          <div className="py-3 rounded-full text-lg flex items-center space-x-4">
            {navLinks.map((link) => (
              <div key={link.href} className="px-6">
                <NavLink {...link} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
        <ButtonComponent text={"Login"}/>
          
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-2xl text-zinc-600 w-10 h-10 rounded-full hover:bg-emerald-50 grid place-items-center duration-300"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Navigation Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
        

          
          <div className="mt-12 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`text-lg font-medium tracking-wide hover:text-emerald-600 duration-300 ${
                  pathname === link.href ? "text-emerald-600" : "text-zinc-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;