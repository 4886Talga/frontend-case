import { render, screen } from "@testing-library/react";
import App from "../components/App";
import HomePage from "../pages/home";
import { ProductsContext } from "../contexts/ProductsContextProvider";
import { mockProducts } from "../__mocks__/productMocks";

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

jest.mock("../pages/home");

// Get the mocked HomePage for mockImplementation
const MockedHomePage = HomePage as jest.Mock;

describe("test React Routes with Jest", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should mock the HomePage component", () => {
    // Mock implementation of HomePage
    MockedHomePage.mockImplementation(() => <h1>Hello From Home Page</h1>);

    // Render the App component
    render(
      <MockProductsContextProvider>
        <App />
      </MockProductsContextProvider>
    );

    const text = screen.getByText("Hello From Home Page");

    expect(text).toBeInTheDocument();
  });
});
