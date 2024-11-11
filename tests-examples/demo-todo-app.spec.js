// @ts-check
const { test, expect } = require('@playwright/test');
const LOCAL_HOST_URL = 'http://localhost:5174/';

test('app shows random facts img', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith('hola')).toBeTruthy();


});
