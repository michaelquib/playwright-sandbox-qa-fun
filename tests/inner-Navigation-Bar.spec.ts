import {test, expect} from "@playwright/test";

/*
The logic behind this test is we're doing a few things and making some assumptions.
1. Navigate to the Playwright website.
2. Click on the button in the navigation bar.
3. Verify that the URL is correct.
4. Verify that we landed on the correct page by checking for specific headings.

Note: we're only replicating logic in some areas as some of the buttons literally go to the same layout, this'll vary based on contents.

I'm sure we can expand this test further, but this is a good start.
*/

// Docs button/page test
test("Select the docs button and verify it goes to the next page", async ({page}) => {
    //Navigate to the Playwright website
     await page.goto("https://playwright.dev/");

    //Click on the Docs button in the navigation bar
     await page.getByRole('link', { name: 'Docs' }).click();

    //Verify that the URL is correct
    await expect(page).toHaveURL("https://playwright.dev/docs/intro");

    //Verify it landed on the correct page by checking for a two headings
    const installationHeading = page.locator('h1', { hasText: 'Installation' });
    await expect(installationHeading).toBeVisible();

    const introductionHeading = page.locator('h2', { hasText: 'Introduction' });
    await expect(introductionHeading).toBeVisible();
});

//API button/page test
test("Select the API button and verify it goes to the next page", async ({page}) => {
    //Navigate to the Playwright website
    await page.goto("https://playwright.dev/");

    //Click on the API button in the navigation bar
     await page.getByRole('link', { name: 'API' }).click();

    //Verify that the URL is correct
    await expect(page).toHaveURL("https://playwright.dev/docs/api/class-playwright");

    //Verify it landed on the correct page by checking for two headings
    const apiHeading = page.locator('h1', { hasText: 'Playwright Library' });
    await expect(apiHeading).toBeVisible();

    const propertiesHeading = page.locator('h2', { hasText: 'Properties' });
    await expect(propertiesHeading).toBeVisible();
});
