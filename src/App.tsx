import './App.css'
import ReactMarkdown from 'react-markdown'

function App() {
  const name = "Alex"

  return (
    <div className="App">
      <ReactMarkdown>
        Hello **ReactTS** !!!
      </ReactMarkdown>        
    </div>
  )
}

export default App