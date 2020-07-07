const isStaging = true;
const isClinic = false;
const clinicUrl = isStaging
  ? "http://myonemedicalsource-clinic.spstage.com"
  : "";
const laboratoryUrl = isStaging
  ? "http://myonemedicalsource-laboratory.spstage.com"
  : "";
exports.config = {
  tests: isClinic ? "./tests/Clinic/*_test.js" : "./tests/Laboratory/*_test.js",
  output: "./output",
  plugins: {
    wdio: {
      enabled: true,
      services: ["selenium-standalone"],
    },
    retryFailedStep: {
      enabled: true,
    },
    stepByStepReport: {
      deleteSuccessful: true,
      animateSlides: true,
      fullPageScreenshots: true,
      screenshotsForAllureReport: true,
    },
    autoDelay: {
      enabled: true,
    },
    allure: {
      enabled: true
    }
  },
  helpers: {
    Mochawesome: {
      uniqueScreenshotNames: "true",
    },
    Protractor: {
      url: isClinic ? clinicUrl : laboratoryUrl,
      driver: "hosted",
      browser: "chrome",
      rootElement: "body",
      angular: false,
      keepCookies: true,
      restart: false,
      keepBrowserState: true,
      windowSize: "1920x1080",
      smartWait: 12000,
      fullPageScreenshots: true,
      capabilities: {
        chromeOptions: {
          args: ["--disable-gpu", "--start-maximized", "--no-sandbox", "--headless"],
        },
      },
    },
  },
  include: {
    I: "./steps_file.js",
    register: "./pages/register.js",
  },
  bootstrap: null,
  mocha: {},
  name: "my-one-medical-source",
};
