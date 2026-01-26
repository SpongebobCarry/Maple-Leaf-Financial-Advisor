import type { ReactNode } from 'react';

export default function PagesLayout({ children }: { children: ReactNode }) {
  return <div className="flex-grow">{children}</div>;
}
