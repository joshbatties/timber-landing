
import { FormEvent, useState } from "react";
import Layout from "@/components/layout/Layout";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    
    // Reset the submission state after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-timber-dark text-white">
        <Container className="py-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6">Contact Us</h1>
            <p className="text-xl text-timber-light">
              Have a question or ready to start your project? Get in touch with our team.
            </p>
          </div>
        </Container>
      </section>
      
      {/* Contact Details and Form */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <SectionHeading
                title="Get In Touch"
                subtitle="Our timber specialists are ready to answer your questions and discuss your project requirements."
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="bg-timber-light/50 p-3 rounded-full">
                    <MapPin className="text-timber-dark" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-timber-dark mb-1">Our Location</h4>
                    <p className="text-muted-foreground">
                      123 Timber Lane, Forest Hills<br />
                      New York, NY 10001, USA
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-timber-light/50 p-3 rounded-full">
                    <Mail className="text-timber-dark" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-timber-dark mb-1">Email Us</h4>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@timberelegance.com" className="hover:text-timber-dark transition-colors">
                        info@timberelegance.com
                      </a><br />
                      <a href="mailto:sales@timberelegance.com" className="hover:text-timber-dark transition-colors">
                        sales@timberelegance.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-timber-light/50 p-3 rounded-full">
                    <Phone className="text-timber-dark" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-timber-dark mb-1">Call Us</h4>
                    <p className="text-muted-foreground">
                      <a href="tel:+12345678900" className="hover:text-timber-dark transition-colors">
                        +1 (234) 567-8900
                      </a><br />
                      <a href="tel:+12345678901" className="hover:text-timber-dark transition-colors">
                        +1 (234) 567-8901
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-timber-light/50 p-3 rounded-full">
                    <Clock className="text-timber-dark" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-timber-dark mb-1">Working Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-medium text-timber-dark mb-4">Visit Our Showroom</h4>
                <div className="h-64 rounded-lg overflow-hidden">
                  {/* Google Maps iframe would go here in a real application */}
                  <div className="bg-gray-200 h-full w-full flex items-center justify-center text-muted-foreground">
                    Interactive Map Placeholder
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-serif font-medium text-timber-dark mb-6">Send Us a Message</h3>
              
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                  <h4 className="text-xl font-medium text-green-800 mb-2">Message Sent Successfully!</h4>
                  <p className="text-green-600">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-timber-dark mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-timber-medium"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-timber-dark mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-timber-medium"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-timber-dark mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-timber-medium"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-timber-dark mb-1">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-timber-medium"
                      >
                        <option value="">Select a subject</option>
                        <option value="Product Inquiry">Product Inquiry</option>
                        <option value="Custom Order">Custom Order</option>
                        <option value="Consultation">Consultation Request</option>
                        <option value="Support">Technical Support</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-timber-dark mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-timber-medium"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-timber-dark text-white py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Contact;
