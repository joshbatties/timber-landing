
import Layout from "@/components/layout/Layout";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-timber-dark text-white">
        <Container className="py-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6">Our Story</h1>
            <p className="text-xl text-timber-light">
              Crafting exceptional timber solutions with passion and precision since 1985.
            </p>
          </div>
        </Container>
      </section>
      
      {/* Company History */}
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Heritage"
                subtitle="A legacy of excellence in timber craftsmanship"
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 1985 by master craftsman Robert Anderson, Timber Elegance began with a simple vision: to create timber products that blend traditional craftsmanship with contemporary aesthetics.
                </p>
                <p>
                  What started as a small workshop has grown into a leading provider of premium timber flooring and structural solutions, serving architects, designers, and discerning homeowners across the country.
                </p>
                <p>
                  Throughout our journey, we've remained committed to our founding principles of quality, sustainability, and exceptional customer service. Every piece of timber that passes through our workshop is treated with the respect it deserves, honoring the natural material and the environments it comes from.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1530587160743-1c61136eec7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Timber workshop" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-timber-dark p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-4xl font-serif font-bold text-white">35+</p>
                <p className="text-timber-light">Years of Excellence</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Values */}
      <section className="bg-timber-light/30">
        <Container>
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide our craft and business"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-timber-dark rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-timber-dark mb-4">Quality Without Compromise</h3>
              <p className="text-muted-foreground">
                We source only the finest timber and employ rigorous quality control throughout our production process. Every product that leaves our workshop meets our exacting standards.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-timber-dark rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 22a8 8 0 0 1 8-8h12a8 8 0 0 1-8 8Z"/>
                  <path d="M2 10a8 8 0 0 1 8-8h12a8 8 0 0 1-8 8Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-timber-dark mb-4">Environmental Stewardship</h3>
              <p className="text-muted-foreground">
                We are committed to sustainable practices, sourcing timber from responsibly managed forests and implementing eco-friendly processes in our workshop to minimize our environmental impact.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-timber-dark rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-timber-dark mb-4">Craftsmanship & Innovation</h3>
              <p className="text-muted-foreground">
                We honor traditional woodworking techniques while embracing modern innovations, creating products that are both timeless and contemporary in their appeal and functionality.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Team */}
      <section>
        <Container>
          <SectionHeading
            title="Our Team"
            subtitle="Meet the craftsmen and specialists behind our exceptional timber products"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Richard Anderson - CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium text-timber-dark">Richard Anderson</h3>
                <p className="text-timber-medium mb-4">CEO & Master Craftsman</p>
                <p className="text-muted-foreground">
                  With over 35 years of experience in timber craftsmanship, Richard leads our company with passion and precision.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Sarah Johnson - Design Director" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium text-timber-dark">Sarah Johnson</h3>
                <p className="text-timber-medium mb-4">Design Director</p>
                <p className="text-muted-foreground">
                  Sarah brings her architectural background to create innovative timber solutions that blend form and function.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Michael Roberts - Production Manager" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium text-timber-dark">Michael Roberts</h3>
                <p className="text-timber-medium mb-4">Production Manager</p>
                <p className="text-muted-foreground">
                  Michael oversees our workshop operations, ensuring each product meets our high standards of quality.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default About;
