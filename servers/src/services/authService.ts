import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail } from '../repository/userRepository';
import User, { IUser } from '../models/signup';

export const signup = async (username: string, email: string, password: string) => {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
        throw new Error('Email already in use');
    }
    const user = await createUser(username, email, password);
    return generateToken(user);
};

export const login = async (email: string, password: string) => {
    const user = await findUserByEmail(email);
    if (!user) {
        throw new Error('Invalid email or password');
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        throw new Error('Invalid email or password');
    }
    return generateToken(user);
};

const generateToken = (user: IUser) => {
    return jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET as string,
        { expiresIn: '1h' }
    );
};