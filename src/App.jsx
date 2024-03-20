import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Header from "./components/Header"
import Home from "./components/Home/Home"
import History from "./components/History"

function App() {

  return (
    <div className="h-screen">
      <Router>
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
