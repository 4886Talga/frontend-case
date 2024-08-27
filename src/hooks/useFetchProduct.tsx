import { useState, useEffect } from "react";
import { Product } from "../lib/types"; // Adjust the path according to your project structure

function useFetchProduct(id: string | null) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Invalid product ID");
      setLoading(false);
      return;
    }

    setLoading(true);

    fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        return response.json();
      })
      .then((data: Product) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  return { product, loading, error };
}

export default useFetchProduct;
