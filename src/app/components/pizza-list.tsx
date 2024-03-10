import Pizza from "./pizza";

type PizzaListProps = {
  pizzaList: PizzaData[]
}

export default function PizzaList({ pizzaList }: PizzaListProps) {
  return (
    <div className="p-6 mx-auto max-w-screen-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
        {pizzaList.map((pizza, i) => (
          <Pizza key={pizza.restaurant} {...pizza} />
        ))}
      </div>
    </div>
  )
}
