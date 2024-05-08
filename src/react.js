// 바벨 파싱 -> 변환 -> 코드 생성 (컴파일러, 트랜스파일러 공부 필요)

// react-hook이란, renderRealDom을 호출할 때 vdom으로 호출될 함수의 개수와 순서가 같다는 점을 이용하여,
// 이를 저장 및 활용하여 상태를 해당 호출 순서에 맞게 지원해주는 것이다.
const hooks = [];
let currentComponent = -1;

export const useState = (initialState) => {
  const position = currentComponent;

  hooks[position] = hooks[position] || initialState;

  return [
    hooks[position],
    (newState) => {
      hooks[position] = newState;
    },
  ];
};

export const createElement = (type, props, ...children) => {
  if (typeof type === "function") {
    return type.apply(null, [props, ...children]);
  }

  return {
    type,
    props,
    children,
  };
};

const renderRealDom = (vdom) => {
  if (typeof vdom === "string") {
    return document.createTextNode(vdom);
  }

  if (vdom === undefined) return;

  const $el = document.createElement(vdom.type);

  vdom.children.map(renderRealDom).forEach((node) => {
    $el.appendChild(node);
  });

  return $el;
};

export const render = (() => {
  // closure
  let prevVdom = null;

  return (nextVdom, container) => {
    if (prevVdom === null) {
      prevVdom = nextVdom;
    }

    // diff

    container.appendChild(renderRealDom(nextVdom));
  };
})();
