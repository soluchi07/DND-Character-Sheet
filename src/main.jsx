import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from './App.jsx'
import Layout from './Routes/Layout.jsx'
import NotFound from './Routes/NotFound.jsx'
import Details from './Routes/Details.jsx'
import EditCharacter from './Routes/EditCharacter.jsx'
import NewCharacter from './Routes/NewCharacter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index path="/" element={<App />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path='/edit/:id' element={<EditCharacter />}/>
          <Route path='/create' element={<NewCharacter/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
