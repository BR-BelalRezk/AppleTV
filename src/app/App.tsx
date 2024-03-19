import Container from "../components/Container";
import Header from "../components/Header";
import Hero from "../components/Hero";
import USPS from "../components/USPS";
import "../globals.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <USPS />
        <section>
          <Container>3 col pricing</Container>
        </section>
        <section>
          <Container>carousel with posters</Container>
        </section>
      </main>
    </>
  );
}
