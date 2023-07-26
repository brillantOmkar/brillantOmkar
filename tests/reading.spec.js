import { test, expect } from '@playwright/test';
import { Utilities } from '../pages/Utilities';


test('Reading Test Data', async ({ page }) => {
  const objUtilities = new Utilities(page)
  const jsonData = await objUtilities.getdata()

  console.log("In this class ", jsonData)

 

});