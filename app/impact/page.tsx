import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardBody } from "@/components/Card";
import { CTA } from "@/components/CTA";
import site from "@/content/site.json";

export const metadata = { title: "Impact" };

export default function ImpactPage() {
  return (
    <main>
      <Container>
        <div className="py-16 sm:py-20">
          <SectionHeader
            kicker="Impact"
            title={site.impact.headline}
            subtitle="Flame doesn’t chase attention. It changes trajectories."
          />

          <div className="mt-10 space-y-4 prose-dark max-w-3xl">
            {site.impact.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {site.impact.signals.map((s) => (
              <Card key={s.title}>
                <CardBody>
                  <p className="text-xs uppercase tracking-[0.22em] text-bone-100/45">
                    {s.kicker}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold tracking-tightest">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-bone-100/80 leading-relaxed">{s.text}</p>
                </CardBody>
              </Card>
            ))}
          </div>

          <CTA />
        </div>
      </Container>
    </main>
  );
}
