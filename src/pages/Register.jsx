import React, { useState } from "react";
import { Button, Input, Alert, Spin } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../utils/firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User credentials", userCredentials.user);
    } catch (err) {
      console.log("Registration error", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 shadow-2xl rounded-lg"
      >
        <div className="text-center">
          <h1 className="font-bold">CREATE ACCOUNT</h1>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            placeholder="name@email.com"
            className="border border-gray-300 p-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <Input
            type="password"
            id="password"
            placeholder="Enter password"
            className="border border-gray-300 p-2 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
            className="border border-gray-300 p-2 rounded-md"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="mt-4">
            <Button type="primary" block htmlType="submit" disabled={loading}>
              {loading ? "Creating account..." : "Sign Up"}
            </Button>
          </div>

          <p className="text-center mt-2 text-sm">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-500">
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
