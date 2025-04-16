
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import AboutPreview from "@/components/home/AboutPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import TestimonialSection from "@/components/home/TestimonialSection";
import ContactCTA from "@/components/home/ContactCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <AboutPreview />
      <GalleryPreview />
      <TestimonialSection />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
