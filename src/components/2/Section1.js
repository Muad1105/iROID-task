import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import mars from "../../images/mars-sector-6-7d4LREDSPyQ-unsplash.png";

function section1() {
  const { Meta } = Card;

  return (
    <div className="section1">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card
          bordered={false}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 200px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#940d1b",
              position: "relative",
            }}
          >
            Happiness Is Our Culture
            <div className="dark-circle"></div>
            <div className="light-circle"></div>
          </h1>
          <p style={{ color: "#515151", width: "950px", textAlign: "center" }}>
            The productivity and prosperity of an organisation is the reflection
            of the happiness and contentment of its employees. We believe that
            is what builds a family and the nation too. Happy employees are not
            just an asset to the organisation, but the love, contentment and
            enthusiasm they display build the whole world.So it is our prime
            responsibility to give a conducive, happy work culture for our
            employees, a climate which gives them opportunities for self growth
            and skill development.
          </p>
        </Card>
        <Card bordered={false}>
          <img src={mars} alt="" />
        </Card>
      </div>
    </div>
  );
}

export default section1;
