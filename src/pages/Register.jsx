import React, { useState } from "react";
import { Button, Input, Spin, message } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [api, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      api.error("Passwords do not match!");
      setLoading(false);
      return;
    }
    const loadingMessage = api.loading("Creating your account...", 0);

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User credentials", userCredentials.user);

      loadingMessage();
      api.success("Account successfully created! Redirecting to login...");

      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } catch (err) {
      console.log("Registration error", err);
      loadingMessage();
      api.error(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {contextHolder}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className="mt-4">
              <Button type="primary" block htmlType="submit" disabled={loading}>
                {loading ? <Spin /> : "Sign Up"}
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
              By continuing, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
