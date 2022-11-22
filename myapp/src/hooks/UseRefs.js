import React, { useEffect, useRef, useState } from "react";

// returns an object with a special property called ' current '.
// const ref = useRef(0)

// updating the reference value doesnt cause a re-render of the component.
// the reference value is persisted between renders.

const UseRefs = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'red'
  }, []);
  return (
    <>
      <div className="flex justify-center items-center mt-4 flex-col gap-3">
        <input
          placeholder="type something.."
          type="text"
          ref={inputRef}
          className="bg-slate-200 rounded-md shadow-lg w-52 h-10 text-center"
        />
        <div className="">
          <h2>Type Something</h2>
        </div>
      </div>
    </>
  );
};

export default UseRefs;
