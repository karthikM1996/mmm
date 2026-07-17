require('dotenv').config();
import {test, expect} from '@playwright/test'

test("name @Smoke",async({page})=>{

await page.goto("http://49.249.29.4:8081/TestServer/Build/Client_Management_System/admin/index.php")
console.log(process.env.USERNAME)
console.log(process.env.PASSWORD)
await page.locator("//input[@name='username']").fill(process.env.APP_USERNAME)
await page.locator("//input[@name='password']").fill(process.env.APP_PASSWORD)
await page.locator("//input[@name='login']").click()

await page.getByText("Add Clients").click()

await page.locator("//select[@name='accounttype']").selectOption("Active Account")
await page.locator("//input[@name='cname']").fill("karthik")
await page.locator("//input[@name='comname']").fill("kspider")
await page.locator("//textarea[@name='address']").fill("katriguppe")
await page.locator("//input[@name='city']").fill("bangalore")
await page.locator("//input[@name='state']").fill("karnataka")
await page.locator("//input[@name='zcode']").fill("123456")
await page.locator("//input[@name='wphnumber']").fill("123456789")
await page.locator("//input[@name='cellphnumber']").fill("789456123")
await page.locator("//input[@name='ophnumber']").fill("1234567")
await page.locator("//input[@name='email']").fill("karthik@gmail.com")
await page.locator("//input[@name='websiteadd']").fill("kspider")
await page.locator("//textarea[@name='notes']").fill("hai")
await page.getByText("Save").click();
console.log("hello")



})