import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL as string, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as ConnectOptions);

    console.log(
      `Connected to MongoDB Database ${connection.connection.host}`
    );
  } catch (error) {
    console.log(`Error in MongoDB ${error}`);
  }
};

export default connectDB;