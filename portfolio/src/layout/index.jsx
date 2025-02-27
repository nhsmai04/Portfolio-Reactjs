import Header from "./header";
import Footer from "./footer";

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default DefaultLayout;

