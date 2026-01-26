import PageLayout from '@/components/PageLayout';
import type { Metadata } from 'next';
import ClientDate from '@/components/ClientDate';

export const metadata: Metadata = {
  title: 'Copyright Policy',
  description: 'Understand the Copyright Policy of MapleLeaf Financial regarding the use of website content, text, images, and logos.',
};

export default function CopyrightPolicyPage() {
  return (
    <PageLayout title="Copyright Policy">
      <div className="space-y-6">
        <p><strong>Last Updated:</strong> <ClientDate /></p>

        <p>This Copyright Policy outlines the terms related to the ownership and use of content found on the MapleLeaf Financial website (the &quot;Site&quot;). By accessing and using this Site, you agree to comply with this policy.</p>

        <h2 className="font-headline text-2xl font-semibold text-primary">1. Ownership of Website Content</h2>
        <p>All content present on this Site, including but not limited to text, graphics, logos, icons, images, audio clips, video clips, digital downloads, data compilations, and software, is the property of MapleLeaf Financial or its content suppliers and is protected by Canadian and international copyright laws. The compilation of all content on this Site is the exclusive property of MapleLeaf Financial and protected by copyright laws.</p>

        <h2 className="font-headline text-2xl font-semibold text-primary">2. Use of Text, Images, and Logos</h2>
        <p><strong>Text:</strong> You may view, download for caching purposes only, and print pages from the Site for your own personal, non-commercial use, subject to the restrictions set out below and elsewhere in our <a href="/terms-conditions">Terms and Conditions</a>.</p>
        <p><strong>Images and Graphics:</strong> All images, photographs, and graphics displayed on the Site are protected by copyright and may not be reproduced, distributed, transmitted, displayed, published, or broadcast without the prior written permission of MapleLeaf Financial or the respective copyright owner if the content is licensed from a third party.</p>
        <p><strong>Logos and Trademarks:</strong> The trademarks, service marks, and logos (&quot;Trademarks&quot;) used and displayed on this Site are registered and unregistered Trademarks of MapleLeaf Financial and others. Nothing on this Site should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any Trademark displayed on the Site, without the written permission of the Trademark owner. MapleLeaf Financial aggressively enforces its intellectual property rights to the fullest extent of the law.</p>

        <h2 className="font-headline text-2xl font-semibold text-primary">3. User Restrictions on Copying or Republishing</h2>
        <p>Unless expressly permitted, you must not:</p>
        <ul className="list-disc list-inside">
          <li>Republish material from this Site (including republication on another website).</li>
          <li>Sell, rent, or sub-license material from the Site.</li>
          <li>Show any material from the Site in public.</li>
          <li>Reproduce, duplicate, copy, or otherwise exploit material on our Site for a commercial purpose.</li>
          <li>Edit or otherwise modify any material on the Site.</li>
          <li>Redistribute material from this Site, except for content specifically and expressly made available for redistribution.</li>
        </ul>
        <p>Any unauthorized use of the materials appearing on this Site may violate copyright, trademark, and other applicable laws and could result in criminal or civil penalties.</p>

        <h2 className="font-headline text-2xl font-semibold text-primary">4. How to Report Infringement</h2>
        <p>MapleLeaf Financial respects the intellectual property rights of others. If you believe that your copyright-protected work has been copied and posted on this Site in a way that constitutes copyright infringement, please provide our Copyright Agent with the following information in writing:</p>
        <ul className="list-disc list-inside">
          <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
          <li>Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site.</li>
          <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material.</li>
          <li>Information reasonably sufficient to permit us to contact you, such as an address, telephone number, and, if available, an electronic mail address at which you may be contacted.</li>
          <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
          <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
        </ul>
        <p>Our Copyright Agent for notice of claims of copyright infringement on this Site can be reached as follows:</p>
        <p>
          Copyright Agent<br />
          MapleLeaf Financial<br />
          123 Finance St, Vancouver, BC, Canada<br />
          Email: copyright@mapleleaffinancial.ca<br />
          Phone: (123) 456-7890
        </p>
        <p>We will investigate notices of copyright infringement and take appropriate actions under applicable intellectual property laws.</p>

        <h2 className="font-headline text-2xl font-semibold text-primary">5. Changes to This Copyright Policy</h2>
        <p>MapleLeaf Financial reserves the right to modify this Copyright Policy at any time. We will post the revised policy on the Site and update the &quot;Last Updated&quot; date. Your continued use of the Site after any such changes constitutes your acceptance of the new Copyright Policy.</p>
      </div>
    </PageLayout>
  );
}
