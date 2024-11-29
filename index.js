import * as path from "path";
import { fileURLToPath } from "url";

export function getDictPath() {
  return path.join(path.dirname(fileURLToPath(import.meta.url)), "dict");
}
