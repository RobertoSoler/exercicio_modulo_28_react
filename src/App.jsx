import { useState } from 'react'
import Formulario from "./components";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Formulario />
  )
}

export default App
