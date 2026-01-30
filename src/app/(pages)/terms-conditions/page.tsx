import PageLayout from '@/components/PageLayout';
import type { Metadata } from 'next';
import ClientDate from '@/components/ClientDate';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Review the Terms and Conditions for using the MapleLeaf Financial website and services.',
};

export default function TermsConditionsPage() {
  return (
    <PageLayout title="Terms and Conditions">
      <div className="space-y-6">
        <p><strong>Last Updated:</strong> <ClientDate /></p>

        <p>Welcome to the MapleLeaf Financial website (the &quot;Site&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of our Site and services. By accessing or using the Site, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Site.</p>

        <h2 className="font-headline text-2xl font-semibold text-primary">1. Agreement to Terms</h2>
        <p>By using this Site, you signify your acceptance of these Terms. If you are using the Site on behalf of an organization, you are agreeing to these Terms for that organization and promising that you have the authority to bind that organization to these terms. In that case, &quot;you&quot; and &quot;your&quot; will refer to that organization.</p>

        <h2 className="font-headline text-2xl font-semibold text-primary">2. Use of Services</h2>
        <p>MapleLeaf Financial provides financial advisory services. The information provided on this Site is for general informational purposes only and does not constitute financial, investment, legal, or tax advice. You should consult with a qualified professional before making any financial decisions.</p>
        <p>You agree to use our Site and services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of the Site and services complies with all applicable laws and regulations.</p>

        <h2 className="font-headline text-2xl font-semibold text-primary">3. Intellectual Property</h2>
        <p>All content on this Site, including text, graphics, logos, images, and software, is the property of MapleLeaf Financial or its content suppliers and is protected by Canadian and international copyright laws. You may not reproduce, distribute, modify, or create derivative works from any content on this Site without our prior written consent. Please refer to our <a href="/copyright-policy">Copyright Policy</a> for more details.</p>

        <h2 className="font-headline text-2xl font-semibold text-primary">4. Limitation of Liability</h2>
        <p>To the fullest extent permitted by applicable law, MapleLeaf Financial, its affiliates, officers, directors, employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:</p>
        <ul className="list-disc list-inside">
          <li>Your access to or use of or inability to access or use the Site or services;</li>
          <li>Any conduct or content of any third party on the Site;</li>
          <li>Any content obtained from the Site; or</li>
          <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
        </ul>
        <p>In no event shall MapleLeaf Financial&apos;s aggregate liability for all claims relating to the services exceed the amount paid by you, if any, for accessing this site, or CAD $100, whichever is greater.</p>
        <p>The information provided on this site is for informational purposes only and does not constitute financial advice. Financial advice is only provided to clients under a formal engagement agreement.</p>

        <h2 className="font-headline text-2xl font-semibold text-primary">5. Disclaimers</h2>
        <p>The Site and services are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. MapleLeaf Financial makes no representations or warranties of any kind, express or implied, as to the operation of the Site or the information, content, materials, or products included on the Site. You expressly agree that your use of the Site is at your sole risk.</p>
        <p>We do not warrant that the Site, its servers, or email sent from us are free of viruses or other harmful components. We will not be liable for any damages of any kind arising from the use of this Site, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.</p>

        <h2 className="font-headline text-2xl font-semibold text-primary">6. Governing Law</h2>
        <p>These Terms and your use of the Site shall be governed by and construed in accordance with the laws of the Province of British Columbia and the federal laws of Canada applicable therein, without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in Vancouver, British Columbia for the resolution of any disputes.</p>

        <h2 className="font-headline text-2xl font-semibold text-primary">7. Modifications to Terms</h2>
        <p>MapleLeaf Financial reserves the right to modify these Terms at any time. We will post the revised Terms on the Site and update the &quot;Last Updated&quot; date. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically for any updates or changes.</p>
        
        <h2 className="font-headline text-2xl font-semibold text-primary">8. Termination</h2>
        <p>We may terminate or suspend your access to our Site and services, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

        <h2 className="font-headline text-2xl font-semibold text-primary">9. Contact Information</h2>
        <p>If you have any questions about these Terms, please contact us at:</p>
        <p>
          MapleLeaf Financial<br />
          123 Finance St, Vancouver, BC, Canada<br />
          Email: legal@mapleleaffinancial.ca<br />
          Phone: (123) 456-7890
        </p>
      </div>
    </PageLayout>
  );
}
