// controllers/hotdogController.ts
import { RouterContext } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import db from "../db/database.ts";

interface Hotdog {
  id: number;
  name: string;
  price: string;
}

// Handler to add a new hotdog
export const addHotdog = async (
  context: RouterContext<any, any>
) => {
  console.log("Adding a hotdog");
  try {
    const body = await context.request.body({ type: "json" });
    const { name, price } = await body.value;

    if (!name || !price) {
      context.response.status = 400;
      context.response.body = { message: "Invalid request, name and price are required" };
      return;
    }

    db.query("INSERT INTO hotdogs (name, price) VALUES (?, ?)", [name, price]);
    context.response.status = 201;
    context.response.body = { message: "Hotdog added successfully" };
  } catch (error) {
    console.error("Error processing request:", error);
    context.response.status = 400;
    context.response.body = { message: "Invalid JSON payload" };
  }
};

// Handler to fetch all hotdogs
export const getAllHotdogs = (
  context: RouterContext<any, any>
) => {
  console.log("Fetching all hotdogs");
  const hotdogs: Hotdog[] = [];
  for (const [id, name, price] of db.query<[number, string, string]>("SELECT * FROM hotdogs")) {
    hotdogs.push({ id, name, price });
  }
  context.response.body = hotdogs;
};