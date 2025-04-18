import React from "react";

export default function AboutItem(props) {
  return (
    <div className="aboutus-item">
      <h3
        className="question"
        tyle={{ fontSize: "1.15rem", fontWeight: "600" }}
      >
        Q. {props.q}
      </h3>
      <h3 className="answer" style={{ fontSize: "1.1rem", fontWeight: "400" }}>
        A.{props.a}
      </h3>
    </div>
  );
}
