import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import {AppRouter} from '../../../api/src/trpc/router'

export const trpc = createTRPCProxyClient<AppRouter>({
    links: [httpBatchLink({url:'http://10.0.2.2:5000/trpc'})]
})
