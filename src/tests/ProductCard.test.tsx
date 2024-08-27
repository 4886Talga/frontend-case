import { render, screen } from "@testing-library/react";
import ProductCard from "../components/product-card";
import { Product } from "../lib/types";

const mockProduct: Product = {
  id: "1",
  name: "Test Brewery",
  brewery_type: "micro",
  address_1: "123 Beer Lane",
  address_2: null,
  address_3: null,
  city: "Beer City",
  state_province: "Beer State",
  postal_code: "12345",
  country: "Beer Country",
  longitude: null,
  latitude: null,
  phone: "123-456-7890",
  website_url: "https://testbrewery.com",
  state: null,
  street: "123 Beer Lane",
};

describe("ProductCard", () => {
  test("renders product details correctly", () => {
    render(
      <ProductCard product={mockProduct} isLoading={false} error={null} />
    );

    expect(screen.getByText("Test Brewery")).toBeInTheDocument();
    expect(screen.getByText("micro")).toBeInTheDocument();
    expect(
      screen.getByText(
        "123 Beer Lane, Beer City, Beer State, 12345, Beer Country"
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Phone:/i)).toBeInTheDocument();
    expect(screen.getByText("123-456-7890")).toBeInTheDocument();
    expect(screen.getByText(/Visit Website/i)).toBeInTheDocument();
  });
});
