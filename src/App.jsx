import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import { Home } from "./pages/Home/Home.jsx"
import { Categories } from "./pages/Categories/Categories.jsx"
import { store } from "./store/store.js"

function App() {

  return (
    <>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Categories/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
