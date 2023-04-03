'use client'

import Card from "./components/Card";

export default function Home() {
  return (
    <main className="h-screen p-5 flex flex-col justify-center items-center">
      <h1 className="title text-center px-3 pb-3 text-3xl">QUOTE OF THE DAY</h1>

      <div className="mt-3 text-white text-center">
        <Card />
      </div>
    </main>
  )
}