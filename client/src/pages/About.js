import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ marginTop: "8%", width: "80%", paddingBottom: "30%" }}
          />
        </div>
        <div className="col-md-4">
          <p
            className="text-justify mt-2"
            style={{ marginTop: "10%", marginLeft: "5%" }}
          >
            <h3>Mission of this project:</h3>
            Our mission is to responsibly manage electronic waste by promoting
            proper disposal methods, reducing its generation, and increasing
            awareness about the environmental impact of e-waste.
            <h3>About Our model:</h3>
            Our model Provides The user with Two options, The User can visit our
            model and list their spare electronic waste item on our website via
            the 7 step easy process. OR The user can visit our website to scroll
            for buying the spare working parts of the Electronic waste listed.
            Besides Buying and selling of the spare electronic waste item, our
            model also validates the E-waste item using ML.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
