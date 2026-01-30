import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionWrapper from '@/components/SectionWrapper';
import { services, testimonials, type Service, type Testimonial } from '@/constants/content';
import { ArrowRight, CheckCircle, Quote, Smile } from 'lucide-react';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'MapleLeaf Financial | Your Trusted Financial Advisor in BC',
  description: 'Expert financial advice and planning services in British Columbia, Canada. Specializing in life insurance, tax reduction, financial planning, and investing.',
};


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-br from-background to-secondary/30 pt-20 md:pt-28">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Secure Your Future with Expert Financial Guidance
            </h1>
            <p className="text-lg text-foreground mb-8">
              MapleLeaf Financial provides personalized financial advice to help you achieve your goals. Based in British Columbia, we specialize in life insurance, tax reduction, financial planning, and strategic investing.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-transform hover:scale-105">
                <Link href="/#contact">Schedule a Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="shadow-lg transition-transform hover:scale-105">
                <Link href="/#services">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/hero-financial-meeting.jpg"
              alt="Professional financial advisor meeting"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Services Section */}
      <SectionWrapper id="services">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a range of services to help you build a strong financial foundation and achieve your aspirations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service: Service) => (
            <Card key={service.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-accent/10 text-accent rounded-full p-4 w-fit mb-4">
                  <service.icon className="h-10 w-10" />
                </div>
                <CardTitle className="font-headline text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper id="testimonials" className="bg-secondary/30">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from individuals and families who have benefited from our financial expertise.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <Card key={index} className="flex flex-col shadow-lg">
              <CardContent className="pt-6 flex-grow">
                <Quote className="h-8 w-8 text-accent mb-4" />
                <p className="text-foreground italic mb-6">&quot;{testimonial.quote}&quot;</p>
              </CardContent>
              <CardHeader className="pt-0 mt-auto">
                <div className="flex items-center">
                  {testimonial.avatarIcon ? (
                     <div className="bg-muted rounded-full p-2 mr-3">
                        <testimonial.avatarIcon className="h-8 w-8 text-primary" />
                     </div>
                  ) : null}
                  <div>
                    <p className="font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact Form Section */}
      <SectionWrapper id="contact" className="bg-background">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Secure Your Financial Future?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Take the first step towards financial clarity and confidence. Fill out the form below or contact us today for a no-obligation consultation.
          </p>
        </div>
        <ContactForm />
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Or call us at (123) 456-7890
        </p>
      </SectionWrapper>
    </>
  );
}
