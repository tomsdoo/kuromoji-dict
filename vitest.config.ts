import { defineConfig } from "vitest/config";
import { fileURLToPath } from "url";
import { dirname } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@@": dirname(fileURLToPath(import.meta.url)),
    }
  },
});
