import PageLayout from '@/components/PageLayout';
import type { Metadata } from 'next';
import ClientDate from '@/components/ClientDate';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the MapleLeaf Financial Privacy Policy to understand how we collect, use, and protect your personal data in British Columbia, Canada.',
};

export default function PrivacyPolicyPage() {
  return (
    <PageLayout title="Privacy Policy">
      <div className="space-y-6">
        <p><strong>Last Updated:</strong> <ClientDate /></p>

        <p>MapleLeaf Financial (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy and confidentiality of personal information entrusted to us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal data in compliance with Canadian privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA) and British Columbia&apos;s Personal Information Protection Act (PIPA).</p>

        <h2 className="font-headline text-2xl font-semibold text-primary">1. Collection and Use of Personal Data</h2>
        <p>We collect personal information that is necessary to provide you with our financial advisory services. This may include, but is not limited to:</p>
        <ul className="list-disc list-inside">
          <li>Contact information (e.g., name, address, email, phone number)</li>
          <li>Financial information (e.g., income, assets, liabilities, investment objectives, risk tolerance)</li>
          <li>Identification information (e.g., date of birth, SIN for regulatory purposes)</li>
          <li>Information about your financial goals and circumstances</li>
        </ul>
        <p>We use your personal data to:</p>
        <ul className="list-disc list-inside">
          <li>Assess your financial situation and provide tailored advice</li>
          <li>Open and manage accounts and investments</li>
          <li>Process transactions and provide ongoing service</li>
          <li>Comply with legal and regulatory requirements</li>
          <li>Communicate with you about our services and market updates (with your consent)</li>
        </ul>

        <h2 className="font-headline text-2xl font-semibold text-primary">2. Cookies and Tracking Technologies</h2>
        <p>Our website may use cookies and similar tracking technologies to enhance user experience, analyze website traffic, and improve our services. Cookies are small text files stored on your device. You can manage your cookie preferences through your browser settings. Disabling cookies may affect the functionality of our website.</p>

        <h2 className="font-headline text-2xl font-semibold text-primary">3. Third-Party Sharing</h2>
        <p>We do not sell your personal information. We may share your personal data with third parties only in the following circumstances:</p>
        <ul className="list-disc list-inside">
          <li>With financial institutions, custodians, or other intermediaries necessary to execute transactions or manage your accounts on your behalf.</li>
          <li>With service providers who assist us with our operations (e.g., IT support, data storage), under strict confidentiality agreements.</li>
          <li>When required by law, regulation, or legal process (e.g., to comply with anti-money laundering regulations or court orders).</li>
          <li>With your explicit consent.</li>
        </ul>
        <p>We ensure that any third parties with whom we share your data adhere to appropriate privacy and security standards.</p>

        <h2 className="font-headline text-2xl font-semibold text-primary">4. Client Rights Under Canadian Law</h2>
        <p>Under Canadian privacy laws, you have the right to:</p>
        <ul className="list-disc list-inside">
          <li>Access your personal information held by us.</li>
          <li>Request correction of inaccurate or incomplete personal information.</li>
          <li>Withdraw consent for the collection, use, or disclosure of your personal information (subject to legal or contractual restrictions).</li>
          <li>Inquire about how your personal information has been used or disclosed.</li>
        </ul>
        <p>To exercise these rights, please contact our Privacy Officer using the details below.</p>

        <h2 className="font-headline text-2xl font-semibold text-primary">5. Data Security</h2>
        <p>We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. This includes secure data storage, access controls, and encryption where appropriate.</p>
        
        <h2 className="font-headline text-2xl font-semibold text-primary">6. Data Retention</h2>
        <p>We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by law and regulatory obligations. Once no longer needed, your information will be securely destroyed or anonymized.</p>

        <h2 className="font-headline text-2xl font-semibold text-primary">7. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will post the revised policy on our website with the updated effective date. We encourage you to review this policy periodically.</p>

        <h2 className="font-headline text-2xl font-semibold text-primary">8. Contact Details for Privacy Concerns</h2>
        <p>If you have any questions, concerns, or complaints about our privacy practices or this Privacy Policy, or if you wish to exercise your rights, please contact our Privacy Officer:</p>
        <p>
          Privacy Officer<br />
          MapleLeaf Financial<br />
          123 Finance St, Vancouver, BC, Canada<br />
          Email: privacy@mapleleaffinancial.ca<br />
          Phone: (123) 456-7890
        </p>
        <p>We are committed to resolving any privacy concerns in a timely and appropriate manner.</p>
      </div>
    </PageLayout>
  );
}
