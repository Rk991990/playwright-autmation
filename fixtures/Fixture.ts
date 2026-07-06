
import {test as base,expect} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import data from '../fixtures/testData.json';



type MyFixtures = {
  loginPage: LoginPage;
};


export const test=base.extend<MyFixtures>({

  loginPage:async({page},use)=>{
    const loginPage=new LoginPage(page);
    await loginPage.gotoApp();
    await loginPage.login(data.invalidUsernmae,data.validPassword);
    await use(loginPage);
  }

})


// export const test = base.extend<MyFixtures>({
//   loginPage: async ({ page }, use) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.gotoApp();
//     await use(loginPage);
//   },
// });

// export { expect } from '@playwright/test';