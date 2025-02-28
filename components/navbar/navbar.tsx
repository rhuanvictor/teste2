"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ThemeSwitch } from "@/components/theme-switch/theme-switch";
import Login from "@/components/login/buttonlogin";
import Logo from "@/components/logo";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";

import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import styles from "./navbar.module.css";
import { siteConfig } from "@/config/site"

interface NavbarProps {
  shouldHideOnScroll: boolean;
}

const Navbar = ({ shouldHideOnScroll }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Hook para detectar o scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsHidden(true); // Quando a rolagem for para baixo
      } 
      else {
        setIsHidden(false); // Quando a rolagem for para cima
      }
      setLastScrollY(window.scrollY);
    };

    if (shouldHideOnScroll) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY, shouldHideOnScroll]);

  {/*<header className={sticky top-0 z-50 w-full p-1 transition-transform duration-300 ${ isHidden ? 'transform -translate-y-full' : '' } bg-zinc-100 dark:bg-neutral-900 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_6px_-1px_rgba(255,255,255,0.1),0_2px_4px_0px_rgba(255,255,255,0.1)] border border-white/10 dark:border-black/10 } >*/}
  return (
    <header className={`sticky top-0 z-50 w-full p-1 transition-transform duration-300 ${isHidden ? 'transform -translate-y-full' : ''} bg-neutral-50 dark:bg-[linear-gradient(to_right,#3f3d3a,#322b25,#140f0b)] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] dark:shadow-none border-t border-t-white/60 dark:border-t-white/30`}>
      <div className="container flex h-14 max-w-screen-2xl mx-auto items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Menu de hambúrguer e logo para telas pequenas */}
        <div className="flex items-center lg:hidden">
          <button onClick={toggleMenu} className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center space-x-2">
            <Logo />
          </div>
        </div>

        {/* Menu de navegação para telas pequenas */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-14 left-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
            <nav className="flex flex-col p-2">
              <Link href="/docs" className="p-2 transition-colors hover:text-foreground/80 text-foreground/60">Docs</Link>
              <Link href="/docs/components" className="p-2 transition-colors hover:text-foreground/80 text-foreground/60">Components</Link>
              <Link href="/themes" className="p-2 transition-colors hover:text-foreground/80 text-foreground/60">Themes</Link>
              <Link href="/examples" className="p-2 transition-colors hover:text-foreground/80 text-foreground/60">Examples</Link>
              <Link href="/blocks" className="p-2 transition-colors hover:text-foreground/80 text-foreground/60">Blocks</Link>
              <Link href="https://github.com/DarkInventor" className="p-2 transition-colors hover:text-foreground/80 text-foreground/60">GitHub</Link>
            </nav>
          </div>
        )}

        {/* Conteúdo para telas maiores (lg) */}
        <div className="hidden lg:flex lg:items-center lg:gap-6 text-sm">
          <div className="flex items-center space-x-2">
            <Logo />
          </div>
          {siteConfig.navItems.map((item) => (
            <div key={item.href}>
              <NextLink
                className={clsx(
                  "font-sans font-bold data-[active=true]:text-slate-950 data-[active=true]:font-medium text-base",
                  "hover-effect" // Adicione a classe aqui
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </div>
          ))}
        </div>

        {/* Botão de login e outros elementos à direita */}
        <div className="flex items-center gap-4">
          <div>
            <ThemeSwitch />
          </div>
          <div>
            <Login />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
