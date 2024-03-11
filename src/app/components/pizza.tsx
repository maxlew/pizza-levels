import Rating from "./rating";
import { motion } from "framer-motion"

export default function Pizza(props: PizzaData) {

  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout={true}
      className={`flex flex-col p-4 row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900`}
    >
      <h3 className="text-xl font-medium">{props.restaurant}</h3>
      <p className="text-s pt-1">Pizza Level: {props.level}</p>
      <p className="text-s pt-1">{props.notes}</p>

      <div className="mt-auto pt-2"><Rating rating={props.rating} /></div>
    </motion.li>
  )
}
