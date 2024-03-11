import Pizza from "../pizza/pizza";

type PizzaListProps = {
  pizzaList: PizzaData[]
}

export default function PizzaList({ pizzaList }: PizzaListProps) {
  return (
    <div
      data-testid="pizza-list"
      className="p-6 mx-auto max-w-screen-xl"
    >
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
        {pizzaList.map((pizza) => (
          <Pizza key={pizza.restaurant} {...pizza} />
        ))}
      </ul>
    </div>
  )
}
