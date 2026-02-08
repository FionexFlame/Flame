import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardBody } from "@/components/Card";
import site from "@/content/site.json";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main>
      <Container>
        <div className="py-16 sm:py-20">
          <SectionHeader
            kicker="Contact"
            title="Request an invite"
            subtitle="If Flame is for you, you’ll know. Send a direct note."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card>
              <CardBody>
                <p className="text-xs uppercase tracking-[0.22em] text-bone-100/45">
                  Email
                </p>
                <p className="mt-3 text-bone-100/80 leading-relaxed">
                  <a className="text-bone-100 underline" href={`mailto:${site.social.email}`}>
                    {site.social.email}
                  </a>
                </p>
                <p className="mt-4 text-bone-100/70 text-sm leading-relaxed">
                  Keep it short. One paragraph is enough.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <p className="text-xs uppercase tracking-[0.22em] text-bone-100/45">
                  What to include
                </p>
                <ul className="mt-3 space-y-2 text-bone-100/80 leading-relaxed list-disc pl-5">
                  <li>Where you are right now</li>
                  <li>What you’re building</li>
                  <li>What you refuse to compromise</li>
                </ul>
              </CardBody>
            </Card>
          </div>

          <div className="mt-12 rounded-3xl bg-ink-900/40 shadow-edge p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-bone-100/45">Optional</p>
            <p className="mt-3 text-bone-100/80 leading-relaxed max-w-3xl">
              Want a real contact form? Add Formspree or a Next.js API route later—no redesign required.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
