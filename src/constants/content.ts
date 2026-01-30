import type { Icon } from 'lucide-react';
import { ShieldCheck, Percent, ClipboardList, LineChart, Smile } from 'lucide-react';

export interface Service {
  icon: Icon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: ShieldCheck,
    title: "Life Insurance",
    description: "Secure your family's future with comprehensive life insurance plans tailored to your needs.",
  },
  {
    icon: Percent,
    title: "Tax Reduction",
    description: "Optimize your tax strategy and keep more of your hard-earned money with our expert advice.",
  },
  {
    icon: ClipboardList,
    title: "Financial Planning",
    description: "Achieve your long-term financial goals with a personalized and strategic financial plan.",
  },
  {
    icon: LineChart,
    title: "Investing",
    description: "Grow your wealth through smart investment strategies designed for sustainable returns.",
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatarIcon?: Icon;
  avatarImage?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Working with MapleLeaf Financial has been a game-changer for my family's financial security. Highly recommend their personalized approach!",
    author: "Jane Doe",
    role: "Client, Vancouver",
    avatarIcon: Smile,
  },
  {
    quote: "Their expertise in tax reduction saved me a significant amount. Professional, knowledgeable, and truly client-focused.",
    author: "John Smith",
    role: "Business Owner, BC",
    avatarIcon: Smile,
  },
  {
    quote: "I finally feel confident about my investment portfolio thanks to the team at MapleLeaf Financial. Clear, transparent advice.",
    author: "Alice Brown",
    role: "Investor, Victoria",
    avatarIcon: Smile,
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive suite of financial services including Life Insurance, Tax Reduction strategies, personalized Financial Planning, and Investment Management. Our goal is to provide holistic financial solutions tailored to your unique situation.",
  },
  {
    question: "Is the initial consultation free?",
    answer: "Yes, we offer a complimentary initial consultation. This allows us to understand your financial goals and needs, and for you to learn more about how we can help, with no obligation.",
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment by calling us at (123) 456-7890, emailing info@example.com, or by filling out the contact form on our website. We'll get back to you promptly to schedule a convenient time.",
  },
  {
    question: "Are your services covered by insurance commissions or fees?",
    answer: "Our compensation structure is transparent. For insurance products, we are typically compensated by the insurance providers. For financial planning and investment services, we may charge a fee-based service, which will be fully disclosed and agreed upon before any services are rendered.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer: "Absolutely. We understand the need for flexibility, so we offer both in-person and virtual consultations to accommodate clients across British Columbia and beyond.",
  },
  {
    question: "How are your fees structured?",
    answer: "Our fee structure depends on the services you require. For insurance products, we are generally compensated through commissions from the insurance companies. For financial planning and investment advice, we may operate on a fee-for-service or assets under management (AUM) basis. All fees and compensation methods are discussed upfront and transparently.",
  },
];
