import { AppRoutes } from "./components/Routes/AppRoutes"
import { BrowserRouter } from 'react-router-dom'
import './style/index.css'
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Sidebar } from "./components/Sidebar"

function App() {

  return (
    <>
      <BrowserRouter>

      <div className="app">
        <Header />
        
        <div className="container">
          <Sidebar />
          <AppRoutes />
        </div>

        <Footer />
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
