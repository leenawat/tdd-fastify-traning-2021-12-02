import { join } from 'path';
import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload';
import fastify from 'fastify';

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

const app = fastify({
  logger: {
    level: "info"
  },
  ajv: {
    customOptions: {
      allErrors: true
    },
  },
  disableRequestLogging: true,
})

app.register(AutoLoad, {
  dir: join(__dirname, 'plugins'),
})

// This loads all plugins defined in routes
// define your routes in one of these
app.register(AutoLoad, {
  dir: join(__dirname, 'routes'),
})

export default app;
