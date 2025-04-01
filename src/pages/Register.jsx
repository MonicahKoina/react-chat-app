import React, { useState } from "react";
import { Button, Input } from "antd";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  GoogleOutlined,
} from "@ant-design/icons";

function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <form className="w-full max-w-sm bg-white p-6 shadow-md rounded-lg">
        <div className="flex flex-col space-y-4">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            placeholder="name@email.com"
            className="border border-gray-300 p-2 rounded-md"
          />

          <label htmlFor="password">Password</label>
          <div className="relative">
            <Input
              type={passwordVisible ? "text" : "password"}
              id="password"
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

          <Button type="primary" block>
            Sign Up
          </Button>

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
