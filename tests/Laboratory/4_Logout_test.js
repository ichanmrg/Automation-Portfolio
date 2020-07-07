/// <reference path="../../steps.d.ts"/>

const dummy = require("faker");
const format = require("string-template");
const dateFormat = require("dateformat");
//const locator = require('../../common/locator')
const variable = require("../../common/variable");
const logout = require("../../pages/logout");

Feature("4. Login");

BeforeSuite(async I => {
  //I.clearMailosaurEmails()
  // I.amOnPage("/auth/login")
  // I.addMochawesomeContext(await I.grabCurrentUrl())
});

Scenario("User shall be able to logout", async I => {
  I.click(logout.link.logOut);
  I.saveScreenshot("output/Laboratory/User shall be able to logout.png",true)
  I.seeCurrentUrlEquals("/auth/login");
});
