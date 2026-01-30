'use client';

import Link from 'next/link';
import { footerLinks, type NavItem } from '@/constants/navigation';
import Logo from '@/components/Logo';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);


  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo />
            <p className="mt-2 text-sm text-muted-foreground">
              Your trusted partner in financial planning.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Navigate</h3>
                <ul className="mt-4 space-y-2">
                  {footerLinks.slice(0, 3).map((link: NavItem) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Legal</h3>
                <ul className="mt-4 space-y-2">
                  {footerLinks.slice(3).map((link: NavItem) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>123 Finance St, Vancouver, BC</li>
                  <li>info@example.com</li>
                  <li>(123) 456-7890</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} MapleLeaf Financial. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Financial advisory services provided in Canada.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
