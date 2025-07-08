import express from "express";
import productRouter from "./routes/product.routes";

const PORT = process.env.PORT || 9000;

const app = express();
app.use(express.json());

app.use(productRouter);

app.listen(PORT, () => {
  console.log("Listening to: ", PORT);
});
