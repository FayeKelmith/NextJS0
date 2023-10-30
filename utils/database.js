import mongoose from "mongoose";

const isConnected = false; //track the connection status

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already running");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "SharePrompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
};
