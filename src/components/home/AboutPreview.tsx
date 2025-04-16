
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const AboutPreview = () => {
  return (
    <section>
      <Container className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Timber workshop" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-4xl font-serif font-bold text-timber-dark">35+</p>
              <p className="text-timber-medium">Years of Excellence</p>
            </div>
          </div>
          
          <div>
            <SectionHeading
              title="Crafting Excellence Since 1985"
              subtitle="We've built our reputation on quality, sustainability, and exceptional craftsmanship."
            />
            
            <div className="space-y-4 mb-8">
              <p>
                At Timber Elegance, we believe that natural materials create living spaces that nurture and inspire. Our premium timber flooring and structural solutions are crafted with passion and precision, bringing the organic beauty of wood to contemporary architecture.
              </p>
              <p>
                Founded by master craftsmen with a vision to elevate timber applications in modern design, we've grown to become a trusted provider for architects, interior designers, and discerning homeowners.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-medium text-timber-dark text-lg">Sustainable Materials</h4>
                <p className="text-muted-foreground">Ethically sourced timber from managed forests</p>
              </div>
              <div>
                <h4 className="font-medium text-timber-dark text-lg">Expert Craftsmanship</h4>
                <p className="text-muted-foreground">Handcrafted by skilled artisans</p>
              </div>
              <div>
                <h4 className="font-medium text-timber-dark text-lg">Quality Assurance</h4>
                <p className="text-muted-foreground">Rigorous testing for durability</p>
              </div>
              <div>
                <h4 className="font-medium text-timber-dark text-lg">Bespoke Solutions</h4>
                <p className="text-muted-foreground">Custom designs to meet your needs</p>
              </div>
            </div>
            
            <Link 
              to="/about"
              className="inline-block bg-timber-dark text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;
