import PizzaController from "./components/pizza-controller/pizza-controller";
import getSheet from "./data/getSheet";

export default async function App() {
  const pizzaData = await getSheet();

  return (
    <PizzaController pizzaData={pizzaData} />
  );
}
