import CompanySection from "@/components/sections/companySection";
import { CTASection } from "@/components/sections/cta";
import { FeaturesSection } from "@/components/sections/features";
import { HeroSection } from "@/components/sections/hero";
import { PricingSection } from "@/components/sections/pricing";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CompanySection />
      <PricingSection />
      <CTASection />
    </>
  );
}
