/// <reference path="../../../steps.d.ts"/>

const { I } = inject();
const format = require("string-template");
const locator = require("../../../common/locator");
const variable = require("../../../common/variable");

module.exports = {
  field: {
    primaryMarketOfInterest: {
      selectYourLabsPrimaryFocus: "//input[@id='marketOfInterest']"
    },
    clia: {
      licenseNumber: "#clia-license-number",
      expiry: {
        month: {
          self: "//ng-select[@formcontrolname='clia_expiry_month']",
          type: "//ng-select[@formcontrolname='clia_expiry_month']//input"
        },
        year: {
          self: "//ng-select[@formcontrolname='clia_expiry_year']",
          type: "//ng-select[@formcontrolname='clia_expiry_year']//input",
        }
      }
    },
    cap: {
      licenseNumber: "#cap-license-number",
      expiry: {
        month: {
          self: "//ng-select[@formcontrolname='cap_expiry_month']",
          type: "//ng-select[@formcontrolname='cap_expiry_month']//input"
        },
        year: {
          self: "//ng-select[@formcontrolname='cap_expiry_year']",
          type: "//ng-select[@formcontrolname='cap_expiry_year']//input",
        }
      }
    },
    willYourLabBeResponsibleForPaymentOfCollections: {
      defaultPaymentPerCollection: "//input[@formcontrolname = 'payment_fee']"
    }


  },

  button: {
    next: "//button[text () = 'Next']"
  },

  radio: {
    isThisTheSameAddressWhereSpecimensWillBeDelivered: {
      yes: "//label[@for='is_specimen_address_same1']",
      no: "//label[@for='is_specimen_address_same2']"
    },
    willYourLabBeResponsibleForPaymentOfCollections: {
      yes: "//label[@for='is_responsible_for_collection_of_payment' and contains(text(),'Yes')]",
      no: "//label[@for='is_responsible_for_collection_of_payment2' and contains(text(),'No')]"
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
    },
    phlebotomyServiceHour: {
      monday:
        "//input[@name='phlebotomy_service_hour1']/following::label[@for='phlebotomy_service_hour1']",
      tuesday:
        "//input[@name='phlebotomy_service_hour2']/following::label[@for='phlebotomy_service_hour2']",
      wednesday:
        "//input[@name='phlebotomy_service_hour3']/following::label[@for='phlebotomy_service_hour3']",
      thursday:
        "//input[@name='phlebotomy_service_hour4']/following::label[@for='phlebotomy_service_hour4']",
      friday:
        "//input[@name='phlebotomy_service_hour5']/following::label[@for='phlebotomy_service_hour5']",
      saturday:
        "//input[@name='phlebotomy_service_hour6']/following::label[@for='phlebotomy_service_hour6']",
      sunday:
        "//input[@name='phlebotomy_service_hour7']/following::label[@for='phlebotomy_service_hour7']"
    }
  },

  dropdown: {
    state: "//select[@formcontrolname='state']",
    primaryMarketOfInterest:{
      selectYourLabsPrimaryFocus: {
        msa: "#msaList"
      }
    },
    labSpecialtyAndDescription: {
      selectYourLabsPrimaryFocus: "//select[@formcontrolname = 'lab_primary_focus_id']"

    },
    openTime:
      "//ancestor::div[contains(@class,'row margin-top')]//ng-select[@formcontrolname = 'open_time']",
    closeTime:
      "//ancestor::div[contains(@class,'row margin-top')]//ng-select[@formcontrolname = 'close_time']",
    selectAMaximumNumberOfBloodDrawsAllowedPerHour:
      "//ng-select[@formcontrolname = 'max_blood_draw']//input"
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
