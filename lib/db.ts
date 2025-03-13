import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in the environment variables");
}

const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }

  if (connectionState === 2) {
    console.log("Connecting...");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "next14restapi",
      bufferCommands: true,
    });
    console.log("Connected");
  } catch (err) {
    console.error("Error: ", err);
    throw new Error("Error: " + err);
  }
};

export default connect;
