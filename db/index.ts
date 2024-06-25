import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import { config } from "dotenv";

config({ path: ".env" }); // Load environment variables from .env file

if (!process.env.NEON_DATABASE_URL) {
  throw new Error(
    "No database connection string was provided to `neon()`. Perhaps an environment variable has not been set?"
  );
}

const sql = neon(process.env.NEON_DATABASE_URL!);

const db = drizzle(sql);

export default db;
