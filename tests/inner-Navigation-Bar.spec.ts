import {test, expect} from "@playwright/test";

//Select the Docs button from the navigation bar and verify it goes to the correct page

test("Select the docs button and verify it goes to the next page", async ({page}) => {
    //Navigate to the Playwright website
     await page.goto("https://playwright.dev/");

    //Click on the Docs button in the navigation bar
     await page.getByRole('link', { name: 'Docs' }).click();

    //Verify that the URL is correct
    await expect(page).toHaveURL("https://playwright.dev/docs/intro");
});


