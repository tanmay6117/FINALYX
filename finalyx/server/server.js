require("dns").setServers(["8.8.8.8", "1.1.1.1"]);
const dotenv = require("dotenv");
console.log("Current Folder =", process.cwd());
dotenv.config();
console.log("PORT =", process.env.PORT);
console.log("MONGO_URI =", process.env.MONGO_URI);
const express = require("express");//import express package
const cors = require("cors");
const app = express();

const connectDB = require("./config/db");
//connect to database
connectDB();
const projectRoutes = require("./routes/projectRoutes");

app.use(cors());
app.use(express.json());
app.use("/api/projects",projectRoutes);
app.get("/",(req,res)=>{
    res.send("Welcome to Finalyx API ");
});

const PORT = process.env.PORT || 5000;
 app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
 });