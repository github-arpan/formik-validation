import React, { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const UserProfile = () => {
  const { userData } = useContext(UserContext);

  return (
    <div>
      {userData ? (
        <div>
          <h2>User Profile</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>No user signed up</p>
      )}
    </div>
  );
};

export default UserProfile;
