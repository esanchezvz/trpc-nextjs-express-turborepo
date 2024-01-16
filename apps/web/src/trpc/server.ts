
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';

import type { AppRouter } from '@repo/trpc/routers';

import { getBaseUrl } from './shared';

export const trpcServer = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/trpc`,
      // headers() {
      //   const heads = new Map(headers());
      //   heads.set('x-trpc-source', 'rsc');
      //   return Object.fromEntries(heads);
      // },
    }),
  ],
});
