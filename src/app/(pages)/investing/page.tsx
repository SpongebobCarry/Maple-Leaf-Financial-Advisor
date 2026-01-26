
import PageLayout from '@/components/PageLayout';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Strategic Investing Services',
  description: 'Grow your wealth through smart investment strategies designed for sustainable returns with MapleLeaf Financial.',
};

export default function InvestingPage() {
  return (
    <PageLayout title="Strategic Investing for Growth">
      <div className="space-y-6">
        <div className="md:flex md:gap-8 items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
                <p className="text-lg mb-4">
                Investing wisely is key to building long-term wealth and achieving financial independence. At MapleLeaf Financial, we offer strategic investment advice and portfolio management services tailored to your risk tolerance, time horizon, and financial objectives.
                </p>
                <p className="mb-4">
                Our goal is to help you navigate the complexities of the market and make informed investment decisions.
                </p>
            </div>
            <div className="md:w-1/2">
                <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-xl">
                    <Image 
                        src="/images/investing-growth-chart.jpg" 
                        alt="Stock market chart showing growth" 
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>

        <h2 className="font-headline text-2xl font-semibold text-primary pt-6">Our Investment Philosophy</h2>
        <p>
          We believe in a disciplined and evidence-based approach to investing, guided by these core principles:
        </p>
        <ul className="list-none space-y-2 pl-0">
          {[
            { icon: CheckCircle, text: "<strong>Long-Term Perspective:</strong> We focus on sustainable, long-term growth rather than short-term market fluctuations." },
            { icon: CheckCircle, text: "<strong>Diversification:</strong> Spreading investments across various asset classes to manage risk." },
            { icon: CheckCircle, text: "<strong>Risk Management:</strong> Aligning your portfolio with your comfort level for risk." },
            { icon: CheckCircle, text: "<strong>Cost-Effectiveness:</strong> Utilizing low-cost investment vehicles where appropriate to maximize your net returns." },
            { icon: CheckCircle, text: "<strong>Personalization:</strong> Crafting investment strategies that reflect your unique financial situation and goals." },
          ].map(item => (
            <li key={item.text} className="flex items-start">
              <item.icon className="h-5 w-5 text-accent mr-2 mt-1 shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: item.text }} />
            </li>
          ))}
        </ul>

        <h2 className="font-headline text-2xl font-semibold text-primary pt-4">Types of Investments We Advise On</h2>
        <p>
          Our expertise covers a wide range of investment options, allowing us to build diversified portfolios. These may include:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Stocks (Equities)</li>
          <li>Bonds (Fixed Income)</li>
          <li>Mutual Funds</li>
          <li>Exchange-Traded Funds (ETFs)</li>
          <li>Guaranteed Investment Certificates (GICs)</li>
          <li>Real Estate Investment Trusts (REITs)</li>
          <li>Segregated Funds</li>
        </ul>
        <p>
          We carefully select investments that align with your financial plan and risk profile.
        </p>

        <h2 className="font-headline text-2xl font-semibold text-primary pt-4">Tailoring Your Investment Strategy</h2>
        <p>
          Your investment journey with us involves:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li><strong>Understanding Your Profile:</strong> Assessing your financial goals, risk tolerance, investment knowledge, and time horizon.</li>
          <li><strong>Asset Allocation:</strong> Determining the optimal mix of asset classes for your portfolio.</li>
          <li><strong>Portfolio Construction:</strong> Selecting specific investments to build a diversified and resilient portfolio.</li>
          <li><strong>Regular Monitoring & Rebalancing:</strong> Continuously tracking performance and making adjustments to keep your portfolio on track.</li>
        </ol>
        <p>
          We provide clear, ongoing communication about your investments and market conditions.
        </p>

        <div className="pt-6 text-center md:text-left">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/#contact">Discuss Your Investment Goals <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
