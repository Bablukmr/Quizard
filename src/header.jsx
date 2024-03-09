import SaveIcon from "@mui/icons-material/Save";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import React from "react";

function Header() {
  return (
    <div>
      <div className="flex h-[70px] justify-between px-5 py-3 border-b-2">
        <div>
          <h1 className="text-gray-600 text-2xl font-bold">Quizard</h1>
        </div>
        <div className="flex items-center justify-center gap-x-3">
          <button className="px-5 py-[6px] bg-slate-200 rounded-md">
            <ArrowLeftIcon />
            Preview
          </button>
          <button className="px-5 py-[6px] flex items-center justify-center gap-1 bg-blue-800 text-white rounded-md hover:shadow-lg">
            <p className=" text-sm">
              <SaveIcon style={{ fontSize: 18 }} />
            </p>
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
