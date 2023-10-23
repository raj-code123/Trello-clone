import React, { useContext, useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import storeApi from "../../utils/storeApi";
import "./styles.scss";

export default function InputCard({ setOpen, listId, type }) {
  const { addMoreCard, addMoreList } = useContext(storeApi);
  const [title, setTitle] = useState("");
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBtnConfirm = () => {
    if (type === "card") {
      addMoreCard(title, listId);
    } else {
      addMoreList(title);
    }
    setOpen(false);
    setTitle("");
  };

  return (
    <div className="input-card dark:bg-list-dark dark:text-white">
      <div className="input-card-container">
        <textarea
          onChange={handleOnChange}
          value={title}
          className="input-text dark:bg-gray-700 focus:dark:bg-gray-600 rounded-sm"
          placeholder={
            type === "card"
              ? "Enter a title of this card..."
              : "Enter list title"
          }
          autoFocus
        />
      </div>
      <div className="confirm">
        <Stack direction="row" spacing={2}>
          <Button variant="contained" 
          className="dark:bg-cyan-950 dark:hover:bg-cyan-900"
          onClick={handleBtnConfirm}
          endIcon={<SendIcon />}>
           {type === "card" ? "Add Card" : "Add List"}
          </Button>
          <Button variant="contained"
          className="dark:bg-cyan-950 dark:hover:bg-cyan-900"
            startIcon={<DeleteIcon />}
            onClick={() => {
              setTitle("");
              setOpen(false);
            }}
          >
          Cancel
          </Button>
        </Stack>
      </div>
    </div>
  );
}
