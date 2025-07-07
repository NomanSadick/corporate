import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TrustedClients from "@/components/TrustedClients";
import ReviewSlider from "@/components/ReviewSlider";


export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <TrustedClients />
      <ReviewSlider />
    </div>
  );
}