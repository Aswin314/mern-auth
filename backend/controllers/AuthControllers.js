import User from "../model/Usermodel.js";

export const signup = (req, res) => {
    const { username, email, password } = req.body;
    const NewUser = new User({ username, email, password })
    NewUser.save()
        .then(() => {
            res.status(201).json({ message: 'User registered successfully' });
        })
        .catch((error) => {
            res.status(500).json({ error: 'Error registering user', error });
        });
};