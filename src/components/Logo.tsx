import Link from 'next/link';
import { Sprout } from 'lucide-react';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
      <Sprout className="h-7 w-7 text-accent" />
      <span className="text-xl font-semibold font-headline">MapleLeaf Financial</span>
    </Link>
  );
};

export default Logo;
