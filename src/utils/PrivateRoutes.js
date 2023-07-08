import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const PrivateRoutes = () => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokenValidity = async () => {
      const token = localStorage.getItem("tkn");
      const isAuthenticated = token !== null && token !== "";

      if (!isAuthenticated) {
        sessionStorage.removeItem("userData");
        setAuth(false);

        return navigate("/auth");
      }

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DEV_DOMAIN}/auth/me`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setAuth(true);
        } else {
          localStorage.removeItem("tkn");
          setAuth(false);
          return navigate("/auth");
        }
      } catch (error) {
        localStorage.removeItem("tkn");
        setAuth(false);
        return navigate("/auth");
      }
    };

    checkTokenValidity();
  }, [auth]);

  if (auth) {
    return <Outlet />;
  } else {
    <Navigate to="/auth" />;
  }
};

export default PrivateRoutes;
