import React, { useState } from "react";
import { data } from "../utils/data";

const UseState = () => {
  const [user, setUser] = useState(data);

  const removeItem = (id) => {
    const filterItem = user.filter((person) => person.id !== id);
    setUser(filterItem);
  };

  return (
    <>
      {user.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className="flex flex-col gap-4 bg-slate-400 h-56">
            <h1>{name}</h1>
            <button
              onClick={() => removeItem(id)}
              className="bg-sky-400 shadow-2xl rounded-md w-28"
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        onClick={() => setUser([])}
        className="text-2xl rounded-lg shadow-lg bg-green-500 w-32 mt-7 text-white hover:bg-green-900 transition-all ease-linear "
      >
        Clear
      </button>
    </>
  );
};

export default UseState;
