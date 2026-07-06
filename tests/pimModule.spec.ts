
import { PimPage } from "../Pages/PimPage";
import { LoginPage } from "../Pages/LoginPage";
import{test,expect} from '@playwright/test'
import data from '../fixtures/testData.json';
import { Dashboard } from "../Pages/Dashboard";

let loginPageModel:any;
let pimPage:any;
let empId:any;

test.describe.serial("Pim Module",()=>{
// test.describe.configure({mode:'serial'});
test.beforeEach(async({page})=>{
loginPageModel=new LoginPage(page);
await loginPageModel.gotoApp();
await loginPageModel.login(data.validUsername,data.validPassword);
    })


test('add employee',async({page})=>{
empId = `EMP${Date.now().toString().slice(-4)}`;
pimPage=new PimPage(page);
await pimPage.addEmployeeButton(data.employee,empId);
 await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible();

}) 

test("verify created employee",async({page})=>{
await pimPage.gotoEmpList();
await pimPage.verifyCreatedEmp(empId);
await expect(page.getByText(empId,{exact:true} )).toBeVisible();
})

test("delete created employee",async ({page})=>{
await pimPage.pimMenu();
await pimPage.goToEmpList(empId);
})

test("verify deleted employee",async({page})=>{
await pimPage.verifyDeletedEmp(empId);
await expect (page.locator("//span[text()='No Records Found']")).toBeVisible();

})


})

