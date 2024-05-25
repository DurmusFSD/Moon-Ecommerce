import { Footer } from "./Footer";
import Header from "./Header";
import ProtoTypes from "prop-types";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <Footer/>
    </>
  );
};
Layout.protoTypes = {
  color: ProtoTypes.isRequired,
  children: ProtoTypes.isRequired,
};
