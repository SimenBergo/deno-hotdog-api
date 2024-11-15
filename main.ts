// main.ts
import { Application } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import { corsMiddleware } from "./config/cors.ts";
import hotdogRoutes from "./routes/hotdogRoutes.ts";

const app = new Application();

app.use(corsMiddleware);

app.use(hotdogRoutes.routes());
app.use(hotdogRoutes.allowedMethods());
const port = Deno.env.get("PORT") ? parseInt(Deno.env.get("PORT")!) : 8003;
console.log(`Server running on http://localhost:${port}`);

await app.listen({ port });