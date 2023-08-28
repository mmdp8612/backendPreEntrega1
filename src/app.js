import express from "express";
import { config } from "dotenv";
import routerProducts from "./routes/products.routes.js";
import routerCart from "./routes/cart.routes.js";

config();

const app = express();

app.use(express.json());
app.use("/api/products", routerProducts);
app.use("/api/cart", routerCart);

app.listen(process.env.PORT, () => {
    console.log(`Server on port ${process.env.PORT}...`);
});