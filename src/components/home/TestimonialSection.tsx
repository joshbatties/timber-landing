
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

// Sample testimonials
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Interior Designer",
    quote: "The quality of timber flooring from Timber Elegance has consistently exceeded our expectations. Their attention to detail and commitment to excellence make them our go-to supplier for high-end residential projects.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    name: "Michael Roberts",
    role: "Architect",
    quote: "Working with Timber Elegance on custom structural solutions has been seamless. Their technical expertise combined with aesthetic sensibility has helped us bring innovative designs to life.",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Property Developer",
    quote: "As a developer of luxury properties, the quality of materials is paramount. Timber Elegance has consistently delivered exceptional products that add value and distinction to our developments.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const TestimonialSection = () => {
  return (
    <section>
      <Container>
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Discover why architects, designers, and homeowners choose our timber solutions"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full"
            >
              <div className="mb-4 text-timber-dark">
                <svg 
                  className="h-8 w-8 opacity-25"
                  fill="currentColor" 
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              
              <p className="flex-grow text-muted-foreground italic mb-6">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-timber-dark font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
