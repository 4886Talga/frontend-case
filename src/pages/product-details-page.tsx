import { useParams } from "react-router-dom";
import ProductCard from "../components/product-card";
import useFetchProduct from "../hooks/useFetchProduct";

export default function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const { product, loading, error } = useFetchProduct(id || null);

  return (
    <div className="container mx-auto p-4">
      <ProductCard product={product} isLoading={loading} error={error} />
    </div>
  );
}
