
import PageLayout from '@/components/PageLayout';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Life Insurance Solutions',
  description: 'Secure your family\'s future with comprehensive life insurance plans tailored to your needs by MapleLeaf Financial.',
};

export default function LifeInsurancePage() {
  return (
    <PageLayout title="Comprehensive Life Insurance Solutions">
      <div className="space-y-6">
        <div className="md:flex md:gap-8 items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <p className="text-lg mb-4">
              Life insurance is a cornerstone of financial security, providing peace of mind for you and your loved ones. At MapleLeaf Financial, we help you navigate the complexities of life insurance to find a policy that truly protects what matters most.
            </p>
            <p className="mb-4">
              Whether you're looking to replace income, cover debts, or leave a legacy, we have the expertise to guide you.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/life-insurance-family.jpg" 
                alt="Family enjoying security" 
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <h2 className="font-headline text-2xl font-semibold text-primary pt-6">Why Life Insurance is Essential</h2>
        <ul className="list-none space-y-2 pl-0">
          {[
            { icon: CheckCircle, text: "<strong>Income Replacement:</strong> Ensure your family's financial stability if you're no longer there to provide." },
            { icon: CheckCircle, text: "<strong>Debt Coverage:</strong> Cover mortgages, loans, and other outstanding debts." },
            { icon: CheckCircle, text: "<strong>Final Expenses:</strong> Handle funeral costs and other end-of-life expenses without burdening loved ones." },
            { icon: CheckCircle, text: "<strong>Legacy Planning:</strong> Leave a financial gift to your beneficiaries or a favorite charity." },
            { icon: CheckCircle, text: "<strong>Business Continuity:</strong> Protect your business in the event of a key person's passing." },
          ].map(item => (
            <li key={item.text} className="flex items-start">
              <item.icon className="h-5 w-5 text-accent mr-2 mt-1 shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: item.text }} />
            </li>
          ))}
        </ul>

        <h2 className="font-headline text-2xl font-semibold text-primary pt-4">Types of Life Insurance We Offer</h2>
        <p>
          We offer a variety of life insurance products to suit different needs and budgets, including:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Term Life Insurance:</strong> Affordable coverage for a specific period.</li>
          <li><strong>Whole Life Insurance:</strong> Lifelong coverage with a cash value component.</li>
          <li><strong>Universal Life Insurance:</strong> Flexible lifelong coverage with investment options.</li>
          <li><strong>Critical Illness Insurance:</strong> Lump-sum payment upon diagnosis of a covered critical illness.</li>
          <li><strong>Disability Insurance:</strong> Income protection if you're unable to work due to illness or injury.</li>
        </ul>
        <p>
          Our advisors will explain the benefits of each and help you determine the best fit.
        </p>

        <h2 className="font-headline text-2xl font-semibold text-primary pt-4">How We Help You Choose</h2>
        <p>
          Choosing the right life insurance can be overwhelming. Our process is designed to simplify this:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li><strong>Needs Assessment:</strong> We conduct a thorough analysis of your financial situation, responsibilities, and future goals.</li>
          <li><strong>Policy Comparison:</strong> We compare options from various reputable insurers to find the best coverage and value.</li>
          <li><strong>Clear Explanations:</strong> We ensure you understand the terms, benefits, and costs of your policy.</li>
          <li><strong>Ongoing Review:</strong> As your life changes, we help you review and adjust your coverage accordingly.</li>
        </ol>

        <div className="pt-6 text-center md:text-left">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/#contact">Discuss Your Life Insurance Needs <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
