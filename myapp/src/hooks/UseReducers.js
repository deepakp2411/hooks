import React, { useReducer, useState } from "react";
import Modal from "../components/Modal";
import { data } from "../utils/data";

const reducer = (state,action) => {
    if(action.type === 'TESTING') {
        return {
            ...state,
            people:data,
            isModalOpen:true,
            modalContent:'item added'
        }
    }
    return state;

}

const defaulState = {
    people:[],
    isModalOpen:false,
    modalContent:'',
}

const UseReducers = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer,defaulState)
//   const [people, setPeople] = useState(data);
//   const [showModal, setModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
        dispatch({type:'TESTING'})
      
    } else {
      
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="grid place-content-center">
        <div className="py-5">
          <input
            type="text"
            placeholder="enter text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="name"
            className="bg-slate-300 w-52 h-8 rounded-lg text-center"
          />
        </div>
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-700 transition-all duration-500 rounded-xl h-8 w-28"
        >
          Add
        </button>
      </form>
      {state.people.map((person) => {
        return (
          <div
            key={person.id}
            className="grid place-content-center mt-4 bg-gray-300 w-full h-12 rounded-md shadow-2xl"
          >
            <h4 className="font-bold text-xl">{person.name}</h4>
            <button></button>
          </div>
        );
      })}
    </>
  );
};

export default UseReducers;
