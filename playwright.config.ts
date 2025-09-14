import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "e2e",
  use: { headless: true, baseURL: "http://localhost:5173" },
  webServer: {
    command: "pnpm dev",
    port: 5173,
    reuseExistingServer: !process.env.CI,
  },
  reporter: [["list"]],
};

// noinspection JSUnusedGlobalSymbols
export default config;
