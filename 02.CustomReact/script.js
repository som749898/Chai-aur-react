function customReactLogic(reactElement, container) {
  const domElement = document.createElement(reactElement.type);

  for (const prop in reactElement.attributes) {
    domElement.setAttribute(prop, reactElement.attributes[prop])
  }

  if(typeof reactElement.children === 'string') {
    domElement.innerHTML = reactElement.children;
  } else if(Array.isArray(reactElement.children)) {
    reactElement.children.forEach(child => {
      if(typeof child === 'string') {
        domElement.appendChild(document.createTextNode(child))
      } else {
        customReactLogic(child, domElement);
      }
    });
  }

  container.appendChild(domElement);
}

const reactElement = {
  type: 'div',
  attributes: {
    class: "container"
  },
  children: [
    "This is the first child.",
    {
      type: 'p',
      attributes: { class: "red-text" },
      children: "This is the second child."
    },
    "This is the third child."
  ]
};

// Custom React Implementation
const container = document.getElementById("root");

customReactLogic(reactElement, container);