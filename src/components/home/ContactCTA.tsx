
import { Link } from "react-router-dom";
import Container from "../ui/Container";

const ContactCTA = () => {
  return (
    <section className="bg-timber-dark text-white py-20">
      <Container className="py-12">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-medium">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-timber-light">
            Contact us today to discuss your project requirements with our timber specialists.
            We're here to help bring your vision to life with our premium timber solutions.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white hover:bg-timber-light text-timber-dark px-6 py-3 rounded-md font-medium transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              to="/products" 
              className="bg-transparent hover:bg-white/10 text-white border border-white/50 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactCTA;
