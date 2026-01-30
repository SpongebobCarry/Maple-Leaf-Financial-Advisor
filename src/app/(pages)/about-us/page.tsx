import PageLayout from '@/components/PageLayout';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about MapleLeaf Financial, our mission, values, and client-first approach to financial planning in British Columbia.',
};

export default function AboutUsPage() {
  return (
    <PageLayout title="About MapleLeaf Financial">
      <div className="space-y-6">
        <div className="md:flex md:gap-8 items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
                <p className="text-lg mb-4">
                MapleLeaf Financial is a premier financial advisory firm based in the heart of British Columbia, Canada. With years of dedicated experience, our team holds industry-leading credentials and a deep understanding of the Canadian financial landscape.
                </p>
                <p className="mb-4">
                Our advisors are committed to continuous professional development, ensuring we provide the most current and effective strategies to our clients.
                </p>
            </div>
            <div className="md:w-1/2">
                <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-xl">
                    <Image 
                        src="/images/about-us-team.jpg" 
                        alt="MapleLeaf Financial Team" 
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>
        
        <h2 className="font-headline text-2xl font-semibold text-primary pt-6">Our Mission and Values</h2>
        <p>
          Our mission is to empower individuals, families, and businesses in British Columbia to achieve financial well-being and peace of mind. We are guided by core values of:
        </p>
        <ul className="list-none space-y-2 pl-0">
          {[
            { icon: CheckCircle, text: "<strong>Integrity:</strong> Upholding the highest ethical standards in all our interactions." },
            { icon: CheckCircle, text: "<strong>Client-First:</strong> Placing your interests at the forefront of every decision." },
            { icon: CheckCircle, text: "<strong>Excellence:</strong> Striving for outstanding service and expert advice." },
            { icon: CheckCircle, text: "<strong>Transparency:</strong> Ensuring clear communication and straightforward processes." },
          ].map(item => (
            <li key={item.text} className="flex items-start">
              <item.icon className="h-5 w-5 text-accent mr-2 mt-1 shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: item.text }} />
            </li>
          ))}
        </ul>

        <h2 className="font-headline text-2xl font-semibold text-primary pt-4">Personalized Approach to Financial Planning</h2>
        <p>
          We believe that successful financial planning is not one-size-fits-all. Our approach is deeply personalized, beginning with a thorough understanding of your unique circumstances, goals, and aspirations. We take the time to listen and craft strategies that align with your life.
        </p>
        <p>
          Whether you&apos;re planning for retirement, seeking to protect your loved ones, or aiming to grow your wealth, we develop a tailored roadmap to guide you.
        </p>

        <h2 className="font-headline text-2xl font-semibold text-primary pt-4">Our Client-First Philosophy</h2>
        <p>
          At MapleLeaf Financial, you are more than just a client – you are a partner. Our client-first philosophy means we are dedicated to building long-term relationships based on trust and mutual respect. We are committed to providing objective advice and solutions that serve your best interests. Your success is our success.
        </p>

        <h2 className="font-headline text-2xl font-semibold text-primary pt-4">Connect With Us</h2>
        <p>
          Ready to take control of your financial future? We invite you to connect with us.
        </p>
        <ul className="list-disc list-inside space-y-1">
            <li><strong>Phone:</strong> (123) 456-7890</li>
            <li><strong>Email:</strong> info@example.com</li>
            <li><strong>Office:</strong> 123 Finance St, Vancouver, BC, Canada</li>
        </ul>
        <p>
          Alternatively, you can reach out through our online contact form.
        </p>
        <div className="pt-4">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/#contact">Schedule a Consultation</Link>
            </Button>
        </div>
      </div>
    </PageLayout>
  );
}
