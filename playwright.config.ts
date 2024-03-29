import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 6000,
  reporter: "html",
  use: {
    baseURL: "https://fabulous-helix-spot.glitch.me",
    // baseURL: "http://127.0.0.1:3000",
    trace: "on",
  },
});
