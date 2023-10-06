import React from "react";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../Styles/AuthStyles.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  //form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/auth/register`, {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      console.log(res);
      if (res.data.success) {
        toast.success("Successfully created!");
        setTimeout(() => {
          navigate("/login");
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
          <h4 className="title">REGISTER FORM </h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="exampleInputName"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>
          <div class="mb-3">
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
          <div class="mb-3">
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
          <div class="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="exampleInputmMbile"
              className="form-control"
              placeholder="Enter your phone"
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              id="exampleInputAddress"
              className="form-control"
              placeholder="Enter your address"
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              id="exampleInputAnswer"
              className="form-control"
              placeholder="Enter your pet name"
              required
            />
          </div>

          <button type="submit" class="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
