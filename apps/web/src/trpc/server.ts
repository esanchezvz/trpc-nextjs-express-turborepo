
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

import type { AppRouter } from '@repo/trpc/routers';

import { getBaseUrl } from './shared';
import { headers } from 'next/headers';

export const trpcServer = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/trpc`,
      headers() {
        const heads = new Map(headers());
        heads.set('x-trpc-source', 'rsc');
        heads.delete("Transfer-Encoding")
        return Object.fromEntries(heads);
      },
    }),
  ],
});
