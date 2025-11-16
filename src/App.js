function Pizza(props) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
}

function App() {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "Basic pepperoni pizza",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description: "French fries and hot dogs",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian",
      description: "Ham and pineapple",
    }),
    React.createElement(Pizza, {
      name: "Chicken Pizza",
      description: "Chicken nuggets on your pizza, wow",
    }),
    React.createElement(Pizza, {
      name: "Baked Potato Pizza",
      description: "Unholy potato mash",
    }),
  ]);
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
