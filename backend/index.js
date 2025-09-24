import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import UserRouter from './routers/UserRouters.js';


dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;


app.use('/api/users', UserRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;