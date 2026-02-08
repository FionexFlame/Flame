import { Button } from "./Button";

export function CTA() {
  return (
    <div className="mt-10 flex flex-col sm:flex-row gap-3">
      <Button href="/mission">Enter Flame</Button>
      <Button href="/contact" variant="ghost">Request an invite</Button>
    </div>
  );
}
