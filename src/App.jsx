import { useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const CreateTask = (title, description) => {
    const createdTask = [
      ...tasks,
      {
        title,
        description,
        id: Math.round(Math.random() * 100000),
      },
    ];

    setTasks(createdTask);
  };
  const deleteTaskById = (id) => {
    console.log(id);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };

  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
    console.log(id);
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id,
          title: updatedTitle,
          description: updatedTaskDesc,
        };
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={CreateTask} />
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
