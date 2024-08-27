import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "./container";
import Footer from "./footer";
import H1 from "./H1";
import Header from "./header";
import HomePage from "../pages/home";
import ProductDetailsPage from "../pages/product-details-page";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header>
          <a href="/">
            <H1>Frontend Case</H1>
          </a>
        </Header>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
