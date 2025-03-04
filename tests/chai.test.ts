import { assert, describe, expect, it } from "vitest";

function sayHello(name: string): string {
  return `Hello ${name}!`;
}

describe("sayHello", () => {
  it("should return with name", () => {
    expect(sayHello("Zay")).to.be.a("string", "Hello Zay!");
    assert.equal(sayHello("Zay"), "Hello Zay!");
  });
});
