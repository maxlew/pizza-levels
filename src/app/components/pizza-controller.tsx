'use client'

import { useEffect, useState } from "react";
import MenuBar from "./menu-bar";
import PizzaList from "./pizza-list";

type PizzaControllerProps = {
  pizzaData: PizzaData[];
}

export default function PizzaController({ pizzaData }: PizzaControllerProps) {
  const [pizzaLevelFilter, setPizzaLevelFilter] = useState(0);
  const [pizzaList, setPizzaList] = useState(pizzaData);


  useEffect(() => {
    const filteredList = pizzaData.filter((pizza) => {
      if (pizzaLevelFilter) {
        return pizza.level === Number(pizzaLevelFilter);
      }
      return true;
    });
    setPizzaList(filteredList);
  }, [pizzaLevelFilter, pizzaData]);

  return (
    <>
      <MenuBar pizzaLevelFilter={pizzaLevelFilter} setPizzaLevelFilter={setPizzaLevelFilter} />
      <PizzaList pizzaList={pizzaList} />
    </>
  )
}
