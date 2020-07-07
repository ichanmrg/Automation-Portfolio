/// <reference path="../../steps.d.ts"/>

const dummy = require("faker");
const format = require("string-template");
const dateFormat = require("dateformat");
//const locator = require('../../common/locator')
const variable = require("../../common/variable");
const addusers = require("../../pages/Clinic/Setup Profile/add_users");

Feature("3. Add User");

BeforeSuite(async I => {
  //I.clearMailosaurEmails()
  //I.amOnPage("/")
  I.addMochawesomeContext(await I.grabCurrentUrl());
  I.waitForElement(addusers.button.addAnotherUser);
  I.wait(3);
});

Scenario("User shall be able to add other clinic users.", async I => {
  I.fillField(
    addusers.field.email,
    format(variable.credential.email.clinic, {
      placeholder: variable.credential.email.stamp + "+ADD_USER"
    })
  );
  I.click(addusers.dropdown.userType);
  I.click(addusers.button.admin)
  //I.fillField(addusers.field.userType, variable.role.clinic.admin);
  I.pressKey("Enter");
  //I.click(addusers.button.addAnotherUser);
  I.saveScreenshot("output/Clinic/User shall be able to add other clinic users.png",true)
  I.click(addusers.button.addUsers);
});
