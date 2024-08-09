import express from 'express'
import { loginUser, registerUser } from '../controllers/userController.js';

const userRouter = express.Router();

// Register
userRouter.post("/register", registerUser);

// Login
userRouter.post("/login", loginUser)

export default userRouter;