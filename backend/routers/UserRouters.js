import express from 'express';
import { homeUser } from '../controllers/UserController.js';



const UserRouter = express.Router();

// Example route
UserRouter.get('/', homeUser);

export default UserRouter;
