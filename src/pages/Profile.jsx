import React, { useContext, useEffect } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";
import {  useNavigate } from "react-router-dom";

const Profile = () => {
  const negvigate= useNavigate()
  const { isAuthenticated, loading, user } = useContext(Context);
useEffect(() => {
  if (!isAuthenticated) {
    return negvigate("/login");}
}, [isAuthenticated]);
  return loading ? (
    <Loader />
  ) : (
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
  );
};

export default Profile;
