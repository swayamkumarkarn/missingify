import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import logo from "./logo.png";
import {AuthContext} from "../../store/FirebaseContext";
import Loader from "../../shared/loader";
const Navigation = () => {
  const { user, setUser } = useContext(AuthContext);
  return (<>
    {user.loader && (<Loader />)}
    <div className="navigation">
      <div className="left">
        <img src={logo} className="logo-img" alt="missingify" />
      </div>
      <div className="title">
        <span>Missingify</span>
      </div>
      <div className="right">
        {user.isLogged? (user.userName
          
        ):(<>
            <Link to="/login">Login</Link>
            <Link to="/signup">Register</Link>
          </>)
        }
      </div>
    </div>
  </>
  );
};

export default Navigation;
