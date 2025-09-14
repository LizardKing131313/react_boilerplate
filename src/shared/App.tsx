import { useState } from "react";
import { z } from "zod";

const schema = z.object({ message: z.string() });
export function App() {
  const [count, setCount] = useState(0);
  const parsed = schema.parse({ message: "Hello, React Boilerplate!" });
  return (
    <main className="min-h-screen grid place-items-center">
      <section className="p-8 rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-2">{parsed.message}</h1>
        <p className="mb-4 opacity-70">Strict TS, ESLint flat, Vitest, Tailwind, Query.</p>
        <button className="px-4 py-2 rounded-xl border" onClick={() => setCount((c) => c + 1)}>
          Count: {count}
        </button>
      </section>
    </main>
  );
}
