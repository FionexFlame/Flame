import { Container } from "./Container";
import { Logo } from "./Logo";
import { Nav } from "./Nav";

export function Shell() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4 gap-6">
          <Logo />
          <Nav />
        </div>
      </Container>
    </header>
  );
}
