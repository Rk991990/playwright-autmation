
import {Page,Locator} from '@playwright/test';

export class TimeMenu{

readonly page:Page;
readonly time:Locator;


  constructor(page:Page){
   this.page=page;
   this.time=page.getByRole('link', { name: 'Time' });
  }


  async verifyTimeMenu(){
    await this.time.click();
  }

  
}