import PageLayout from '@/components/PageLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqItems, type FAQItem } from '@/constants/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about MapleLeaf Financial services, consultations, fees, and more.',
};

export default function FAQPage() {
  return (
    <PageLayout title="Frequently Asked Questions">
      <p className="mb-8 text-center md:text-left text-lg">
        Have questions? We&apos;ve got answers. Here are some of the most common inquiries we receive. If you don&apos;t find what you&apos;re looking for, please don&apos;t hesitate to contact us.
      </p>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item: FAQItem, index: number) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left hover:no-underline font-semibold text-primary">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </PageLayout>
  );
}
