
import { Page,Locator } from "@playwright/test";

export class Dashboard{

  readonly page:Page;
  readonly profile:Locator;
  readonly logout:Locator;

  constructor(page:Page){

    this.page=page;
    this.profile=page.locator('.oxd-userdropdown-name');
    this.logout=page.locator("//a[text()='Logout']");
  }

   async logoutApp(){

    await this.profile.click();
    await this.logout.click();

   }




}