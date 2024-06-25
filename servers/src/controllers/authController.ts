import { Request, Response } from 'express';
import { signup } from '../services/authService';

export const signupController = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    try {
        const token = await signup(username, email, password);
        res.status(201).json({ token });
    } catch (error) {
        res.status(400).json({ message: error});
    }
};