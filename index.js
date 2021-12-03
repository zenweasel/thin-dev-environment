import { importPluginsJSONFile, ReactionAPICore } from "@reactioncommerce/api-core";
import Logger from "@reactioncommerce/logger";
import packageJson from "./package.json";

const api = new ReactionAPICore({
  serveStaticPaths: ["public"],
  version: packageJson.version
});

/**
 * @summary Registers Reaction API plugins and then starts the app
 * @return {Promise<undefined>} undefined
 */
async function runApp() {
  const plugins = await importPluginsJSONFile("./plugins.json");
  const customPlugins = await importPluginsJSONFile("./customPlugins.json");

  await api.registerPlugins(plugins);
  await api.registerPlugins(customPlugins);

  await api.start();
}

runApp().catch((error) => {
  Logger.error(error);
  process.exit(1); // eslint-disable-line no-process-exit
});
