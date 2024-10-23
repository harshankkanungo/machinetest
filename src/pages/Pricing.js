import React from "react";
import "./Pricing.css"; 

const Pricing = () => {
  return (
    <div className="pricing-page">
      <h1 className="pricing-heading">Affordable Pricing Plans for Everyone</h1>
      <p className="pricing-subtext">
        <strong>
          Choose the plan that's right for you and start sharing your moments
          with the world Lorem ipsum dolor, sit amet consectetur adipisicing
          elit.
        </strong>
      </p>
      <div className="pricing-content">
        <div className="left-content">
          <div className="plan">
            <h3>Basic Plan</h3>
            <p>
              Get started with essential features for individuals at a low cost.
            </p>
          </div>
          <div className="plan">
            <h3>Pro Plan</h3>
            <p>
              Upgrade for advanced features suited for professionals and teams.
            </p>
          </div>
          <div className="plan">
            <h3>Enterprise Plan</h3>
            <p>
              Unlock all features and premium support for large organizations.
            </p>
          </div>
        </div>
        <div className="right-content">
          <img
            src="https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg"
            alt="Pricing options"
            className="pricing-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
