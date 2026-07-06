


import { test,expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { PimPage } from '../Pages/PimPage';
import { Dashboard } from '../Pages/Dashboard';
import data from '../fixtures/testData.json'

let loginPageModel:any;
let page:any;
let dashboard:any
// let pimPage:any;

// test.beforeAll(async({page})=>{
//  await loginPageModel.gotoApp();
// })

// test.beforeAll(async ({ browser }) => {
//   page=await browser.newPage(); 
//   loginPageModel = new LoginPage(page);
//   await loginPageModel.gotoApp();
 
// });

test("Invalid login test case", async ({page})=>{
    loginPageModel = new LoginPage(page);
    await loginPageModel.gotoApp();
  await loginPageModel.login(data.invalidUsernmae,data.validPassword);
   await expect(page.getByText("Invalid credentials")).toBeVisible();
//  await page.waitForTimeout(3000);
})

test("login with valid credentials" ,async({page})=>{
    loginPageModel = new LoginPage(page);
    await loginPageModel.gotoApp();
await loginPageModel.login(data.validUsername,data.validPassword);
await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
// dashboard =new Dashboard(page);
// await dashboard.logoutApp();
})

// test('verify addemployement button',async({page})=>{
//  const pimPage=new PimPage(page)
// await pimPage.addEmployeeButton();
// await expect(page.locator("//h6[text()='Add Employee']")).toBeVisible();
// // await page.waitForTimeout(3000);
// })