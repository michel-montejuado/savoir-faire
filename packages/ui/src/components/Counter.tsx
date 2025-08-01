"use client";

import { useState } from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <Card variant="outlined" sx={{ maxWidth: "fit-content", margin: "auto", p: 1 }}>
      <CardContent sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Button variant="contained" onClick={decrement}>-</Button>
        <Typography variant="h6">{count}</Typography>
        <Button variant="contained" onClick={increment}>+</Button>
      </CardContent>
    </Card>
  );
}