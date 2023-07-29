import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";
import { notFound, errHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 3000;

const app = express();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(notFound);
app.use(errHandler);

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server started on http://localhost:${port}/`)
    );
  } catch (err) {
    console.log(err);
  }
};

start();
