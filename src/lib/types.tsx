export interface Product {
  id: string;
  name: string;
  brewery_type: string;
  address_1: string;
  address_2: string | null;
  address_3: string | null;
  city: string;
  state_province: string | null;
  postal_code: string;
  country: string;
  longitude: string | null;
  latitude: string | null;
  phone: string | null;
  website_url: string | null;
  state: string | null;
  street: string | null;
}

export interface ProductsContextType {
  products: Product[] | null;
  loading: boolean;
  error: string | null;
}
