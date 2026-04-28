import { CategoryGrid } from "@/components/CategoryGrid";
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
    </main>
  );
}
