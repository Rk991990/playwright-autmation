
import {Page,Locator} from '@playwright/test';


export class MyInfo{
 
  readonly page:Page;
  readonly myInfoLink:Locator;
  // readonly personalDetail:Locator;

  constructor(page:Page){

    this.page=page;
    this.myInfoLink=page.getByRole('link',{name:'My Info'});
    // this.personalDetail=page.getByText("Personal Details");

  }

   async verifyMyInfo(){
    await this.myInfoLink.click();

   }


} 