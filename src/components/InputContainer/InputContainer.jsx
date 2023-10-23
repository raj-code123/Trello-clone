import React, { useState } from "react";
import Collapse from '@mui/material/Collapse';
import InputCard from "../InputCard/InputCard";
import Button from '@mui/material/Button';

import "./styles.scss";

export default function InputContainer({ listId, type }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="input-container">
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <div className="input-conten px-4 py-4 ">
          <Button className="text-black dark:hover:bg-cyan-900 dark:bg-cyan-950 dark:text-white" onClick={() => setOpen(!open)} variant="contained">
            {type === "card" ? "Add Card" : "Add List"}
          </Button>
        </div>
      </Collapse>
    </div>
  );
}
