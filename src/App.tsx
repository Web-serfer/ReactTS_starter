import './App.css'
import { Greeting } from './components/Greeting'

function App() {
  const name = "Alex"

  return (
    <div className="App">
      <div>
        <Greeting  name={name}/>
      </div>     
    </div>
  )
}

export default App
