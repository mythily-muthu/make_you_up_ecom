import React from "react";
import UserTable from "../components/UserTable";

const Users = () => {
  const users = [
    { id: 1, name: "Mythu", email: "mythu@gmail.com" },
    { id: 2, name: "Muthu", email: "muthu@gmail.com" },
    { id: 3, name: "Gowtham", email: "gowtham@gmail.com" },
  ];

  return (
    <div className="flex w-full h-screen bg-green-200 p-5">
      <div className="flex flex-col  w-full">
        <h1>User List</h1>
        <UserTable users={users} />
      </div>
    </div>
  );
};
export default Users;
