import cors from 'cors';
import express from 'express';
import type { Express } from 'express';
import morgan from 'morgan';

import { createTRPCContext } from '@repo/trpc';
import { createExpressMiddleware } from '@repo/trpc/express';
import { appRouter } from '@repo/trpc/routers';


const allowedOrigins = ['http://localhost:3000'];

export const createServer = (): Express => {
  const app = express();

  app
    .disable('x-powered-by')
    .use(morgan('dev'))
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(
      cors({
        origin: allowedOrigins,
        credentials: true,
      }),
    );

  app.get('/healthz', (_, res) => {
    return res.json({ ok: true });
  });

  app.use(
    '/trpc',
    createExpressMiddleware({
      router: appRouter,
      createContext: createTRPCContext,
    }),
  );

  return app;
};
