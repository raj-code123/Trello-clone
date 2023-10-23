import React, { useContext, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Draggable } from "react-beautiful-dnd";
import storeApi from "../../utils/storeApi";
import "./styles.scss";

export default function Card({ card, index, listId }) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(card.title);
  const { removeCard, updateCardTitle } = useContext(storeApi);
  const handleOnBlur = (cardId) => {
    updateCardTitle(newTitle, index, listId);
    setOpen(!open);
  };

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <div className="card-content bg-gray-50 dark:bg-gray-700">
            {open ? (
              <TextareaAutosize
                type="text"
                className="input-card-title focus:dark:bg-gray-600 "
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                onBlur={handleOnBlur}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleOnBlur(card.id);
                  }
                  return;
                }}
                autoFocus
              />
            ) : (
              <div
                onClick={() => setOpen(!open)}
                className="card-title-container hover:dark:bg-gray-600 "
              >
                <p>{card.title}</p>
                <button
                  onClick={() => {
                    removeCard(index, listId, card.id);
                  }}
                >
                  <DeleteOutlineIcon />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
}
