
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

// Sample gallery images
const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Modern living room with timber flooring"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Timber kitchen with island"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Timber beams in modern home"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Wooden staircase in contemporary home"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Wooden bedroom interior"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Timber bathroom design"
  }
];

const GalleryPreview = () => {
  return (
    <section className="bg-timber-light/30">
      <Container>
        <SectionHeading
          title="Our Project Gallery"
          subtitle="See how our timber products transform spaces into stunning environments"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md group h-64"
            >
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 bg-timber-dark text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Explore Full Gallery
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default GalleryPreview;
