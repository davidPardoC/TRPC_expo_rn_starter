import express from "express";
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from "./trpc/router";

const app = express();
const PORT = process.env.PORT || 5000;

const createContext = ({req, res}: trpcExpress.CreateExpressContextOptions) => ({})

app.use("/status", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/trpc", trpcExpress.createExpressMiddleware({router: appRouter, createContext }))

app.listen(PORT, () => {
  console.log(`✅ Server started un http://localhost:${PORT}`);
});
