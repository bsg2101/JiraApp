import React, { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete , onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id,updatedTitle,updatedTaskDesc) => {
    setShowEdit(false);
    onUpdate(id,updatedTitle,updatedTaskDesc)
  };

  console.log(task);
  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <div className="task-main">
            <p className="task-main-p">{task.title}</p>
          </div>
          <h3 className="task-title">Yapılacaklar</h3>
          <div className="task-main">
            <p className="task-main-p">{task.description}</p>
          </div>
          <div className="all-btn">
            <button className="btn-danger" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="btn-edit" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default TaskShow;
