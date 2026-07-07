
import { TimeMenu } from "../Pages/TimeMenu";
import { test,expect } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import data from '../fixtures/testData.json'

test("verify time menu",async({page})=>{

  const loginPage=new LoginPage(page);
  await loginPage.gotoApp();
  await loginPage.login(data.validUsername,data.validPassword);

  const timeMenu=new TimeMenu(page);
  await timeMenu.verifyTimeMenu();
  await expect(page.locator("//h6[text()='Select Employee']")).toBeVisible();
})