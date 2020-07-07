/// <reference path="../../../steps.d.ts"/>

const { I } = inject();
const format = require("string-template");
const locator = require("../../../common/locator");
const variable = require("../../../common/variable");

module.exports = {
  field: {
    email: "//input[@formcontrolname='email']",
    userType: "//ng-select[@formcontrolname='role']//input"
  },

  button: {
    addAnotherUser: "//button//span[contains(text(),'ADD ANOTHER USER')]",
    addUsers: "//button[text()='ADD USERS']",
    admin: "//span[contains(text(),'Admin')]",
    contributor: "//span[contains(text(),'Contributor')]",
  },

  dropdown: {
    userType: "//ng-select[@formcontrolname='role_id']",
  }
};
