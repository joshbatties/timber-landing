
"use client";

import Layout from "@/components/layout/Layout";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Sustainable Future of Timber Construction",
    excerpt: "Exploring how modern timber construction methods are revolutionizing the building industry with eco-friendly practices.",
    date: "April 10, 2025",
    category: "Industry Trends",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Choosing the Right Wood Species for Your Flooring",
    excerpt: "A comprehensive guide to selecting the perfect timber species based on durability, appearance, and lifestyle needs.",
    date: "April 2, 2025",
    category: "Guides",
    image: "https://images.unsplash.com/photo-1559131531-3fe43bf7256d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Timber in Modern Architecture: Case Studies",
    excerpt: "Examining award-winning architectural projects that showcase innovative uses of timber in contemporary design.",
    date: "March 25, 2025",
    category: "Case Studies",
    image: "https://images.unsplash.com/photo-1513028894927-4405a3bb9f93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Maintenance Tips for Long-lasting Timber Floors",
    excerpt: "Expert advice on how to care for your timber flooring to ensure it remains beautiful for generations.",
    date: "March 15, 2025",
    category: "Maintenance",
    image: "https://images.unsplash.com/photo-1553484604-9f524520c793?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "The Art of Timber Joinery: Traditional Techniques",
    excerpt: "Delving into the craftsmanship of traditional joinery methods that have stood the test of time.",
    date: "March 8, 2025",
    category: "Craftsmanship",
    image: "https://images.unsplash.com/photo-1499533836947-e8757e6e8381?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Biophilic Design: Incorporating Timber for Wellbeing",
    excerpt: "How the use of natural materials like timber can improve mental health and productivity in living and working spaces.",
    date: "February 28, 2025",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1577398324203-c41148031fe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Blog = () => {
  return (
    <Layout>
      <section className="py-16">
        <Container className="py-8">
          <SectionHeading
            title="Our Blog"
            subtitle="Insights, guides, and stories about timber craftsmanship and sustainable practices"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {blogPosts.map(post => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium uppercase tracking-wider text-timber-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-medium text-timber-dark mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    href="#" 
                    className="text-timber-dark font-medium hover:text-primary inline-flex items-center"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Blog;
