import { useNavigate } from "react-router"
import { useAuth } from "../hooks/useAuth"

const AppBar = () => {
  
  const navigate = useNavigate()
  const { user,logout } = useAuth()
  
  const handleNavigate = (path) => {

  }
  
  return (
    <div>AppBar</div>
  )
}

export default AppBar