import { defineConfig } from "vitest/config";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@@": dirname(fileURLToPath(import.meta.url)),
      "@": join(dirname(fileURLToPath(import.meta.url)), "src"),
    },
  },
});
