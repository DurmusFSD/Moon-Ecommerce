import LogoImg from "../../assets/common/logo.png";
import { BodyOne, Caption, CustomLink, Title } from "./CustomComponents";

export const Footer = () => {
  return (
    <>
      <footer className="py-14">
        <div className="container grid-cols-1 md:grid-cols-2 grid lg:grid-cols-4 gap-8">
          <div>
            <img src={LogoImg} alt="" className="h-7" />

            <div className="flex flex-col gap-2 mt-5">
              <Caption>Address: Karabük/Türkiye</Caption>
              <Caption>Email: durmusozgul66@gmail.com</Caption>
              <Caption>Call: 55555555555</Caption>
            </div>
            <br />
            <BodyOne>Subscribe To Our Newsletter</BodyOne>
            <input
              type="text"
              className="p-3 w-full border bg-white-100 border-gray-300 rounded-md outline-none"
              placeholder="Enter Your Email Address"
            />
          </div>
          <div>
            <Title level={5}>Our Stories</Title>
            <div className="flex flex-col gap-4">
              <CustomLink>Normal</CustomLink>
              <CustomLink>Shop with Sidebar</CustomLink>
              <CustomLink>Shop with Category</CustomLink>
              <CustomLink>Shop Filters Top Bar</CustomLink>
              <CustomLink>Shop Wide</CustomLink>
              <CustomLink>My Account</CustomLink>
            </div>
          </div>
          <div>
            <Title level={5}>Useful Links</Title>
            <div className="flex flex-col gap-4">
              <CustomLink>Normal</CustomLink>
              <CustomLink>Shop with Sidebar</CustomLink>
              <CustomLink>Shop with Category</CustomLink>
              <CustomLink>Shop Filters Top Bar</CustomLink>
              <CustomLink>Shop Wide</CustomLink>
              <CustomLink>My Account</CustomLink>
            </div>
          </div>
          <div>
            <Title level={5}>Our BLog</Title>
            <div className="flex flex-col gap-4">
              <CustomLink>Normal</CustomLink>
              <CustomLink>Shop with Sidebar</CustomLink>
              <CustomLink>Shop with Category</CustomLink>
              <CustomLink>Shop Filters Top Bar</CustomLink>
              <CustomLink>Shop Wide</CustomLink>
              <CustomLink>My Account</CustomLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
