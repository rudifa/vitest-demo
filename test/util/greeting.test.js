import {expect, test} from "vitest";
import {greeting} from "../../util/greeting";

test("greeting says Hello, Vitest!", () => {
  expect(greeting()).toBe("Hello, Vitest!");
});
