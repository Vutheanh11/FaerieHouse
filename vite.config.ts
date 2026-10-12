import vinext from "vinext";
import { defineConfig } from "vite";

const githubPagesBase = process.env.GITHUB_ACTIONS === "true"
  ? `/${process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "FaerieHouse"}/`
  : "/";

export default defineConfig(async () => {
  process.env.WRANGLER_WRITE_LOGS ??= "false";
  process.env.WRANGLER_LOG_PATH ??= ".wrangler/logs";
  process.env.MINIFLARE_REGISTRY_PATH ??= ".wrangler/registry";
  const { cloudflare } = await import("@cloudflare/vite-plugin");

  return {
    base: githubPagesBase,
    plugins: [
      vinext(),
      cloudflare({
        viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
        config: { main: "./worker/index.ts", compatibility_flags: ["nodejs_compat"] },
      }),
    ],
  };
});
