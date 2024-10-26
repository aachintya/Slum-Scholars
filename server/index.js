import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import homeRoutes from "./routes/home.js";
import volunteerRoutes from "./routes/volunteer.js"; 

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());

connectDB();
app.use(morgan("combined"));
app.use(cors());
app.use("/api/v1/home", homeRoutes);
app.use('/api/volunteer', volunteerRoutes);


const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'your-32-byte-secure-key-here';

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
