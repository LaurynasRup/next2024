import mongoose from 'mongoose';

let connected = false;

const connectDb = async () => {
  mongoose.set('strictQuery', true);

  // if db is already connected, dont connect
  if (connected) {
    console.log('Mongo db is already connected');
    return;
  }

  // connect to Mongo DB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
