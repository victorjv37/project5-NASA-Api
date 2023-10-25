import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

export const AppBar = ({pages}) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleNavigate = (path) => {
    if (path) navigate(path);
  };

  return (
    <>
      <header>
        <h1>NASA API</h1>
      </header>
      <nav>
        {
          pages?.map((page) => (
            <button key={page.label} onClick={() => handleNavigate(page.path)}>
              {page.label}
            </button>
          ))
        }
        {
          !!user && (
            <button id="logout" key={logout} onClick={logout}>
              Logout
            </button>
          )
        }
      </nav>
    </>
  );
};


