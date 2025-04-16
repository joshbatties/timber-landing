
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "The Sustainable Future of Timber Construction",
    excerpt: "Explore how sustainable forestry practices and innovative timber technologies are shaping the future of construction.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Richard Anderson",
    date: "April 12, 2025",
    category: "Sustainability",
    tags: ["sustainability", "construction", "innovation"]
  },
  {
    id: 2,
    title: "Choosing the Right Timber Flooring for Your Home",
    excerpt: "A comprehensive guide to selecting the perfect timber flooring that matches your lifestyle, budget, and aesthetic preferences.",
    image: "https://images.unsplash.com/photo-1555505019-8c3f1c4aba5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Sarah Johnson",
    date: "April 5, 2025",
    category: "Guides",
    tags: ["flooring", "interior design", "buying guide"]
  },
  {
    id: 3,
    title: "The Art of Timber Joinery: Traditional Techniques in Modern Design",
    excerpt: "How ancient woodworking joints continue to influence contemporary timber construction and furniture design.",
    image: "https://images.unsplash.com/photo-1575539665082-336f9eca9664?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Michael Roberts",
    date: "March 28, 2025",
    category: "Craftsmanship",
    tags: ["joinery", "craftsmanship", "design"]
  },
  {
    id: 4,
    title: "Timber in Commercial Spaces: Creating Biophilic Workplaces",
    excerpt: "Why more businesses are incorporating timber elements into their office spaces to enhance well-being and productivity.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Jennifer Lee",
    date: "March 20, 2025",
    category: "Commercial",
    tags: ["commercial", "biophilic design", "office space"]
  },
  {
    id: 5,
    title: "Maintaining Your Timber Flooring: Expert Tips",
    excerpt: "Practical advice on keeping your timber floors looking beautiful for generations to come.",
    image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "David Wilson",
    date: "March 14, 2025",
    category: "Maintenance",
    tags: ["maintenance", "flooring", "care tips"]
  },
  {
    id: 6,
    title: "Timber vs. Engineered Wood: Understanding the Differences",
    excerpt: "A detailed comparison of solid timber and engineered wood products to help you make informed decisions for your projects.",
    image: "https://images.unsplash.com/photo-1599725036172-7a23db6c161d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Emma Thompson",
    date: "March 5, 2025",
    category: "Education",
    tags: ["comparison", "engineered wood", "materials"]
  }
];

// Blog categories
const categories = ["All", "Sustainability", "Guides", "Craftsmanship", "Commercial", "Maintenance", "Education"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-timber-dark text-white">
        <Container className="py-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6">Our Blog</h1>
            <p className="text-xl text-timber-light">
              Industry insights, project spotlights, and expert advice from our timber specialists.
            </p>
          </div>
        </Container>
      </section>
      
      {/* Blog Posts Section */}
      <section>
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            {/* Main Content */}
            <div className="w-full md:w-2/3">
              {/* Search Bar (Mobile Only) */}
              <div className="md:hidden mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-timber-medium"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
              
              {/* Category Filter (Mobile Only) */}
              <div className="md:hidden mb-8">
                <label htmlFor="category-mobile" className="block text-sm font-medium text-timber-dark mb-1">
                  Filter by Category
                </label>
                <select
                  id="category-mobile"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-timber-medium"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              {/* Featured Post */}
              {filteredPosts.length > 0 && (
                <div className="mb-12">
                  <Link to={`/blog/${filteredPosts[0].id}`} className="block">
                    <div className="group bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="h-80 overflow-hidden">
                        <img 
                          src={filteredPosts[0].image} 
                          alt={filteredPosts[0].title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-xs font-medium uppercase tracking-wider text-timber-medium bg-timber-light/30 px-2 py-1 rounded">
                            {filteredPosts[0].category}
                          </span>
                        </div>
                        <h2 className="text-2xl font-serif font-medium text-timber-dark mb-3 group-hover:text-primary transition-colors">
                          {filteredPosts[0].title}
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          {filteredPosts[0].excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <div className="flex items-center mr-4">
                              <User size={16} className="mr-1" />
                              <span>{filteredPosts[0].author}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar size={16} className="mr-1" />
                              <span>{filteredPosts[0].date}</span>
                            </div>
                          </div>
                          <span className="text-timber-dark font-medium inline-flex items-center gap-1 group-hover:text-primary transition-colors">
                            Read More <ArrowRight size={16} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
              
              {/* Post Grid */}
              {filteredPosts.length > 1 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.slice(1).map(post => (
                    <Link to={`/blog/${post.id}`} key={post.id} className="block">
                      <div className="group bg-white rounded-lg shadow-md overflow-hidden h-full">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-xs font-medium uppercase tracking-wider text-timber-medium bg-timber-light/30 px-2 py-1 rounded">
                              {post.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-serif font-medium text-timber-dark mb-3 group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar size={16} className="mr-1" />
                              <span>{post.date}</span>
                            </div>
                            <span className="text-timber-dark font-medium inline-flex items-center gap-1 group-hover:text-primary transition-colors">
                              Read More <ArrowRight size={14} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <h3 className="text-xl text-timber-dark">No posts found</h3>
                  <p className="text-muted-foreground mt-2">Try adjusting your search or filter criteria</p>
                </div>
              )}
              
              {/* Pagination (would be dynamic in a real application) */}
              {filteredPosts.length > 5 && (
                <div className="flex justify-center mt-12">
                  <div className="flex items-center gap-2">
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-timber-dark text-white">
                      1
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-timber-dark hover:bg-timber-light/50">
                      2
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-timber-dark hover:bg-timber-light/50">
                      3
                    </a>
                    <span className="px-2">...</span>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-timber-dark hover:bg-timber-light/50">
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="w-full md:w-1/3 space-y-8">
              {/* Search */}
              <div className="bg-white rounded-lg shadow-md p-6 hidden md:block">
                <h3 className="text-lg font-medium text-timber-dark mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-timber-medium"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6 hidden md:block">
                <h3 className="text-lg font-medium text-timber-dark mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map(category => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          selectedCategory === category 
                            ? "bg-timber-dark text-white" 
                            : "text-timber-dark hover:bg-timber-light/30"
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Recent Posts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-timber-dark mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 3).map(post => (
                    <li key={post.id} className="flex gap-4">
                      <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-timber-dark font-medium line-clamp-2 hover:text-primary transition-colors">
                          <a href={`/blog/${post.id}`}>{post.title}</a>
                        </h4>
                        <p className="text-sm text-muted-foreground">{post.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tags */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-timber-dark mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="px-3 py-1 bg-secondary text-timber-dark rounded-full text-sm hover:bg-timber-light/30 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="bg-timber-dark text-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-timber-light mb-4">
                  Stay updated with our latest articles, product launches, and industry news.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-timber-light"
                  />
                  <button
                    type="submit"
                    className="w-full bg-timber-light text-timber-dark font-medium py-2 rounded hover:bg-white transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Blog;
