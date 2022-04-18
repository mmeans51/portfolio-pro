import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import './App.scss'
import Home from './components/home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
