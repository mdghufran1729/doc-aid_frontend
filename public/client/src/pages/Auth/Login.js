import React from "react";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../../Styles/AuthStyles.css";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  //form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/auth/login`, {
        email,
        password,
      });

      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
        setAuth({ ...auth, user: res.data.user, token: res.data.token });
        localStorage.setItem("auth", JSON.stringify(res.data));
        setTimeout(() => {
          navigate(location.state || "/");
        }, 0);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM </h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="exampleInputEmail"
              className="form-control"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="exampleInputPassword1"
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
