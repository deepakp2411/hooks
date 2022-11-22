import React, { useState } from "react";

const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name && email) {
        const person = {name,email}
        setPeople((people) => {
            return [...people,person]
        })
    }else{
        setName('')
        setEmail('')
    }
  };
  return (
    <>
      <div className="flex bg-sky-300 min-h-screen">
        <form onSubmit={handleSubmit} className='items-center justify-center flex flex-col px-4 space-x-4 m-2'>
          <div className="">
            <label>Name: </label>
            <input
              type="text"
              placeholder="Enter name..."
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="rounded-sm w-40 ml-1"
            />
          </div>
          <div className="mt-3">
            <label>Email: </label>
            <input
              type="text"
              placeholder="Enter email..."
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-40 rounded-sm"
            />
          </div>
          <button type="submit" className="bg-slate-500 hover:bg-slate-400 transition-all ease-linear duration-200 rounded-md shadow-2xl py-2 w-28 mt-4">Submit</button>
        </form>
        <div>
           {
            people.map((per,index) => {
                const {id, name, email} = per;
                return <div key={index}>
                    <h2>{name}</h2>
                    <h4>{email}</h4>
                </div>
            })
           }
        </div>
      </div>
    </>
  );
};

export default Forms;
