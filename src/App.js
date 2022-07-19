import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import MyworkList from './components/Myworklist'
import MyResume from './components/Resume'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/myworklist" element={<MyworkList />} />
          <Route path="/myresume" element={<MyResume />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
