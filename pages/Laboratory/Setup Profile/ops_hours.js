/// <reference path="../../../steps.d.ts"/>

const { I } = inject();
const format = require("string-template");
const locator = require("../../../common/locator");
const variable = require("../../../common/variable");

module.exports = {
  field: {
    locationName: "//input[@formcontrolname='location_name']",
    locationAffiliation: "//input[@formcontrolname='location_affiliation']",
    address: "//input[@formcontrolname='address']",
    city: "//input[@formcontrolname='city']",
    zip: "//input[@formcontrolname='zip']",
    clinicPhoneNumber: "//input[@formcontrolname='phone']",
    webAddress: "//input[@formcontrolname='web_address']",
    secondaryRecoveryEmailAddress: "//input[@formcontrolname='secondary_email']"
  },

  button: {
    next:
      "//div[@class='row margin-top-22']//div[@class='col-md-12']//div[@class='wizard-pager']//div//button[contains(text(),'Next')]",
    previous: "//button[text () = 'Previous']",
    confirm: {
      noPhlebotomist: "//div[@id='info-modal']//a[contains(text(),'Confirm')]",
      noCentrifuge:
        "//div[@id='centrifuge-modal']//a[contains(text(),'Confirm')]"
    }
  },


  checkbox: {
    businessHour: {
      monday:
        "//input[@name='business_hour_1']/following::label[@for='business_hour_1']",
      tuesday:
        "//input[@name='business_hour_2']/following::label[@for='business_hour_2']",
      wednesday:
        "//input[@name='business_hour_3']/following::label[@for='business_hour_3']",
      thursday:
        "//input[@name='business_hour_4']/following::label[@for='business_hour_4']",
      friday:
        "//input[@name='business_hour_5']/following::label[@for='business_hour_5']",
      saturday:
        "//input[@name='business_hour_6']/following::label[@for='business_hour_6']",
      sunday:
        "//input[@name='business_hour_7']/following::label[@for='business_hour_7']"
    }
  },

  dropdown: {
    openTime:
      "//ancestor::div[contains(@class,'row margin-top')]//ng-select[@formcontrolname = 'open_time_as_str']",
    closeTime:
      "//ancestor::div[contains(@class,'row margin-top')]//ng-select[@formcontrolname = 'close_time_as_str']"
  },

  time: {
    businessHour: {
      start: "12:00PM",
      end: "05:00PM"
    },
    phlebotomyServiceHour: {
      start: "12:00PM",
      end: "05:00PM"
    }
  },

  warning: {
    closeTimeShouldBeLaterThanOpenTime:
      "//small[text()='* Close time should be later than open time']"
  }
};
