/*import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

  const connect = async () => {
    const connectionState = mongoose.connection.readyState;

    if (connectionState === 1 ) {
        console.log("already Conencted to DB");
      return;
    }

    if (connectionState === 2) {
        console.log("Connecting....");
      return;
    }

    try {
        mongoose.connect(MONGODB_URI!, {
            dbName: "animatch",
            bufferCommands:true,})
        }
    catch (error :any) {
        console.log(error);
        throw new Error("Error connecting to DB");

    }
  }

 export default connect; */


 import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

interface MongooseConn {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConn = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connect = async () => {
  if (cached.conn) return cached.conn;

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "animatch",
      bufferCommands: false,
      connectTimeoutMS: 30000,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};