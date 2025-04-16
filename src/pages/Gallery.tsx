
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { X } from "lucide-react";

// Gallery categories
const categories = ["All", "Flooring", "Structural", "Residential", "Commercial"];

// Gallery images
const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Modern living room with timber flooring",
    category: "Flooring",
    title: "Contemporary Living Room"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Timber kitchen with island",
    category: "Flooring",
    title: "Luxury Kitchen Design"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Timber beams in modern home",
    category: "Structural",
    title: "Exposed Beam Ceiling"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Wooden staircase in contemporary home",
    category: "Structural",
    title: "Floating Staircase"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Wooden bedroom interior",
    category: "Residential",
    title: "Tranquil Bedroom Retreat"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Timber bathroom design",
    category: "Residential",
    title: "Spa-Inspired Bathroom"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1604014056470-e63516ae0e2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Commercial timber office space",
    category: "Commercial",
    title: "Biophilic Office Design"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Restaurant with wooden features",
    category: "Commercial",
    title: "Upscale Restaurant Interior"
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1617098650990-217c7cf9de26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Timber desk in home office",
    category: "Residential",
    title: "Functional Home Office"
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  // Filter images by category
  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <Layout>
      <section className="py-16">
        <Container className="py-8">
          <SectionHeading
            title="Project Gallery"
            subtitle="Explore our completed projects and see our timber products in real-world applications"
            center
          />
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm ${
                  selectedCategory === category 
                    ? "bg-timber-dark text-white" 
                    : "bg-secondary text-timber-dark hover:bg-timber-light/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredImages.map((image) => (
              <div 
                key={image.id}
                className="overflow-hidden rounded-lg shadow-md group h-64 relative cursor-pointer"
                onClick={() => setLightboxImage(image.url)}
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <h3 className="text-white font-medium text-lg">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-timber-light"
            onClick={() => setLightboxImage(null)}
          >
            <X size={24} />
          </button>
          <img 
            src={lightboxImage} 
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
