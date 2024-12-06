import React, { useState, useEffect } from "react";
import { addTask, getTasks, updateTask, deleteTask } from "../Services/AllApi";
import { toast } from "react-toastify";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewTask] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!!");
    }
  };

  const handleAdd = async () => {
    if (!newtask.trim()) {
      toast.warning("Enter The Task!!");
    } else {
      const newTaskObj = { task: newtask, status: false };

      setTasks([...tasks, newTaskObj]);

      setNewTask("");

      try {
        const res = await addTask(newTaskObj);
        if (res.status == 200 || res.status == 201) {
          // setTasks([...tasks, res.data]);
          // setNewTask("");
          toast.success("Task Added Successfully!!");
        } else {
          toast.error("Task Adding Failed!!");
        }
      } catch (err) {
        console.log(err);
        toast.error("Something Went Wrong!!");
      }
    }
  };

  const handleUpdate = async (id, current) => {
    try {
      const res = await updateTask(id, !current);
      if (res.status == 200 || res.status == 201) {
        const updatedTasks = tasks.map((task) =>
          task._id === id ? { ...task, status: !current } : task
        );
        setTasks(updatedTasks);
        toast.success("Task Status Updated!!");
      } else {
        toast.error("Task Status Update Failed!!");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong!!");
    }
  };

  const handleDelete = async (id) => {
    const filteredTasks = tasks.filter((task) => task._id !== id);
    setTasks(filteredTasks);
    try {
      await deleteTask(id);
      toast.success("Task Deleted Successfully!!");
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong!!");
    }
  };

  return (
    <>
      <div className="container-fluid mt-4 p-4" style={{ height: "90vh" }}>
        <div className="d-flex flex-column">
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Enter task"
            className="form-control mb-3"
            value={newtask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="btn btn-dark"
            onClick={handleAdd}
            style={{ maxWidth: "150px" }}
          >
            Add Task
          </button>

          <div className="mt-4">
            <h4>Task List</h4>
            <ul className="list-group">
              {tasks.length === 0 ? (
                <li className="list-group-item">No tasks available</li>
              ) : (
                tasks.map((item) => (
                  <li
                    key={item._id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <span
                      style={{
                        textDecoration: item.status ? "line-through" : "none",
                      }}
                    >
                      {item?.task}
                    </span>
                    <button
                      className="btn btn-warning btn-sm mx-2"
                      onClick={() => handleUpdate(item._id, item.status)}
                    >
                      {item.status ? "Completed" : "Not Completed"}
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
