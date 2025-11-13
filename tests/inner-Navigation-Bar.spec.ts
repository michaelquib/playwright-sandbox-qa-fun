import {test, expect} from "@playwright/test";

/*
The logic behind this test is we're doing a few things and making some assumptions.
1. Navigate to the Playwright website.
2. Click on the "Docs" button in the navigation bar.
3. Verify that the URL is correct.
4. Verify that we landed on the correct page by checking for specific headings.

I'm sure we can expand this test further, but this is a good start.
*/
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


