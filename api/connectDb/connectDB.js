import mongoose from "mongoose";
const { set, connect } = mongoose;

const connectDB = (uri) => {
  set("strictQuery", true);
  return connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

export default connectDB;
