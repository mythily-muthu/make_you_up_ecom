import axios from "axios";
import React, { useEffect, useState } from "react";

const UserTable = ({ users }) => {
  const [loading, setLoading] = useState(true);
  const [userDatas, setUserDatas] = useState([]);
  const headers = [
    {
      title: "id",
    },
    {
      title: "Name",
    },
    {
      title: "Email",
    },

    {
      title: "PhoneNO",
    },
    {
      title: "City",
    },
    {
      title: "Website",
    },
  ];
  console.log(userDatas);
  const getUsers = async () => {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
      setUserDatas(res.data);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    // <table>
    //   <thead>
    //     <tr>
    //       <th>ID</th>
    //       <th>Name</th>
    //       <th>Email</th>
    //       <th>Address</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {users.map((user) => (
    //       <tr key={user.id}>
    //         <td>{user.id}</td>
    //         <td>{user.name}</td>
    //         <td>{user.email}</td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
    <div className="w-full flex flex-col">
      {/* header */}
      <div className="bg-lime-700 grid grid-cols-12 h-10 items-center px-4 text-white ">
        <p className="col-span-1">ID</p>
        <p className="col-span-2">NAME</p>
        <p className="col-span-3">EMAIL</p>
        <p className="col-span-2">PHONE</p>
        <p className="col-span-2">CITY</p>
        <p className="col-span-2">WEBSITE</p>

        {/* {headers.map((header) => {
          return <p className="col-span-2">{header.title}</p>;
        })} */}
      </div>
      {/* datas */}

      <></>
      {userDatas.map((user) => {
        return (
          <div
            className="bg-lime-200 text-black odd:text-white odd:bg-lime-500 grid grid-cols-12 h-10 items-center px-4  "
            key={user.id}
          >
            <p className="col-span-1">{user.id}</p>
            <p className="col-span-2">{user.name}</p>
            <p className="col-span-3">{user.email}</p>
            <p className="col-span-2">{user.phone}</p>
            <p className="col-span-2">{user.address.city}</p>
            <p className="col-span-2">{user.website}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserTable;
