import { initTRPC } from '@trpc/server';


const db = {}

const createInnerTRPCContext = (): {
  db: typeof db
} => {
  return {
    db,
  };
};

export const createTRPCContext = () => {
  return createInnerTRPCContext();
};

const t = initTRPC.context<typeof createTRPCContext>().create();

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;

