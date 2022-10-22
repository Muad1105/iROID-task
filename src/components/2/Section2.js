import React from "react";
import "antd/dist/antd.css";
import { Card, Col, Row } from "antd";
import imgSection2 from "../../images/Group-467.png";

function Section2() {
  return (
    <div
      style={{ display: "flex", gap: "100px", margin: "100px 0 0 199px" }}
      className="Section2"
    >
      <img
        src={imgSection2}
        alt=""
        style={{ width: "400px", height: "421px", left: "299px" }}
      />
      <div style={{ left: "691px" }}>
        <h4
          style={{
            width: "429px",
            textAlign: "left",
            font: "normal normal medium 24px/38px Roboto",
          }}
        >
          What Do We Do To Make Our Employees Stay Happy And Satisfied ?
        </h4>
        <ul>
          <li
            style={{
              width: "504px",
              textAlign: "left",
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            Listen to them. We give opportunities for them to express their
            views- personal and official.
          </li>
          <li
            style={{
              width: "504px",
              textAlign: "left",
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            Appreciate the employees for the effort put in verbally and also
            through incentives, awards, accolades and public acknowledgements in
            meetings.
          </li>
          <li
            style={{
              width: "504px",
              textAlign: "left",
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            Organise training programmes to enhance their professional skills,
            and also for personal re engineering to build strong self- esteem,
            develop interpersonal, social, team communication skills and
            attitude.
          </li>
          <li
            style={{
              width: "504px",
              textAlign: "left",
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            The work environment is made proactive, positive, calm, joyful,
            effective, productive and enjoyable through meditation and other
            Self Building activities.
          </li>
          <li
            style={{
              width: "504px",
              textAlign: "left",
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            Timely Financial assistance is rendered as a part of employee
            welfare scheme as and when required.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Section2;
