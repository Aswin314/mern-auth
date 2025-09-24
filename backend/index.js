import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import UserRouter from './routers/UserRouters.js';
import AuthRouter from './routers/authRouter.js';


dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;


app.use('/api/users', UserRouter);
app.use('/api/auth', AuthRouter);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;