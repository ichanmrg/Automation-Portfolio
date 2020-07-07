/// <reference path="../steps.d.ts"/>

const { I } = inject();
const format = require("string-template");
const locator = require("../common/locator");
const variable = require("../common/variable");

module.exports = {
  field: {
    email: "//input[@formcontrolname='email']",
    password: "//input[@formcontrolname='password']"
  },

  button: {
    login: "//button[text()='Login' or text()='LOGIN']"
  },

  link: {
    userType: "//a[text()='Forgot Password']"
  },
  assert: {
    success: "//h2[text()='Success!']"
  }
};
