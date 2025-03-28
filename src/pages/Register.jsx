import { Button } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sign from "../assets/signup.jpg";

function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    navigate("/signin");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full ">
      <div className="hidden md:block md:w-1/2 h-full">
        <img src={sign} alt="signup" className="h-full w-full object-cover" />
      </div>
      <div className="flex items-center justify-center w-full md:w-1/2 px-6">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">
            Create an Account
          </h2>

          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-900">
                First Name
              </label>
              <input
                type="text"
                className="border-1 p-1 rounded-sm"
                placeholder="first Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Last Name
              </label>
              <input
                type="text"
                className="border-1 p-1 rounded-sm"
                placeholder="last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-900">
              Email Address
            </label>
            <input
              type="email"
              className="border-1 p-1 rounded-sm w-full"
              placeholder="name@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-900">
              Phone Number
            </label>
            <input
              type="tel"
              className="border-1 p-1 rounded-sm w-full"
              placeholder="123-45-678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              type="password"
              className="border-1 p-1 rounded-sm w-full"
              placeholder="•••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-900">
              Confirm Password
            </label>
            <input
              type="password"
              className="border-1 p-1 rounded-sm w-full"
              placeholder="•••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-start mb-6">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              required
            />
            <label className="ml-2 text-sm text-gray-900">
              I agree with the
              <a href="#" className="text-blue-600 hover:underline">
                {" "}
                terms and conditions
              </a>
              .
            </label>
          </div>

          <Button
            type="primary"
            htmlType="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-md font-medium"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Register;
