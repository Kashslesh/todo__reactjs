import React from "react";
import RemoveImg from "./RemoveImg";

const List = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <div key={item.id} className="flex justify-center">
          <div className=" relative justify-center mt-6">
            <div className="absolute flex top-0 right-0 p-3 space-x-1">
              <RemoveImg
                key={item.id}
                id={item.id}
                onDelete={props.onDeleteItem}
              />
            </div>
            <div>
              <span
                key={item.id}
                className="absolute -left-3 -top-3 bg-green-500 flex justify-center items-center rounded-full w-8 h-8 text-gray-50 font-bold"
              ></span>
              <p className="bg-white px-12 py-8 rounded-lg w-80">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default List;
