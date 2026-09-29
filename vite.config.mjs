import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  input: {
    index: resolve(import.meta.dirname, "index.html"),
    textLab: resolve(import.meta.dirname, "text-lab.html"),
  },
});
