import { createContext, useState, useEffect, ReactNode } from "react";
import { Product } from "../lib/types"; // Adjust the path according to your project structure

interface ProductsContextType {
  products: Product[] | null;
  loading: boolean;
  error: string | null;
}

const ProductsContext = createContext<ProductsContextType | null>(null);

function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.openbrewerydb.org/v1/breweries?per_page=9")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsProvider, ProductsContext };
