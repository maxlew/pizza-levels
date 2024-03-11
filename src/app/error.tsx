'use client'

import MenuBar from "./components/menu-bar/menu-bar"

type ErrorComponentProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorComponent(props: ErrorComponentProps) {
  return (
    <>
      <MenuBar />
      <div className="p-6 mx-auto max-w-screen-xl">
        <h2 className="text-xl pb-3">Something went wrong finding the pizzas, perhaps they are still in the oven?</h2>
        <p className="text-red-600 pb-6">Error: {props.error.message}</p>
        <button
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={props.reset}
        >
          Give it a kick, see if it works again
        </button>
      </div>
    </>
  )
}
