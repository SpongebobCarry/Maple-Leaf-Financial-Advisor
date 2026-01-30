
import PageLayout from '@/components/PageLayout';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Strategic Tax Reduction',
  description: 'Optimize your tax strategy and keep more of your hard-earned money with MapleLeaf Financial\'s expert tax reduction services.',
};

export default function TaxReductionPage() {
  return (
    <PageLayout title="Strategic Tax Reduction Planning">
      <div className="space-y-6">
        <div className="md:flex md:gap-8 items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <p className="text-lg mb-4">
              Effective tax planning is crucial for maximizing your financial well-being. At MapleLeaf Financial, we specialize in identifying opportunities to legally reduce your tax burden, allowing you to keep more of what you earn.
            </p>
            <p className="mb-4">
              Our team stays current with the latest tax laws and regulations in British Columbia and Canada to provide you with effective and compliant strategies.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/tax-reduction-savings.jpg" 
                alt="Graph showing financial growth" 
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <h2 className="font-headline text-2xl font-semibold text-primary pt-6">Why Focus on Tax Reduction?</h2>
        <ul className="list-none space-y-2 pl-0">
          {[
            { icon: CheckCircle, text: "<strong>Increased Savings:</strong> Lower taxes mean more money available for your goals." },
            { icon: CheckCircle, text: "<strong>Enhanced Investment Returns:</strong> Tax-efficient investing can significantly boost your net returns." },
            { icon: CheckCircle, text: "<strong>Improved Cash Flow:</strong> Strategic planning can optimize your cash flow throughout the year." },
            { icon: CheckCircle, text: "<strong>Greater Financial Flexibility:</strong> More disposable income provides more options for your future." },
          ].map(item => (
            <li key={item.text} className="flex items-start">
              <item.icon className="h-5 w-5 text-accent mr-2 mt-1 shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: item.text }} />
            </li>
          ))}
        </ul>
        
        <h2 className="font-headline text-2xl font-semibold text-primary pt-4">Common Tax Reduction Strategies</h2>
        <p>
          We explore various avenues to optimize your tax position, including but not limited to:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Maximizing contributions to RRSPs (Registered Retirement Savings Plans) and TFSAs (Tax-Free Savings Accounts).</li>
          <li>Strategic use of tax credits and deductions relevant to your situation.</li>
          <li>Income splitting opportunities for families and business owners.</li>
          <li>Tax-efficient investment structures and asset allocation.</li>
          <li>Planning for capital gains and losses.</li>
          <li>Corporate tax planning for business owners.</li>
        </ul>

        <h2 className="font-headline text-2xl font-semibold text-primary pt-4">Our Approach to Tax Optimization</h2>
        <p>
          Our process involves a comprehensive review of your financial picture to uncover potential tax savings:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li><strong>Detailed Analysis:</strong> We examine your income, investments, business structures, and family situation.</li>
          <li><strong>Strategy Development:</strong> We create a personalized tax reduction plan aligned with your overall financial goals.</li>
          <li><strong>Implementation Support:</strong> We guide you through the implementation of tax-saving strategies.</li>
          <li><strong>Year-Round Planning:</strong> Tax planning is not just a once-a-year event; we provide ongoing advice and adjustments.</li>
        </ol>
        <p>
          We work collaboratively with your accountant to ensure a cohesive approach to your financial and tax affairs.
        </p>

        <div className="pt-6 text-center md:text-left">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/#contact">Optimize Your Tax Strategy <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
