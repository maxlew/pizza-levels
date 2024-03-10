'use client'

import { Dispatch, SetStateAction } from "react";

type MenuBarProps = {
  pizzaLevelFilter: number;
  setPizzaLevelFilter: Dispatch<SetStateAction<number>>
}

export default function MenuBar({ pizzaLevelFilter, setPizzaLevelFilter }: MenuBarProps) {
  const handlePizzaLevelChange = (event: React.FormEvent<HTMLSelectElement>) => {
    // Target value comes out as a string, so coerce it back to a number
    setPizzaLevelFilter(Number(event.currentTarget.value))
  }

  return (
    <div className="flex py-3 px-6 border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900">
      <h1 className="text-xl my-auto">Pizza Ratings</h1>
      <span className="ml-auto max-w-sm">
        <label
          htmlFor="pizzaLevel"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Pizza Level:
        </label>
        <select
          id="pizzaLevel"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handlePizzaLevelChange}
          value={pizzaLevelFilter}
        >
            <option value={0}>All</option>
            <option value={1}>1 - Frozen</option>
            <option value={2}>2 - Food court</option>
            <option value={3}>3 - Conveyor Oven</option>
            <option value={4}>4 - Conventional Oven</option>
            <option value={5}>5 - Wood Fired</option>
        </select>
      </span>
    </div>
  )
}
