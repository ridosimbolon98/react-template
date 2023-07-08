import React from "react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const DefaultLayout = (props) => {
  return (
    <React.Fragment>
      <div className="flex flex-col min-h-screen scroll-smooth">
        <Navbar />
        <main className="flex-grow p-4 overflow-y-auto">{props.child}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default DefaultLayout;
