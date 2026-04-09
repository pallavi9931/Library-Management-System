import { useState } from "react";
import axios from "axios";
import "../App.css";
import {useNavigate} from "react-router-dom";

function Login() {
  const navigate=useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:8080/auth/login", {
        username,
        password
      });
    console.log("FULL RESPONSE:", res.data);
      console.log("FULL RESPONSE ", res);
    console.log("DATA ", res.data);
      localStorage.setItem("token", res.data.token);
      alert("Login Success ");
      navigate("/dashboard");

    } catch (err) {
      alert("Invalid Credentials ");
       console.log("ERROR ", err);
    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h2> Login</h2>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>

      </div>

    </div>
  );
}

export default Login;