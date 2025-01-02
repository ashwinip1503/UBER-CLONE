import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Userlogin from "./pages/UserLogin";
import Usersignup from "./pages/UserSignup";
import Captainlogin from "./pages/Captainlogin";
import Captainsignup from "./pages/CaptainSignup";
import { UserDataContext } from "./context/UserContext";

const App = () => {
  
  const ans = useContext(UserDataContext);
  console.log(ans)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Userlogin />} />
        <Route path="/signup" element={<Usersignup />} />
        <Route path="/captainlogin" element={<Captainlogin />} />
        <Route path="/captainsignup" element={<Captainsignup />} />
      </Routes>
    </div>
  );
};

export default App;
