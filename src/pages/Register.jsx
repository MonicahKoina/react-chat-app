import React, { useState } from "react";
import { Button, Input, Alert, Spin } from "antd";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [errorMessage, setErrorMessage] = useState(""); // Error message
  const [successMessage, setSuccessMessage] = useState(""); // Success message

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    // Simulate a delay for API call
    setTimeout(() => {
      if (!email || !password || !confirmPassword) {
        setLoading(false);
        setErrorMessage("All fields are required");
        return;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        setLoading(false);
        setErrorMessage("Please enter a valid email");
        return;
      } else if (password !== confirmPassword) {
        setLoading(false);
        setErrorMessage("Passwords do not match");
        return;
      } else {
        setLoading(false);
        setSuccessMessage("Account created successfully! Redirecting...");
        setTimeout(() => {
          navigate("/login"); // Redirect to login after success
        }, 1500);
      }
    }, 1500); // Simulate an API request delay
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <form
        className="w-full max-w-sm bg-white p-6 shadow-md rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col space-y-4">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            placeholder="name@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          />

          <label htmlFor="password">Password</label>
          <div className="relative">
            <Input
              type={passwordVisible ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="border border-gray-300 p-2 pr-10 rounded-md w-full"
            />
            <span
              className="absolute right-3 top-2 cursor-pointer text-gray-500"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
            </span>
          </div>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="relative">
            <Input
              type={confirmPasswordVisible ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-gray-300 p-2 pr-10 rounded-md w-full"
            />
            <span
              className="absolute right-3 top-2 cursor-pointer text-gray-500"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              {confirmPasswordVisible ? (
                <EyeInvisibleOutlined />
              ) : (
                <EyeOutlined />
              )}
            </span>
          </div>

          {/* Show Alert based on success or error */}
          {errorMessage && (
            <Alert
              message={errorMessage}
              type="error"
              showIcon
              className="mb-4"
            />
          )}

          {successMessage && (
            <Alert
              message={successMessage}
              type="success"
              showIcon
              className="mb-4"
            />
          )}

          {/* Loading spinner */}
          {loading ? (
            <Spin size="large" className="flex justify-center mt-4" />
          ) : (
            <Button type="primary" block htmlType="submit">
              Sign Up
            </Button>
          )}

          <p className="text-center mt-2 text-sm">
            Already have an account?{" "}
            <a href="#" className="text-blue-500">
              Sign In
            </a>
          </p>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <p className="mx-3 text-sm text-gray-500">OR CONTINUE WITH</p>
            <hr className="flex-grow border-gray-300" />
          </div>

          <Button
            block
            icon={<GoogleOutlined />}
            className="flex items-center justify-center border border-gray-300"
          >
            Google
          </Button>
        </div>

        <div className="mt-4">
          <p>
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
