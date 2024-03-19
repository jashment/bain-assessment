import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Home/Header"
import Home from "./components/Home/Home"
import History from "./components/History"

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
