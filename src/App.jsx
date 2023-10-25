import { Routes,Route } from "react-router-dom"

import { LoginPage } from "./pages/LoginPage"
import { HomePage } from "./pages/HomePage"
import { ProfilePage } from "./pages/ProfilePage"
import { SettingsPage } from "./pages/SettingsPage"

import { ProtectedLayout } from "./layouts/ProtectedLayOut"
import { FreeLayout } from "./layouts/FreeLayout"
import { Apod } from "./pages/Apod"

import "./index.css"

function App() {
  
  return (        
      <Routes>
        <Route element={<FreeLayout />}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<LoginPage />}/>
        </Route>
        
        <Route path="/dashboard" element={<ProtectedLayout />}>
          <Route path="profile" element={<ProfilePage />}/>
          <Route path="settings" element={<SettingsPage />}/>
          <Route path="apod" element={<Apod/> } />
        </Route>
      </Routes>
  )
}

export default App
