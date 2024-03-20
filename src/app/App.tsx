import Header from "../components/Header";
import Hero from "../components/Hero";
import USPS from "../components/USPS";
import VideoCarousel from "../components/VideoCarousel";
import "../globals.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className=" bg-background relative z-10">
          <Hero />
          <USPS />
        </div>
        <VideoCarousel />
      </main>
    </>
  );
}
