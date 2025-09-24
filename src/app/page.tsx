import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { FeaturesOverview } from "../components/FeaturesOverview";
import { MenuProSection } from "../components/MenuProSection";
import { MainstreetSection } from "../components/MainstreetSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturesOverview />
      <MenuProSection />
      <MainstreetSection />
      <Footer />
    </div>
  );
}
