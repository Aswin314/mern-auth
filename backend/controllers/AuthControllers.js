import { errorHandler } from "../errorhandler.js";
import User from "../model/Usermodel.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashpassword = bcryptjs.hashSync(password, 10);
    try {
        const NewUser = new User({ username, email, password: hashpassword })
        await NewUser.save()
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        next(errorHandler(500, error.message));
    }
};  