import React from "react";
import Navbar from "../components/navbar/navbar";
import ContactUs from "../components/contactus/contactussp";
import Footer from "../components/footer/footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <ContactUs style={"100px"} />
      <Footer />
    </>
  );
};

export default ContactPage;
