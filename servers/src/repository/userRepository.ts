import User, { IUser } from '../models/signup';

export const createUser = async (username: string, email: string, password: string): Promise<IUser> => {
    const user = new User({ username, email, password });
    await user.save();
    return user;
};

export const findUserByEmail = async (email: string): Promise<IUser | null> => {
    return User.findOne({ email });
};