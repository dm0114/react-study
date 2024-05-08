/** @jsx createElement */
import { createElement, render } from "./react.js";

const T = () => {
  return <p>asd</p>;
};

const Title = () => {
  return (
    <div>
      <h1 style={{ color: "red" }}>REA</h1>
      <p>asd</p>
      <T />
    </div>
  );
};

/** 소문자일때는 string, 대문자(custom)일때는 function */
render(<Title />, document.getElementById("root"));
