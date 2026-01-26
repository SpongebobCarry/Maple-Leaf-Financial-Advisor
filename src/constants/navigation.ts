
export type NavItem = {
  label: string;
  href: string;
};

export const headerLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Life Insurance", href: "/life-insurance" },
  { label: "Tax Reduction", href: "/tax-reduction" },
  { label: "Financial Plan", href: "/financial-planning" },
  { label: "Investing", href: "/investing" },
];

export const footerLinks: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "FAQ", href: "/faq" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Copyright Policy", href: "/copyright-policy" },
  { label: "About Us", href: "/about-us" },
];
