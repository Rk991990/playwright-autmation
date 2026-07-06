

import {test,expect} from '@playwright/test';

test("vaildate dynamic button",async({page})=>{

  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("//button[@onclick='toggleButton(this)']").click();
await page.waitForTimeout(3000);

})