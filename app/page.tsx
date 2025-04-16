
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import AboutPreview from "@/components/home/AboutPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import TestimonialSection from "@/components/home/TestimonialSection";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <AboutPreview />
      <GalleryPreview />
      <TestimonialSection />
      <ContactCTA />
    </>
  );
}
