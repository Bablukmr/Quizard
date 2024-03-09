import React, { useState } from "react";
import Header from "./header";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

function Dashboard() {
  const [boxes, setBoxes] = useState([]);

  const handleAddBox = () => {
    setBoxes([...boxes, { id: boxes.length }]);
  };

  const handleDeleteBox = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id));
  };

  return (
    <div className="m-0 p-0">
      <div>
        <Header />
      </div>

      <div className="w-[100vw] mt-[5px] h-[calc(100vh-70px)] flex items-center justify-center">
        <div className="w-[15%] h-full flex items-start flex-col overflow-y-auto border-r-2 gap-4 px-5 pt-4">
          {boxes.map((box, index) => (
            <div
              key={box.id}
              className="border-2 border-gray-400 text-gray-400 text-2xl  w-full min-h-[120px] hover:cursor-pointer flex items-center justify-center rounded-lg pt-2 relative"
            >
              <span className="absolute top-0 left-0 ml-2 mt-2 text-xs text-gray-500">
                Question {index + 1}
              </span>
              <button
                className="absolute top-0 right-0 mr-2 mt-2 text-gray-500 hover:text-red-500"
                onClick={() => handleDeleteBox(box.id)}
              >
                <DeleteIcon />
              </button>
            </div>
          ))}

          <div
            className="border-2 border-gray-400 text-gray-400 text-2xl  w-full min-h-[120px] hover:cursor-pointer flex items-center justify-center rounded-lg py-2"
            onClick={handleAddBox}
          >
            <AddIcon />
          </div>
        </div>
        <div className="w-[85%] h-full flex items-center justify-center"></div>
      </div>
    </div>
  );
}

export default Dashboard;
