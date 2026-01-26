
import PageLayout from '@/components/PageLayout';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personalized Financial Planning',
  description: 'Achieve your long-term financial goals with a personalized and strategic financial plan from MapleLeaf Financial.',
};

export default function FinancialPlanningPage() {
  return (
    <PageLayout title="Your Personalized Financial Plan">
      <div className="space-y-6">
        <div className="md:flex md:gap-8 items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
                <p className="text-lg mb-4">
                A well-crafted financial plan is your roadmap to achieving your life's aspirations. At MapleLeaf Financial, we provide comprehensive financial planning services designed to bring clarity, direction, and confidence to your financial future.
                </p>
                <p className="mb-4">
                We take a holistic view of your finances, integrating all aspects to create a cohesive strategy.
                </p>
            </div>
            <div className="md:w-1/2">
                <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-xl">
                    <Image 
                        src="/images/financial-planning-roadmap.jpg" 
                        alt="Person looking at a bright future" 
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>

        <h2 className="font-headline text-2xl font-semibold text-primary pt-6">What is Financial Planning?</h2>
        <p>
          Financial planning is a comprehensive process that helps you manage your finances to achieve your short-term and long-term goals. It involves:
        </p>
        <ul className="list-none space-y-2 pl-0">
          {[
            { icon: CheckCircle, text: "<strong>Goal Setting:</strong> Defining what you want to achieve financially (e.g., retirement, education, major purchases)." },
            { icon: CheckCircle, text: "<strong>Budgeting & Cash Flow Management:</strong> Understanding your income and expenses to optimize savings." },
            { icon: CheckCircle, text: "<strong>Investment Planning:</strong> Growing your wealth through suitable investment strategies." },
            { icon: CheckCircle,text: "<strong>Retirement Planning:</strong> Ensuring you have sufficient resources for a comfortable retirement." },
            { icon: CheckCircle, text: "<strong>Risk Management:</strong> Protecting your assets and income through insurance and other strategies." },
            { icon: CheckCircle, text: "<strong>Estate Planning:</strong> Planning for the transfer of your assets according to your wishes." },
            { icon: CheckCircle, text: "<strong>Tax Planning:</strong> Minimizing your tax liabilities legally and effectively." },
          ].map(item => (
            <li key={item.text} className="flex items-start">
              <item.icon className="h-5 w-5 text-accent mr-2 mt-1 shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: item.text }} />
            </li>
          ))}
        </ul>

        <h2 className="font-headline text-2xl font-semibold text-primary pt-4">Our Financial Planning Process</h2>
        <p>
          We follow a structured approach to develop your personalized financial plan:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li><strong>Discovery:</strong> We get to know you, your values, your current financial situation, and your goals for the future.</li>
          <li><strong>Analysis & Evaluation:</strong> We analyze your information to identify strengths, weaknesses, opportunities, and threats.</li>
          <li><strong>Strategy Development:</strong> We craft a tailored financial plan with actionable recommendations.</li>
          <li><strong>Implementation:</strong> We assist you in putting your financial plan into action.</li>
          <li><strong>Monitoring & Review:</strong> We regularly review your plan and make adjustments as your circumstances or goals change.</li>
        </ol>

        <h2 className="font-headline text-2xl font-semibold text-primary pt-4">Benefits of a Financial Plan</h2>
        <p>
            A comprehensive financial plan provides numerous benefits, including increased financial organization, a clear path to achieving your goals, better decision-making, and enhanced peace of mind. It empowers you to take control of your financial destiny.
        </p>

        <div className="pt-6 text-center md:text-left">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/#contact">Start Your Financial Plan Today <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
