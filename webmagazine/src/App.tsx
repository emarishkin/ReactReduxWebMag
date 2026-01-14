import { AppRoutes } from "./components/Routes/AppRoutes"
import { BrowserRouter } from 'react-router-dom'
import './style/index.css'
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Sidebar } from "./components/Sidebar"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getCategories } from "./features/categories/categoriesSlice"
import type { addDispatch } from "./features/store"

function App() {

  const dispatch = useDispatch<addDispatch>()

  useEffect(()=>{
    dispatch(getCategories())
  },[dispatch])

  return (
    <>
      <BrowserRouter>

      <div className="app">
        <Header />
        
        <div style={{display:'flex'}} className="container">
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
