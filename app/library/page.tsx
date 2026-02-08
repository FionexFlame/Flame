import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardBody } from "@/components/Card";
import { Button } from "@/components/Button";
import site from "@/content/site.json";

export const metadata = { title: "Books" };

export default function LibraryPage() {
  return (
    <main>
      <Container>
        <div className="py-16 sm:py-20">
          <SectionHeader
            kicker="Library"
            title="Books & transmissions"
            subtitle="Curated work. Released with restraint."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {site.books.map((b) => (
              <Card key={b.title}>
                <CardBody>
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-semibold tracking-tightest">{b.title}</h2>
                    <span className="text-xs rounded-full px-3 py-1 bg-ink-800 text-bone-100/70 shadow-edge">
                      {b.status}
                    </span>
                  </div>
                  <p className="mt-3 text-bone-100/80 leading-relaxed">{b.description}</p>
                  <div className="mt-6">
                    <Button href={b.link} variant="ghost">Details</Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-ink-900/40 shadow-edge p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-bone-100/45">Note</p>
            <p className="mt-3 text-bone-100/80 leading-relaxed max-w-3xl">
              This page is powered by <code className="text-bone-100/90">content/site.json</code>.
              Update your books once, and the site updates everywhere.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
