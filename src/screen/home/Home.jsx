import { Caption, Title } from "../../components/common/CustomComponents";
import { ProductSlideCard } from "../../components/product/ProductSlide";
import { ShippingInfo } from "../../components/product/ShippingInfo";
import { Banner, Hero, InstagramPost, ProductSlide, Testimonials } from "../../router";
import { Product } from "../product/Product";

export const Home = () => {
  return (
    <>
      <Hero />
      <Product />
      <ShippingInfo />
      <Banner />
      <ProductSlide />
      <Testimonials />

      <div className="container my-16 slideproduct">
        <Title level={3}>Recent Product</Title>
        <Caption>DISCOVER THE MOST TRENDING PRODUCTS IN MOONCART</Caption>
        <br />
        <ProductSlideCard />
      </div>
      <InstagramPost/>
    </>
  );
};
