import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'portfolio-yasuda',
  apiKey: process.env.API_KEY,
});
