import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ErrorComponent from "./error";
import PizzaController from "./components/pizza-controller";

async function getPizzaData(): Promise<PizzaData[]> {
  const response = await fetch('http://localhost:3000/api/pizza');

  if (!response.ok) {
    throw new Error('Unable to fetch Pizza response from API');
  }

  const json = await response.json();
  return json.data;
}

export default async function App() {
  const pizzaData = await getPizzaData();

  return (
    <ErrorBoundary errorComponent={ErrorComponent}>
      <PizzaController pizzaData={pizzaData} />
    </ErrorBoundary>
  );
}
