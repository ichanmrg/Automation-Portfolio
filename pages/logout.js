/// <reference path="../steps.d.ts"/>

const { I } = inject();
const format = require("string-template");
const locator = require("../common/locator");
const variable = require("../common/variable");

module.exports = {
  link: {
    logOut: "//*[text()='Log Out' or text()='LOG OUT']"
  },
  assert: {
    success: "//h2[text()='Success!']"
  }
};
