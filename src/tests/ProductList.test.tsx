import { render, screen } from "@testing-library/react";
import { ProductsContext } from "../contexts/ProductsContextProvider";
import ProductList from "../components/product-list";
import { mockProducts } from "../__mocks__/productMocks";
import { BrowserRouter as Router } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockProducts),
  })
) as jest.Mock;

const MockProductsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const contextValue = {
    products: mockProducts,
    loading: false,
    error: null,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

describe("ProductList", () => {
  test("renders products", () => {
    render(
      <Router>
        <MockProductsContextProvider>
          <ProductList />
        </MockProductsContextProvider>
      </Router>
    );

    expect(screen.getByText("Test Brewery")).toBeInTheDocument();
    expect(screen.getByText("Test Brewery2")).toBeInTheDocument();
  });
});
