import { describe, expect, it } from "vitest";
import { sayHello } from "../src/say-hello";

describe("Say Hello", () => {
  it("should say hello", () => {
    const result = sayHello("Zay");
    expect(result).toBe("Hello Zay");
  });
});
