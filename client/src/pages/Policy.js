import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus">
        <div className="overflow-hidden col-md-4">
          <img
            src="/images/privacy.png"
            alt="contactus"
            style={{
              marginTop: "10%",
              width: "400px"
            }}
          />
        </div>
        <div className="overflow-hidden col-md-6">
          <h1 className="text-justify">
            Privacy Policy
          </h1>
          <p
            className="text-justify mt-1" >
            Privacy Policy [RUNEWASTE] is committed to protecting the privacy
            and security of our customers and visitors to our website. This
            policy explains how we collect, use, and safeguard personal
            information. Information We Collect We collect personal information
            that you provide to us, such as your name, email address, phone
            number, and payment information. We also collect information
            automatically through the use of cookies and other tracking
            technologies.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
