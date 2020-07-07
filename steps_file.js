const format = require("string-template");
const locator = require("./common/locator");
const variable = require("./common/variable");
const MailosaurClient = require("mailosaur");
const client = new MailosaurClient(variable.mailosaur.api);
var confirmEmail;
// in this file you can append custom step methods to 'I' object

module.exports = function () {
  return actor({
    clearMailosaurEmails: function () {
      client.messages.deleteAll(variable.mailosaur.serverID);
    },

    getConfirmEmailLink: async function (registeredEmail) {
      this.say(`Retrieving registration link from Mailosaur from ${registeredEmail}...`);
      await new Promise((resolve, reject) => {
        client.messages
          .get(
            variable.mailosaur.serverID,
            {
              sentTo: registeredEmail,
              subject: "Welcome to My One Medical Source",
            },
            { timeout: 1000 }
          )
          .then((email) => {
            confirmEmail = email.html.links[0].href;
            resolve();
          });
      });
      return confirmEmail;
    },

    selectTime: function (path, time) {
      this.waitForClickable(path, 3);
      this.click(path);
      this.wait(1);
      this.fillField(path + "//input", time);
      this.pressKey("Enter");
    },
  });
};
