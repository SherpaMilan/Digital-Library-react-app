import React from "react";
import Footer from "../Footer";
import Header from "./Header";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      {/* header goes here  */}
      <Header />

      <div className="main">{children}</div>
      {/* footer goes here  */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
