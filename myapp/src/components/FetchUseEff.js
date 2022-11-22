import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "https://api.github.com/users";

const FetchUseEff = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(url);
      setUsers(response.data);
      // const user = await response.json()
      // return user.data
      // console.log(response.data)
    };
    getUsers();
  }, []);

  const removeId = (id) => {
    const filterId = users.filter((user) => user.id !== id);
    setUsers(filterId);
  };

  return (
    <>
      <h1>Github Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4">
        {users?.map((people) => {
          const { id, avatar_url, followers_url, login } = people;
          return (
            <div
              key={id}
              className="shadow-2xl p-5 bg-slate-400 flex flex-col justify-around items-center"
            >
              <img
                src={avatar_url}
                alt="name"
                className="w-[100px] h-[100px] rounded-full shadow-2xl "
              />
              <h3 className="text-black font-bold text-xs">{followers_url}</h3>
              <h1 className="text-red-500 font-medium">{login}</h1>
              <button
                onClick={() => removeId(id)}
                className="text-2xl bg-sky-600 hover:bg-sky-400 transition-all ease-linear w-28 shadow-2xl "
              >
                Remove
              </button>
            </div>
          );
        })}
        <button
          onClick={() => setUsers([])}
          className="w-32 bg-gray-500 shadow-2xl rounded-md transition-all ease-in-out hover:bg-gray-700"
        >
          Delete All
        </button>
      </div>
    </>
  );
};

export default FetchUseEff;
