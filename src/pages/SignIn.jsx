import React from "react";
import { GoogleCircleFilled, TikTokFilled } from "@ant-design/icons";
import { Button, Input } from "antd";

function SignIn() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50">
      <form className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Welcome Back
        </h2>

        <div className="flex flex-col gap-4">
          <label className="text-sm font-medium" htmlFor="email">
            Email
          </label>
          <Input size="large" type="email" placeholder="you@example.com" />

          <label className="text-sm font-medium" htmlFor="password">
            Password
          </label>
          <Input.Password size="large" placeholder="Enter your password" />
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
