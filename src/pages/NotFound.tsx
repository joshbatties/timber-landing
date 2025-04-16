import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-xl p-6">
          <h1 className="text-8xl font-serif font-bold text-timber-dark mb-6">404</h1>
          <h2 className="text-3xl font-medium mb-4">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-timber-dark text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
