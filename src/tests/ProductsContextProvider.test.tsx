import { render, screen, waitFor } from "@testing-library/react";
import { ProductsProvider } from "../contexts/ProductsContextProvider";
import { useProductsContext } from "../hooks/useProductsContext";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        { id: "1", name: "Test Brewery", city: "" },
        { id: "2", name: "Test Brewery2", city: "" },
      ]),
  })
) as jest.Mock;

describe("ProductsProvider", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const MockComponent = () => {
    const { products, loading, error } = useProductsContext();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!products) return <div>No products available</div>;
    return (
      <div>
        {Array.isArray(products) &&
          products.map((product) => <div key={product.id}>{product.name}</div>)}
      </div>
    );
  };

  test("fetches and provides products data", async () => {
    render(
      <ProductsProvider>
        <MockComponent />
      </ProductsProvider>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    // Wait for the products to be displayed
    await waitFor(() => {
      expect(screen.getByText("Test Brewery")).toBeInTheDocument();
      expect(screen.getByText("Test Brewery2")).toBeInTheDocument();
    });
  });

  test("displays error when fetch fails", async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(new Error("API is down"))
    ) as jest.Mock;

    render(
      <ProductsProvider>
        <MockComponent />
      </ProductsProvider>
    );

    const errorMessage = await screen.findByText(/Error: API is down/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
