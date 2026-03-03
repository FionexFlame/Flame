import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardBody } from "@/components/Card";
import { Button } from "@/components/Button";
import site from "@/content/site.json";

export const metadata = { title: "Workshops" };

export default function WorkshopsPage() {
  return (
    <main>
      <Container>
        <div className="py-16 sm:py-20">
          <SectionHeader
            kicker="Workshops"
            title="Live work. Real movement."
            subtitle="Designed for clarity, alignment, and decisive action."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {site.workshops.map((w) => (
              <Card key={w.title}>
                <CardBody>
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-semibold tracking-tightest">{w.title}</h2>
                    <span className="text-xs rounded-full px-3 py-1 bg-ink-800 text-bone-100/70 shadow-edge">
                      {w.when}
                    </span>
                  </div>
                  <p className="mt-3 text-bone-100/80 leading-relaxed">{w.description}</p>
                  <div className="mt-6">
                    <Button href={w.cta.href}>{w.cta.label}</Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-ink-900/40 shadow-edge p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-bone-100/45">Details</p>
            <p className="mt-3 text-bone-100/80 leading-relaxed max-w-3xl">
              Small gatherings for authentic change.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
