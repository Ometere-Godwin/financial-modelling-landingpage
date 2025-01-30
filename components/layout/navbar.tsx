"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
}

// const navigation: NavItem[] = [
//   { name: "Home", href: "/" },
//   { name: "Pricing", href: "/pricing" },
//   { name: "About", href: "/about" },
//   { name: "Contact", href: "/contact" },
// ];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const getActiveClass = (href: string) =>
    pathname === href
      ? "text-emerald-800 border-b-2 border-emerald-800"
      : "text-emerald-800";

  return (
    <header className="fixed z-50 bg-white w-full top-0">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex items-center gap-x-2">
          <Link href="/" className="flex items-center gap-x-2">
            <Image
              src={"/finarchitechlogo.png"}
              alt=""
              width={300}
              height={300}
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-emerald-800"
            >
              <span
                className={`py-2 px-4 ${getActiveClass(
                  item.href
                )} hover:text-orange-700`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:gap-x-4">
          <Link href={"https://finarchitect.netlify.app/login"} target="_blank">
            <Button
              variant="ghost"
              className="text-emerald-800 hover:text-white hover:bg-emerald-800"
            >
              Log in
            </Button>
          </Link>

          <Link href={"/register"}>
            <Button className="bg-emerald-800 hover:bg-white hover:text-emerald-800">
              Sign up
            </Button>
          </Link>
        </div>
        <button
          type="button"
          className="text-slate-300 lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className=" px-6 pb-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block p-2 text-[24px] font-semibold text-slate-300 hover:text-white bg-emerald-800"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-6 space-y-4">
              <Link href={"https://finarchitect.netlify.app/login"}>
                <Button className="w-full justify-center">Login</Button>
              </Link>

              <Button className="w-full justify-center">Sign up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
