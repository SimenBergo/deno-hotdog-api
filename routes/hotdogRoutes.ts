// routes/hotdogRoutes.ts
import { Router } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import { addHotdog, getAllHotdogs } from "../controllers/hotdogController.ts";

const router = new Router();

router
  .post("/add", addHotdog)
  .get("/hotdogs", getAllHotdogs);

export default router;