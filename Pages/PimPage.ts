
import {Page,Locator} from '@playwright/test'



export class PimPage{

readonly page:Page;
readonly pim:Locator;
readonly addEmployee:Locator;
readonly firstName:Locator;
readonly lastName:Locator;
readonly middleName:Locator;
readonly empid:Locator;
readonly saveButton:Locator;
readonly searchByEmpId:Locator;
readonly searchButton:Locator;
readonly empList:Locator;
readonly deleteEmp:Locator;
readonly yesDelete:Locator;
readonly verifyDeletedEmp:Locator

  constructor(page:Page){
  // this.page=page;
  // this.pim=page.locator("//a[@class='oxd-main-menu-item active']");
  // this.addEmployement = page.getByRole('link', { name: 'Add Employee' });
  //  this.addEmployement=page.locator("//a[text()='Add Employee']");

  //  this.addEmployement=page.getByText('Add Employee');

   this.page = page;
    this.pim = page.getByRole('link', { name: 'PIM' });
    this.addEmployee = page.getByRole('link', { name: 'Add Employee' });
    this.firstName=page.locator("//input[@name='firstName']");
    this.middleName=page.locator("//input[@name='middleName']");
    this.lastName=page.locator("//input[@name='lastName']");
    this.empid=page.locator("//label[text()='Employee Id']/following::input[1]");
    this.saveButton=page.getByRole("button",{name:'Save'});
    this.searchByEmpId=page.locator("//label[text()='Employee Id']/following::input[1]")
    this.searchButton=page.getByRole("button",{name:' Search '});
    this.empList=page.getByRole("link",{name:'Employee List'})
    this.deleteEmp=page.locator("//i[@class='oxd-icon bi-trash']");
    this.yesDelete=page.getByText(" Yes, Delete ");
    this.verifyDeletedEmp=page.locator("//span[text()='No Records Found']");
}


 async addEmployeeButton(employee:any,empId:any){
  await this.pim.click();
  // await this.page.waitForURL(/pim/);
  await this.addEmployee.click();
  await this.firstName.fill(employee.first_name);
  await this.middleName.fill(employee.middle_name);
  await this.lastName.fill(employee.last_name);
  await this.empid.clear();
  await this.empid.fill(empId);
   await this.saveButton.click();
 }

 async verifyCreatedEmp(empId:any){
 await this.searchByEmpId.fill(empId);
 await this.searchButton.click();

}

 async pimMenu(){
 await this.pim.click();
 }

 async goToEmpList(empId:any){
await this.empList.click();
await this.empid.fill(empId);
await this.searchButton.click();
await this.deleteEmp.click();
await this.yesDelete.click();

 }

 async verifyDeletedEmploye(empId:any){
  await this.empid.fill(empId);
  await this.searchButton.click();

 }

}



