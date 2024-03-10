'use client' // Error components must be Client Components

type ErrorComponentProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorComponent(props: ErrorComponentProps) {
  return (
    <div>
      <h2>Something went wrong finding the pizza, perhaps is still in the oven?</h2>
      <p>{props.error.message}</p>
    </div>
  )
}
