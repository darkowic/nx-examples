import { skipWaiting, clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';

// @ts-ignore
precacheAndRoute(self.__WB_MANIFEST);

skipWaiting();
clientsClaim();
