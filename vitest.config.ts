import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/**/*.test.ts"],
    setupFiles: ["tests/setup.vitest.ts"],
    environment: "node",
    coverage: {
      provider: "v8",
      all: true,
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "node_modules/**",
        "tests/**",
        "**/*.d.ts",
        "**/vite.config.*",
        "**/vitest.config.*",
      ],
      reportsDirectory: "coverage",
      reporter: ["text", "html", "lcov", "json-summary", "json"],
      thresholds: {
        lines: 0,
        functions: 0,
        branches: 0,
        statements: 0,
      },
    },
  },
});
