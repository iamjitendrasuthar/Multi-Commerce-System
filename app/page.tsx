import { CategoryGrid } from "@/components/CategoryGrid";
import { Footer } from "@/components/Footer";
import Hero from "@/components/HeroSection";
import { TrendingSection } from "@/components/ProductCard";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryGrid />
      <TrendingSection type="trending" />
      <TrendingSection type="latest" />
      <TrendingSection type="toprated" />
      <Footer />
    </main>
  );
}
