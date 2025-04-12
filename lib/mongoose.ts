// lib/db.ts
import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/projectdb";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Extend the NodeJS global object type for mongoose caching
declare global {
  // Avoid re-declaration errors in development
  // eslint-disable-next-line no-var
  var mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

// Setup the global cache
let cached = global.mongooseCache;

if (!cached) {
  cached = global.mongooseCache = {
    conn: null,
    promise: null,
  };
}

async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
