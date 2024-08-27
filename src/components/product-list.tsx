import { Link } from "react-router-dom";
import { useProductsContext } from "../hooks/useProductsContext";

export default function ProductList() {
  const { products } = useProductsContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products?.map((product) => (
        <div
          key={product.id}
          className="border p-4 rounded"
          data-test="product-item"
        >
          <Link
            to={`/products/${product.id}`}
            className="text-blue-500 underline"
          >
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-700">{product.city}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
