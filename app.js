import express from "express";
import { configDotenv } from "dotenv";
import userRouter from "./routes/userRoutes.js";
import connectDb from "./config/connectDb.js";

configDotenv();

const app = express();
const port = 4000 || process.env.PORT;

// Connect to the database
connectDb(process.env.MONGO_URI);

// Routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
