import { headers } from 'next/headers';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

import type { AppRouter } from '@repo/trpc/routers';

export const trpcServer = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: process.env.API_URL ?? '',
      headers() {
        const heads = new Map(headers());
        heads.set('x-trpc-source', 'rsc');
        return Object.fromEntries(heads);
      },
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: 'include',
        });
      },
    }),
  ],
});
