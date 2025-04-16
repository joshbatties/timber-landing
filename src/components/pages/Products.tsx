"use client";

import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Filter, Search } from "lucide-react";

// Product data - in a real app, this would come from an API
const products = [
  {
    id: 1,
    name: "Oak Timber Flooring",
    category: "Flooring",
    image: "https://images.unsplash.com/photo-1580332449531-e2b2cc0bd291?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Premium European oak with natural grain patterns and unmatched durability.",
    price: "$75 - $95 per sq.ft"
  },
  {
    id: 2,
    name: "Walnut Structural Beams",
    category: "Structural",
    image: "https://images.unsplash.com/photo-1555774058-766df2403c1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Engineered walnut beams offering exceptional strength with aesthetic appeal.",
    price: "$120 - $150 per unit"
  },
  {
    id: 3,
    name: "Maple Engineered Panels",
    category: "Panels",
    image: "https://images.unsplash.com/photo-1578664622790-9f1ca094bff2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Versatile maple panels designed for architectural applications and interiors.",
    price: "$85 - $110 per panel"
  },
  {
    id: 4,
    name: "Cherry Wood Flooring",
    category: "Flooring",
    image: "https://images.unsplash.com/photo-1578664622806-967b5f8c1ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Rich, warm cherry wood flooring that deepens in color over time for a luxurious finish.",
    price: "$90 - $120 per sq.ft"
  },
  {
    id: 5,
    name: "Reclaimed Pine Beams",
    category: "Structural",
    image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Sustainable reclaimed pine beams with character and history, perfect for rustic designs.",
    price: "$80 - $100 per unit"
  },
  {
    id: 6,
    name: "Teak Decking Solutions",
    category: "Exterior",
    image: "https://images.unsplash.com/photo-1598544665736-74782f1f1a5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Weather-resistant teak decking for outdoor spaces with natural oils for longevity.",
    price: "$95 - $130 per sq.ft"
  },
  {
    id: 7,
    name: "Bamboo Engineered Flooring",
    category: "Flooring",
    image: "https://images.unsplash.com/photo-1588485256313-f021c61b63b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Sustainable and durable bamboo flooring with modern aesthetic appeal.",
    price: "$65 - $85 per sq.ft"
  },
  {
    id: 8,
    name: "Cedar Cladding",
    category: "Exterior",
    image: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Natural cedar cladding for exterior applications with excellent weather resistance.",
    price: "$70 - $90 per sq.ft"
  },
  {
    id: 9,
    name: "Mahogany Structural Columns",
    category: "Structural",
    image: "https://images.unsplash.com/photo-1517061395674-9e637ed149dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Elegant mahogany columns combining load-bearing capability with refined aesthetics.",
    price: "$150 - $200 per unit"
  }
];

// Categories
const categories = ["All", "Flooring", "Structural", "Panels", "Exterior"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter products based on category and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <section className="bg-timber-light/30 py-16">
        <Container className="py-8">
          <SectionHeading
            title="Our Product Collection"
            subtitle="Explore our range of premium timber products for flooring and structural applications"
            center
          />
          
          <div className="mb-10 flex flex-col md:flex-row justify-between gap-4">
            {/* Search bar */}
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-timber-medium"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            {/* Category filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <span className="text-timber-dark flex items-center gap-1">
                <Filter size={16} /> Filter:
              </span>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap ${
                    selectedCategory === category 
                      ? "bg-timber-dark text-white" 
                      : "bg-white text-timber-dark hover:bg-timber-light/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Products grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
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
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-medium uppercase tracking-wider text-timber-medium">
                        {product.category}
                      </span>
                      <span className="text-sm font-medium text-timber-dark">
                        {product.price}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif font-medium text-timber-dark">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-muted-foreground">
                      {product.description}
                    </p>
                    <button className="mt-4 inline-block px-4 py-2 bg-timber-light text-timber-dark rounded hover:bg-timber-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <h3 className="text-xl text-timber-dark">No products found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </Container>
      </section>
    </Layout>
  );
};

export default Products;
