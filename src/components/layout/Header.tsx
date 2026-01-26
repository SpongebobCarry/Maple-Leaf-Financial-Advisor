"use client";

import Link from 'next/link';
import { Menu, Sprout } from 'lucide-react';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { headerLinks, type NavItem } from '@/constants/navigation';
import Logo from '@/components/Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      {headerLinks.map((link: NavItem) => (
        <Link
          key={link.label}
          href={link.href}
          onClick={onClick}
          className="text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md"
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-background/95 shadow-md backdrop-blur-sm' : 'bg-background'
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden md:flex items-center space-x-2">
          <NavLinks />
        </nav>
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <div className="p-6">
                <div className="mb-8">
                  <Logo />
                </div>
                <nav className="flex flex-col space-y-4">
                  <NavLinks onClick={() => setMobileMenuOpen(false)} />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
