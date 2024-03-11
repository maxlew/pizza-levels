'use client'

import { useEffect, useState } from "react";
import MenuBar from "../menu-bar/menu-bar";
import PizzaList from "../pizza-list/pizza-list";
import { MotionConfig, motion } from "framer-motion";

type PizzaControllerProps = {
  pizzaData: PizzaData[];
}

export default function PizzaController({ pizzaData }: PizzaControllerProps) {
  const [pizzaLevelFilter, setPizzaLevelFilter] = useState(0);
  const [pizzaList, setPizzaList] = useState(pizzaData);


  useEffect(() => {
    // This might need some refactoring if there was multiple filters
    const filteredList = pizzaData.filter((pizza) => {
      if (pizzaLevelFilter) {
        return pizza.level === Number(pizzaLevelFilter);
      }
      return true;
    });

    // Would be good to also control this through UI
    const sortedList = filteredList.sort((a, b) => b.rating - a.rating);

    setPizzaList(sortedList);
  }, [pizzaLevelFilter, pizzaData]);

  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <MotionConfig reducedMotion="user" transition={{ duration: 0.1 }}>
        <MenuBar pizzaLevelFilter={pizzaLevelFilter} setPizzaLevelFilter={setPizzaLevelFilter} />
        <PizzaList pizzaList={pizzaList} />
      </MotionConfig>
    </motion.div>
  )
}
