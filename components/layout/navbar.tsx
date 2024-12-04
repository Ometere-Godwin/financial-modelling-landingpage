"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BarChart2, Menu, X } from "lucide-react";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-slate-900/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex items-center gap-x-2">
          <Link href="/" className="flex items-center gap-x-2">
            <BarChart2 className="h-8 w-8 text-blue-500" aria-hidden="true" />
            <span className="text-xl font-bold text-white">FinModel</span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-slate-300 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:gap-x-4">
          <Button variant="ghost" className="text-slate-300 hover:text-white">
            Log in
          </Button>
          <Button>Sign up</Button>
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
          <div className="space-y-1 px-6 pb-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-semibold text-slate-300 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-6 space-y-4">
              <Button variant="ghost" className="w-full justify-center">
                Log in
              </Button>
              <Button className="w-full justify-center">Sign up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}