import React, { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const UserProfile = () => {
  const { users } = useContext(UserContext);
  console.log(users);
  return (
    <div>
      {users.length !== 0 ? (
        <div>
          <h2>User Profile</h2>
          <p>Name: {users[1].name}</p>
          <p>Email: {users[1].email}</p>
        </div>
      ) : (
        <p>No user signed up</p>
      )}
    </div>
  );
};

export default UserProfile;
