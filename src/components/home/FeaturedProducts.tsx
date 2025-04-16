
import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import Container from "../ui/Container";

// Sample product data
const featuredProducts = [
  {
    id: 1,
    name: "Oak Timber Flooring",
    category: "Flooring",
    image: "https://images.unsplash.com/photo-1580332449531-e2b2cc0bd291?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Premium European oak with natural grain patterns and unmatched durability."
  },
  {
    id: 2,
    name: "Walnut Structural Beams",
    category: "Structural",
    image: "https://images.unsplash.com/photo-1555774058-766df2403c1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Engineered walnut beams offering exceptional strength with aesthetic appeal."
  },
  {
    id: 3,
    name: "Maple Engineered Panels",
    category: "Panels",
    image: "https://images.unsplash.com/photo-1578664622790-9f1ca094bff2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Versatile maple panels designed for architectural applications and interiors."
  }
];

const FeaturedProducts = () => {
  return (
    <section className="bg-secondary/50">
      <Container>
        <SectionHeading
          title="Our Featured Products"
          subtitle="Discover our selection of premium timber solutions crafted with precision and passion."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-timber-medium">
                  {product.category}
                </span>
                <h3 className="text-xl font-serif font-medium text-timber-dark mt-2">
                  {product.name}
                </h3>
                <p className="mt-3 text-muted-foreground">
                  {product.description}
                </p>
                <Link
                  to={`/products/${product.id}`}
                  className="mt-4 inline-block px-4 py-2 bg-timber-light text-timber-dark rounded hover:bg-timber-medium transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-timber-dark text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
