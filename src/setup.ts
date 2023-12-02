// Packages
import { Popkat } from "./core/client";
import sql from "./core/db";

// Create Discord Client
const client = new Popkat();
client.logger.info("Database", sql);

// Login to Discord
client.start();
