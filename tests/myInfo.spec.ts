
import {test,expect} from '@playwright/test';
import { MyInfo } from '../Pages/MyInfo';
import data from '../fixtures/testData.json'
import { LoginPage } from '../Pages/LoginPage';
import { Dashboard } from '../Pages/Dashboard';

test("verify my info details",async({page})=>{
 const loginPage=new LoginPage(page);
    await loginPage.gotoApp();
    await loginPage.login(data.validUsername,data.validPassword);
    const myinfo=new MyInfo(page);
    await myinfo.verifyMyInfo()
    await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible();
//    const dashboard =new Dashboard(page);
    // await dashboard.logoutApp();

})