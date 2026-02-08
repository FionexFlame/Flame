import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardBody } from "@/components/Card";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import site from "@/content/site.json";

export const metadata = { title: "Watch" };

export default function WatchPage() {
  return (
    <main>
      <Container>
        <div className="py-16 sm:py-20">
          <SectionHeader
            kicker="Watch"
            title="Transmissions"
            subtitle="Short, direct, and deliberate."
          />

          <div className="mt-12 space-y-8">
            {site.videos.map((v) => (
              <Card key={v.youtubeId}>
                <CardBody>
                  <h2 className="text-xl font-semibold tracking-tightest">{v.title}</h2>
                  <p className="mt-2 text-bone-100/70">{v.description}</p>
                  <div className="mt-6">
                    <YouTubeEmbed id={v.youtubeId} title={v.title} />
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-ink-900/40 shadow-edge p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-bone-100/45">Tip</p>
            <p className="mt-3 text-bone-100/80 leading-relaxed max-w-3xl">
              Replace the sample YouTube IDs inside <code className="text-bone-100/90">content/site.json</code>.
              You can also point your YouTube link in the footer to your real channel.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
