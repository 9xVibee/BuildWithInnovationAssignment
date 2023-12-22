import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const { token } = data;
        localStorage.setItem("token", token);
        navigate("/");
      });
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Click here to Login</h1>
        <button className="btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
