
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPage() {
  return (
    <section className="py-16">
      <Container className="py-8">
        <SectionHeading
          title="About Timber Elegance"
          subtitle="Our journey in crafting premium timber solutions since 1985"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div>
            <h3 className="text-2xl font-serif font-medium text-timber-dark mb-4">Our Story</h3>
            <p className="text-muted-foreground mb-6">
              Founded in 1985, Timber Elegance began as a small family workshop dedicated to the craft of fine woodworking.
              Over the decades, we've grown into a leading provider of premium timber solutions while maintaining our
              commitment to quality, sustainability, and craftsmanship.
            </p>
            <p className="text-muted-foreground">
              What sets us apart is our deep understanding of wood as a living material. Each piece of timber has its own
              character, and our artisans work to highlight these natural qualities while ensuring structural integrity
              and longevity.
            </p>
          </div>
          
          <div className="bg-timber-light/20 p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-medium text-timber-dark mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              At Timber Elegance, our mission is to bring the natural beauty and warmth of timber into modern spaces,
              creating environments that are both aesthetically pleasing and functionally superior.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-timber-dark font-medium">●</span>
                <span>Sourcing sustainable timber from responsibly managed forests</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-timber-dark font-medium">●</span>
                <span>Combining traditional craftsmanship with modern technology</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-timber-dark font-medium">●</span>
                <span>Creating products that stand the test of time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-timber-dark font-medium">●</span>
                <span>Supporting local communities through responsible business practices</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-serif font-medium text-timber-dark mb-6 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-3 text-timber-dark">Quality</h4>
              <p className="text-muted-foreground">
                We never compromise on quality, selecting only the finest timber and employing meticulous craftsmanship
                in everything we create.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-3 text-timber-dark">Sustainability</h4>
              <p className="text-muted-foreground">
                Our commitment to sustainable practices extends from our sourcing methods to our production processes
                and waste management.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-3 text-timber-dark">Innovation</h4>
              <p className="text-muted-foreground">
                While honoring traditional woodworking techniques, we continuously explore innovative approaches to
                enhance the performance and applications of timber.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
