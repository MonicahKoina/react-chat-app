import React, { useState } from "react";
import { GoogleCircleFilled, TikTokFilled } from "@ant-design/icons";
import { Button, Input } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log("Logged in", userCredentials.user);
        setError("");
      })
      .catch((err) => {
        console.error("logIn error", err.message);
        setError(err.message);
      });
  }
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Welcome Back
        </h2>

        <div className="flex flex-col gap-4">
          <label className="text-sm font-medium" htmlFor="email">
            Email
          </label>
          <Input
            size="large"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="text-sm font-medium" htmlFor="password">
            Password
          </label>
          <Input.Password
            size="large"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="text-right mt-2">
          <a
            href="/forgotPassword"
            className="text-blue-500 text-sm hover:underline"
          >
            Forgot Password?
          </a>
        </div>

        <Button
          type="primary"
          size="large"
          className="w-full mt-6 rounded-full"
        >
          Sign In
        </Button>

        <div className="relative my-6">
          <hr className="border-t border-gray-300" />
          <p className="absolute inset-x-0 top-[-12px] text-center bg-white w-fit mx-auto px-4 text-sm text-gray-400">
            OR CONTINUE WITH
          </p>
        </div>

        <div className="flex justify-center gap-6 text-2xl text-gray-600">
          <GoogleCircleFilled className="hover:text-blue-500 cursor-pointer" />
          <TikTokFilled className="hover:text-black cursor-pointer" />
        </div>
      </form>
    </div>
  );
}

export default SignIn;
