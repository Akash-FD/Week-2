// import React from 'react'

import { useEffect, useState } from "react";

const SighUp = () => {
  useEffect(() => {
    localStorage.getItem("userDetails");
  }, []);

  interface userDetails {
    username: string;
    email: string;
    password: string;
  }
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpassword, setCpassword] = useState<string>("");
  const [details, setDetails] = useState<userDetails[] | []>([]);

  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let userdetails = { username, email, password };
    setDetails([...details, userdetails]);

    useEffect(() => {
      localStorage.setItem("userDetails", JSON.stringify(details));
    }, [details]);

    setUsername("");
    setEmail("");
    setPassword("");
    setCpassword("");
  };
  console.log(details);

  return (
    <>
      <div className="w-[500px] m-auto mt-28 ">
        <form action="" onSubmit={HandleSubmit} className="flex flex-col p-2">
          <input
            type="text"
            placeholder="enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-2 p-2"
          />
          <input
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 p-2 my-3"
          />
          <input
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 p-2"
          />
          <input
            type="password"
            placeholder="confirm password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            className="border-2 p-2 my-3"
          />
          <button
            type="submit"
            className="w-[100%] bg-green-600 py-2 rounded-md text-white"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="w-[500px] m-auto">
        <table className="border-2 w-[100%]">
          <thead>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </thead>
          <tbody>
            {details.map((item, index) => {
              return (
                <tr key={index} className="border-2">
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SighUp;
