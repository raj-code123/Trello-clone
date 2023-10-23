import React, { useContext, useState } from "react";
import { MoreVert } from "@mui/icons-material";
import storeApi from "../../utils/storeApi";
import "./styles.scss";

export default function Title({ title, listId }) {
  const [open, setOpen] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { updateListTitle, deleteList } = useContext(storeApi);

  const handleOnBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen(!open);
  };

  return (
    <div className="editable-title-container">
      {open ? (
        <div>
          <input
            type="text"
            className="input-title dark:bg-gray-700 focus:dark:bg-gray-600 focus:bg-[#f9fafb] rounded-sm"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
            onBlur={handleOnBlur}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleOnBlur();
              }
            }}
            autoFocus
          />
        </div>
      ) : (
        <>
          <h2
            onClick={() => setOpen(!open)}
            className="editable-title"
          >
            {title}
          </h2>
          <button
            className="list-button hover:bg-neutral-300 dark:hover:bg-cyan-900 rounded-full"
            onClick={() => setOpenOptions(!openOptions)}
          >
            <MoreVert />
          </button>
          {openOptions && (
            <ul className="menu-card dark:text-white overflow-hidden bg-slate-200">
              <li
                onClick={() => {
                  setOpenOptions(!openOptions);
                  deleteList(listId);
                }}
                className="dark:hover:bg-cyan-900 dark:bg-cyan-950 transition  hover:bg-list-blue hover:text-white dark:text-white "
              >
                Delete list
              </li>
              <li
                onClick={() => {
                  setOpenOptions(!openOptions);
                  setOpen(!open);
                }}
                className="dark:hover:bg-cyan-900 dark:bg-cyan-950 transition hover:bg-list-blue hover:text-white dark:text-white "
              >
                Edit card title
              </li>
            </ul>
          )}
        </>
      )}
    </div>
  );
}
