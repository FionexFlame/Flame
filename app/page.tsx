import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card, CardBody } from "@/components/Card";
import site from "@/content/site.json";

export default function HomePage() {
  return (
    <main>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 gridline opacity-60" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-ember-500/10 blur-3xl" />
        <Container>
          <div className="py-16 sm:py-24">
            <p className="text-xs uppercase tracking-[0.22em] text-bone-100/50">
              A signal for the ready
            </p>

            <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tightest leading-[1.02] max-w-3xl">
              {site.brand.tagline}
            </h1>

            <p className="mt-6 text-bone-100/75 max-w-2xl leading-relaxed">
              Flame is a threshold: clarity over noise, restraint over performance,
              consequence over comfort.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button href={site.cta.primary.href}>{site.cta.primary.label}</Button>
              <Button href={site.cta.secondary.href} variant="ghost">
                {site.cta.secondary.label}
              </Button>
            </div>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card>
                <CardBody>
                  <p className="text-xs uppercase tracking-[0.22em] text-bone-100/45">Quiet power</p>
                  <p className="mt-3 text-bone-100/80 leading-relaxed">
                    Authority you don’t have to announce.
                  </p>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <p className="text-xs uppercase tracking-[0.22em] text-bone-100/45">Precision</p>
                  <p className="mt-3 text-bone-100/80 leading-relaxed">
                    Your next move becomes obvious—and executed.
                  </p>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <p className="text-xs uppercase tracking-[0.22em] text-bone-100/45">Impact</p>
                  <p className="mt-3 text-bone-100/80 leading-relaxed">
                    Measured in ripples, not applause.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
