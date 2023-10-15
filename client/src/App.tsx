import { Routes, Route } from "react-router-dom"
import Home from './pages/home'
import Attendance from "./pages/attendance"
import Page from "./pages/page"
export default function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/attendance" element={<Attendance/>}/>
      <Route path="/page" element={<Page/>}/>
      <Route path="*" element={<h1>404</h1>}/>
    </Routes>
  </>
}
