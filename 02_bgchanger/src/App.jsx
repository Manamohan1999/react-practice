import { useState } from "react"

function App() {
  let [color, setColor] = useState("orange")
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="flex justify-center text-white text-3xl py-28 font-bold">Choose to Change Background Color</div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white rounded-2xl px-3 py-2">
          <button
            onClick={() => setColor("black")}
            className="flex flex-wrap bg-black text-white shadow-lg rounded-full px-3 py-2 justify-center">Black</button>
          <button
            onClick={() => setColor("#2563eb")}
            className="flex flex-wrap bg-blue-600 text-white shadow-lg rounded-full px-3 py-2 justify-center">Blue</button>
          <button
            onClick={() => setColor("#9333ea")}
            className="flex flex-wrap bg-purple-600 text-white shadow-lg rounded-full px-3 py-2 justify-center">Purple</button>
          <button
            onClick={() => setColor("#16a34a")}
            className="flex flex-wrap bg-green-600 text-white shadow-lg rounded-full px-3 py-2 justify-center">Green</button>
        </div>
      </div>
    </div>
  )
}

export default App
