import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";

const Splash = () => {
  const navigate = useNavigate();
  const logoRef = useRef();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    gsap.fromTo(logoRef.current, { scale: 0 }, { scale: 1, duration: 1 });

    const timer = setTimeout(() => {
      setShowSplash(false);
      navigate("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    showSplash && (
      <div className="flex items-center justify-center h-screen bg-white">
        <img ref={logoRef} src={logo} alt="Qonvoo Logo" className="w-32 h-32" />
      </div>
    )
  );
};

export default Splash;
