import { render, act } from "@testing-library/react";
import useFetchProduct from "../hooks/useFetchProduct";
import { Product } from "../lib/types";

// Mock the fetch API response, fetch is a global function that exists globally in a browser. In order to mock fetch, we need to access fetch from global
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ id: "1", name: "Test Brewery" } as Product),
  })
) as jest.Mock;

describe("useFetchProduct", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Define a Test Component to capture the hook's output
  function TestComponent({ id }: { id: string }) {
    const hookResult = useFetchProduct(id);
    return <div>{JSON.stringify(hookResult)}</div>; // Render result as a string for testing
  }

  test("fetches product data successfully", async () => {
    const { container } = render(<TestComponent id="1" />);

    await act(async () => {}); // make sure that all updates related to state changes, effects, and other asynchronous actions are flushed before proceeding

    const hookResult = JSON.parse(container.textContent || "");
    expect(hookResult.product).toEqual({ id: "1", name: "Test Brewery" });
    expect(hookResult.loading).toBe(false);
    expect(hookResult.error).toBeNull();
  });

  test("handles fetch error", async () => {
    // Mock a failed fetch
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error("Failed to fetch product"))
    );

    const { container } = render(<TestComponent id="1" />);

    await act(async () => {});

    const hookResult = JSON.parse(container.textContent || "");
    expect(hookResult.product).toBeNull();
    expect(hookResult.loading).toBe(false);
    expect(hookResult.error).toBe("Failed to fetch product");
  });
});
