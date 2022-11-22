import axios from "axios";
import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const ConditionalEffect = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("Default user");
  const [text, setText] = useState("");

  //   useEffect(() => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((user) => {
  //         const { login } = user;
  //         setUser(login)
  //         setIsLoading(false)
  //       })
  //       .catch((error) => console.log(error));
  //   }, []);

  //   if (isLoading) {
  //     return (
  //       <div>
  //         <h1>Loading...</h1>
  //       </div>
  //     );
  //   }

  //   if (isError) {
  //     return (
  //       <div>
  //         <h1>Error...</h1>
  //       </div>
  //     );
  //   }

  return (
    <>
      <div className="flex flex-col">
        <h>{text || "jhon doe"}</h>
        <button
          onClick={() => setIsError(!isError)}
          className="w-32 h-8 bg-sky-400 rounded-md text-slate-400 uppercase text-sm hover:bg-sky-600 transition-all ease-in-out duration-500 shadow-2xl focus:ring-2"
        >
          Toggle
        </button>
        {isError && <h1>Error....</h1>}
      </div>
    </>
  );
};

export default ConditionalEffect;
