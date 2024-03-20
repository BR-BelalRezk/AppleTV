import Container from "./Container";
import FadIn from "./FadIn";

export default function USPS() {
  return (
    <section>
      <Container className="text-white text-4xl font-bold space-y-12 py-36 z-10 relative max-w-[650px]">
        <FadIn>
          <p>New Apple Originals every month — always ad‑free.</p>
        </FadIn>
        <FadIn>
          <p>
            Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
            sticks.
          </p>
        </FadIn>
        <FadIn>
          <p>Watch in 4K HDR video with immersive Spatial Audio.1</p>
        </FadIn>
        <FadIn>
          <p>Share a single subscription with up to five people.</p>
        </FadIn>
      </Container>
    </section>
  );
}
