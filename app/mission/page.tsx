import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardBody } from "@/components/Card";
import { CTA } from "@/components/CTA";
import site from "@/content/site.json";

export const metadata = { title: "Mission" };

export default function MissionPage() {
  return (
    <main>
      <Container>
        <div className="py-16 sm:py-20">
          <SectionHeader
            kicker="Mission"
            title={site.mission.headline}
            subtitle="Flame is built for people who are done negotiating with their potential."
          />

          <div className="mt-10 space-y-4 prose-dark max-w-3xl">
            {site.mission.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {site.mission.pillars.map((p) => (
              <Card key={p.title}>
                <CardBody>
                  <p className="text-xs uppercase tracking-[0.22em] text-bone-100/45">
                    {p.title}
                  </p>
                  <p className="mt-3 text-bone-100/80 leading-relaxed">{p.text}</p>
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
