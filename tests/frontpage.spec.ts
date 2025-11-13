import {test} from "@playwright/test";

test("Select all the elements in the top navigation bar", async ({page}) => {
    await page.goto("playwright.dev");
});