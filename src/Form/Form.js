import React from "react";
import { useState } from "react";
import Button from "./Button";

const Form = (props) => {
  const [dataArrive, setdataArrive] = useState("");
  const inputdata = (event) => {
    setdataArrive(event.target.value);
  };
  const sibmitHandler = (event) => {
    event.preventDefault();
    if (dataArrive.trim().length === 0) {
      alert("Ajoutez un but");
      return;
    }
    props.onAddBut(dataArrive);
    setdataArrive("");
  };
  return (
    <form onSubmit={sibmitHandler} className="flex justify-center mt-10">
      <div className="bg-gray-50 p-8 rounded-lg">
        <h1 className="text-center mb-4">Ecrivez le list</h1>
        <div className="flex space-x-2 p-2 bg-white rounded-md">
          <input
            value={dataArrive}
            onChange={inputdata}
            type="text"
            placeholder="Ajoutez un but"
            className="w-full outline-none"
          />
          <Button />
        </div>
      </div>
    </form>
  );
};
export default Form;
