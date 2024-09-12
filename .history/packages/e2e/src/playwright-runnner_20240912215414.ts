import {test,expect} from "@playwright/test"
test('should work ',async ({page})=>{
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('example Domain')
});
