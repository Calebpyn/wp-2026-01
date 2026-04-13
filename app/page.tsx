import Hero from "@/components/sections/Hero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import MissionVision from "@/components/sections/MissionVision";
import VisitUs from "@/components/sections/VisitUs";
import Generosity from "@/components/sections/Generosity";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <MissionVision />
      <VisitUs />
      <Generosity />
      <Footer />
    </main>
  );
}
