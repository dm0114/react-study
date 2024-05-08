/** @jsx createElement */
import { createElement, render } from "./react.js";
const T = () => {
  return createElement("p", null, "asd");
};
const Title = () => {
  return createElement("div", null, createElement("h1", {
    style: {
      color: "red"
    }
  }, "REA"), createElement("p", null, "asd"), createElement(T, null));
};

/** 소문자일때는 string, 대문자(custom)일때는 function */
render(createElement(Title, null), document.getElementById("root"));