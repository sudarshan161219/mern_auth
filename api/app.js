import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./connectDb/connectDB.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 3000;
const uri = process.env.MONGOURL;
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(notFound);
app.use(errHandler);

const start = async () => {
  try {
    await connectDB(uri);
    console.log("connected to DB");
    app.listen(port, () =>
      console.log(`Server started on http://localhost:${port}/`)
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
