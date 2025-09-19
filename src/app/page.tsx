import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-3xl font-bold">Physics Solver</h1>
      <form action="/api/solve" method="POST" className="flex gap-2 w-full max-w-md">
        <Input 
          name="question" 
          placeholder="Enter your physics problem..." 
          className="flex-1"
        />
        <Button type="submit">Solve</Button>
      </form>
    </main>
  )
}
