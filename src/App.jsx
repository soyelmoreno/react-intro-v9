import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

function App() {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name="The Pepperoni Pizza" description="Basic pepperoni pizza" />
      <Pizza name="Americano Pizza" description="French fries and hot dogs" />
      <Pizza name="The Hawaiian" description="Ham and pineapple" />
      <Pizza
        name="Chicken Pizza"
        description="Chicken nuggets on your pizza, wow"
      />
      <Pizza name="Baked Potato Pizza" description="Unholy potato mash" />
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
