# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addclient.spec.js >> name @Smoke
- Location: tests\addclient.spec.js:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('open')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]:
    - list [ref=e8]:
      - listitem
      - paragraph [ref=e9]: Client Management System
    - generic [ref=e11]:
      - list [ref=e13]:
        - listitem [ref=e14]:
          - link "Home" [ref=e15] [cursor=pointer]:
            - /url: dashboard.php
        - listitem [ref=e16]: / Add Clients
      - generic [ref=e17]:
        - heading "Add Clients" [level=2] [ref=e18]
        - generic [ref=e21]:
          - generic [ref=e22]:
            - generic [ref=e23]: Account Type
            - combobox [ref=e24]:
              - option "Choose Account Type"
              - option "Active Account" [selected]
              - option "Inactive Account"
              - option "Contact/Lead"
              - option "Unknown"
          - generic [ref=e25]:
            - generic [ref=e26]: Contact Name
            - textbox "Contact Name" [ref=e27]: karthik
          - generic [ref=e28]:
            - generic [ref=e29]: Company Name
            - textbox "Company Name" [ref=e30]: kspider
          - generic [ref=e31]:
            - generic [ref=e32]: Address
            - textbox "Address" [ref=e33]: katriguppe
          - generic [ref=e34]:
            - generic [ref=e35]: City
            - textbox "City" [ref=e36]: bangalore
          - generic [ref=e37]:
            - generic [ref=e38]: State
            - textbox "State" [ref=e39]: karnataka
          - generic [ref=e40]:
            - generic [ref=e41]: Zip Code
            - textbox "Zip Code" [ref=e42]: "123456"
          - generic [ref=e43]:
            - generic [ref=e44]: Work Phone Number
            - textbox "Work Phone Number" [ref=e45]: "123456789"
          - generic [ref=e46]:
            - generic [ref=e47]: Cell Phone Number
            - textbox "Cell Phone Number" [ref=e48]: "789456123"
          - generic [ref=e49]:
            - generic [ref=e50]: Other Phone Number
            - textbox "Work Phone Number" [ref=e51]: "1234567"
          - generic [ref=e52]:
            - generic [ref=e53]: Email Address
            - textbox "Email address" [ref=e54]: karthik@gmail.com
          - generic [ref=e55]:
            - generic [ref=e56]: Password
            - textbox "password" [ref=e57]
          - generic [ref=e58]:
            - generic [ref=e59]: Website Address
            - textbox "Website Address" [ref=e60]: kspider
          - generic [ref=e61]:
            - generic [ref=e62]: Notes
            - textbox "Notes" [active] [ref=e63]: hai
          - button "Save" [ref=e64] [cursor=pointer]
    - contentinfo [ref=e65]:
      - paragraph [ref=e66]: Client Management System @ 2019
  - generic [ref=e67]:
    - banner [ref=e68]:
      - link "" [ref=e69] [cursor=pointer]:
        - /url: "#"
        - generic [ref=e70]: 
      - link "CMS" [ref=e71] [cursor=pointer]:
        - /url: dashboard.php
        - heading "CMS" [level=1] [ref=e73]
    - generic [ref=e75]:
      - link [ref=e76] [cursor=pointer]:
        - /url: dashboard.php
        - img [ref=e77]
      - link "Admin" [ref=e78] [cursor=pointer]:
        - /url: dashboard.php
        - generic [ref=e79]: Admin
      - list [ref=e80]:
        - listitem [ref=e81]:
          - link "" [ref=e82] [cursor=pointer]:
            - /url: admin-profile.php
            - generic [ref=e83]: 
        - listitem [ref=e84]:
          - link "" [ref=e85] [cursor=pointer]:
            - /url: change-password.php
            - generic [ref=e86]: 
        - listitem [ref=e87]:
          - link "" [ref=e88] [cursor=pointer]:
            - /url: logout.php
            - generic [ref=e89]: 
    - list [ref=e91]:
      - listitem [ref=e92]:
        - link " Dashboard" [ref=e93] [cursor=pointer]:
          - /url: dashboard.php
          - generic [ref=e94]: 
          - text: Dashboard
      - listitem [ref=e95]:
        - link " Services " [ref=e96] [cursor=pointer]:
          - /url: "#"
          - generic [ref=e97]: 
          - text: Services
          - generic [ref=e98]: 
      - listitem [ref=e99]:
        - link " Add Clients" [ref=e100] [cursor=pointer]:
          - /url: add-client.php
          - generic [ref=e101]: 
          - text: Add Clients
      - listitem [ref=e102]:
        - link " Clients List" [ref=e103] [cursor=pointer]:
          - /url: manage-client.php
          - generic [ref=e104]: 
          - text: Clients List
      - listitem [ref=e105]:
        - link " Invoices" [ref=e106] [cursor=pointer]:
          - /url: invoices.php
          - generic [ref=e107]: 
          - text: Invoices
      - listitem [ref=e108]:
        - link " Reports " [ref=e109] [cursor=pointer]:
          - /url: "#"
          - generic [ref=e110]: 
          - text: Reports
          - generic [ref=e111]: 
      - listitem [ref=e112]:
        - link " Search Invoice" [ref=e113] [cursor=pointer]:
          - /url: search-invoices.php
          - generic [ref=e114]: 
          - text: Search Invoice
```

# Test source

```ts
  1  | require('dotenv').config();
  2  | import {test, expect} from '@playwright/test'
  3  | 
  4  | test("name @Smoke",async({page})=>{
  5  | 
  6  | await page.goto("http://49.249.29.4:8081/TestServer/Build/Client_Management_System/admin/index.php")
  7  | console.log(process.env.USERNAME)
  8  | console.log(process.env.PASSWORD)
  9  | await page.locator("//input[@name='username']").fill(process.env.APP_USERNAME)
  10 | await page.locator("//input[@name='password']").fill(process.env.APP_PASSWORD)
  11 | await page.locator("//input[@name='login']").click()
  12 | 
  13 | await page.getByText("Add Clients").click()
  14 | 
  15 | await page.locator("//select[@name='accounttype']").selectOption("Active Account")
  16 | await page.locator("//input[@name='cname']").fill("karthik")
  17 | await page.locator("//input[@name='comname']").fill("kspider")
  18 | await page.locator("//textarea[@name='address']").fill("katriguppe")
  19 | await page.locator("//input[@name='city']").fill("bangalore")
  20 | await page.locator("//input[@name='state']").fill("karnataka")
  21 | await page.locator("//input[@name='zcode']").fill("123456")
  22 | await page.locator("//input[@name='wphnumber']").fill("123456789")
  23 | await page.locator("//input[@name='cellphnumber']").fill("789456123")
  24 | await page.locator("//input[@name='ophnumber']").fill("1234567")
  25 | await page.locator("//input[@name='email']").fill("karthik@gmail.com")
  26 | await page.locator("//input[@name='websiteadd']").fill("kspider")
  27 | await page.locator("//textarea[@name='notes']").fill("hai")
> 28 | await page.getByText("open").click();
     |                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  29 | console.log("hello")
  30 | 
  31 | 
  32 | 
  33 | })
```