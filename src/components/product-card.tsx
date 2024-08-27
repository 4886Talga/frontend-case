import { Product } from "../lib/types";
import Spinner from "./spinner";

interface ProductCardProps {
  product: Product | null;
  isLoading: boolean;
  error: string | null;
}

function ProductCard({ product, isLoading, error }: ProductCardProps) {
  if (isLoading) {
    return (
      <div className="loading" data-cy="loading-container">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
        data-cy="error-container"
      >
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }
  console.log("Product Data:", product);
  return (
    <div
      className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
      data-cy="product-container"
    >
      <div className="md:flex justify-center items-center">
        <div className="p-8">
          <div
            className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
            data-cy="product-brewery-type"
          >
            {product?.brewery_type}
          </div>
          <h2
            id="product-name"
            className="block mt-1 text-lg leading-tight font-medium text-black"
            data-cy="product-name"
          >
            {product?.name}
          </h2>
          <p className="mt-2 text-gray-500" data-cy="product-address">
            {product?.street && `${product?.street}, `}
            {product?.city && `${product?.city}, `}
            {product?.state_province && `${product?.state_province}, `}
            {product?.postal_code && `${product?.postal_code}, `}
            {product?.country}
          </p>
          {product?.phone && (
            <p className="mt-2 text-gray-500" data-cy="product-phone">
              <strong>Phone:</strong> {product?.phone}
            </p>
          )}
          {product?.website_url && (
            <a
              href={product?.website_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-indigo-500 hover:underline"
              data-cy="product-website"
            >
              Visit Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
