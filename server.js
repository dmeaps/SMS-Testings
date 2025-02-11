import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import smsRoutes from "./routes/smsRoutes.js";
import macRoutes from "./routes/macRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api", smsRoutes);
app.use("/api",macRoutes);;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
