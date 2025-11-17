import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

function App() {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza
        name="The Pepperoni Pizza"
        description="Basic pepperoni pizza"
        image="/public/pizzas/pepperoni.webp"
      />
      <Pizza
        name="Americano Pizza"
        description="French fries and hot dogs"
        image="/public/pizzas/big_meat.webp"
      />
      <Pizza
        name="The Hawaiian"
        description="Ham and pineapple"
        image="/public/pizzas/hawaiian.webp"
      />
      <Pizza
        name="Chicken Pizza"
        description="Chicken nuggets on your pizza, wow"
        image="/public/pizzas/ckn_alfredo.webp"
      />
      <Pizza
        name="Baked Potato Pizza"
        description="Unholy potato mash"
        image="/public/pizzas/veggie_veg.webp"
      />
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
