import express from "express";
const app = express();

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log("server running on 5500"));
