import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContextProvider";
import { ProductsContextType } from "../lib/types";

export function useProductsContext() {
  const context = useContext(ProductsContext) as ProductsContextType;

  if (context === null) {
    throw new Error(
      "useProductsContext must be used within a useProductsContext"
    );
  }
  return context;
}
