import { describe, it, expect } from "vitest";
import { getDictPath } from "@@/index";
import { cwd } from "process";
import { join } from "path";

describe("getDictPath()", () => {
  it("returns correct value", () => {
    expect(getDictPath()).toBe(join(cwd(), "dict"));
  });
});
