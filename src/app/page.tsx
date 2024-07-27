"use client";

import TodoList from "@/components/TodoList";
import { Typography } from "@mui/material";
import React from "react";

type Todo = {
  id: number;
  title: string;
};

const Home: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" color={"primary.main"}>
        Todo
      </Typography>
      <TodoList />
    </div>
  );
};

export default Home;
