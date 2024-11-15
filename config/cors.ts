// config/cors.ts
import { oakCors } from "https://deno.land/x/cors/mod.ts";

export const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true,
};

export const corsMiddleware = oakCors(corsOptions);