import type { ReactNode } from 'react';
import SectionWrapper from './SectionWrapper';

interface PageLayoutProps {
  title: string;
  children: ReactNode;
  breadcrumb?: ReactNode; // Optional breadcrumb element
}

const PageLayout = ({ title, children, breadcrumb }: PageLayoutProps) => {
  return (
    <SectionWrapper className="py-12 md:py-20 bg-background">
      <div className="max-w-4xl mx-auto">
        {breadcrumb && <div className="mb-6 text-sm text-muted-foreground">{breadcrumb}</div>}
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-8 text-center md:text-left">
          {title}
        </h1>
        <div className="prose prose-lg max-w-none text-foreground prose-headings:font-headline prose-headings:text-primary prose-a:text-accent prose-strong:text-primary">
          {children}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PageLayout;
