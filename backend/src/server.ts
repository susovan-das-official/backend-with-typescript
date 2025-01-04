import app from "./app.js";
import dotenv from "dotenv";
import { connectionDB } from "./config/db.js";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT;

connectionDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Server Error: ${error.message}`);
  });
