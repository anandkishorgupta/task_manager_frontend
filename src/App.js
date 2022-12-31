import React from "react";
import { Box } from "@mui/material";
import TaskList from "./components/TaskList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";

const App = () => {
  return (
    <Box>
      <Box>
        <TaskList />
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default App;
