import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Home, ProductDetails } from "./router";
import { Shop } from "./screen/shop/Shop";
import { CartPage } from "./screen/CartPage";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/shop"
            element={
              <Layout>
                <Shop />
              </Layout>
            }
          />
          <Route
            path="/product-details/:productId"
            element={
              <Layout>
                <ProductDetails />
              </Layout>
            }
          />
             <Route
            path="/cart"
            element={
              <Layout>
                <CartPage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
