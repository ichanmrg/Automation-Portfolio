/// <reference path="../../steps.d.ts"/>

const dummy = require("faker");
const format = require("string-template");
const dateFormat = require("dateformat");
//const locator = require('../../common/locator')
const variable = require("../../common/variable");
const addusers = require("../../pages/Laboratory/Setup Profile/add_users");

Feature("3. Add User");

BeforeSuite(async (I) => {
  //I.clearMailosaurEmails()
  //I.amOnPage("/")
  I.addMochawesomeContext(await I.grabCurrentUrl());
  I.waitForElement(addusers.button.addAnotherUser);
});

Scenario("User shall be able to add other laboratory users.", async (I) => {
  var ctr = 1;
  variable.addUsers.lab.roles.forEach((role) => {
    I.click(addusers.button.addAnotherUser);
    I.fillField(
      locate("input").withAttr({ formcontrolname: "email" }).at(ctr),
      format(variable.credential.email.laboratory, {
        placeholder:
          variable.credential.email.stamp +
          "_" +
          role.replace(" ", "").toLowerCase(),
      })
    );
    I.click(
      locate("ng-select").withAttr({ formcontrolname: "role_id" }).at(ctr)
    );
    I.click(locate("span").withText(role));
    ctr++;
  });
  I.saveScreenshot("output/Laboratory/User shall be able to add other laboratory users.png",true)
  I.click(addusers.button.addUsers);
});
