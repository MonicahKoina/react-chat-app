import React from "react";
import pic from "../assets/getstarted.gif";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function GetStarted() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <figure className="flex items-center justify-center">
        <img
          src={pic}
          alt="getstarted"
          className="rounded-full w-80 h-80 object-cover mx-auto"
        />
      </figure>

      <section className="flex flex-col justify-between gap-4 text-center mt-6">
        <h3 className="text-2xl font-semibold text-gray-800">
          Welcome to Qonvoo
        </h3>
        <p className="text-gray-600">
          Unleash Seamless Conversations with Qonvoo!
        </p>
        <Button
          type="primary"
          className="bg-blue-500 text-white px-6 py-2 rounded-md"
          onClick={() => navigate("/register")}
        >
          Get Started
        </Button>
      </section>
    </div>
  );
}

export default GetStarted;
