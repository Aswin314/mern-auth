import express from 'express';
import { signup } from '../controllers/AuthControllers.js';

const AuthRouter = express.Router();

// Example route
AuthRouter.post('/signup', signup);

export default AuthRouter;