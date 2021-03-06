define(function (require) {
  var registerSuite = require('intern!object');
  var assert = require('intern/chai!assert');

  registerSuite({
    name: 'google test',

    'google': function () {
      return this.remote
        .get('http://www.google.com')
        .setFindTimeout(5000)
        .findByCssSelector('input#lst-ib')
          .click()
          .type('black tambourine beck\n')
          .end()
    }
    /*
    'google': function () {
      return this.remote
        .get('www.google.com')
        .setFindTimeout(5000)
        .findByCssSelector('body.loaded')
        .findById('nameField')
          .click()
          .type('Elaine')
          .end()
        .findByCssSelector('#loginForm input[type=submit]')
          .click()
          .end()
        .findById('greeting')
          .getVisibleText()
          .then(function (text) {
            assert.strictEqual(text, 'Hello, Elaine!',
              'Greeting should be displayed when the form is submitted');
          });
    }
    */
  });
});
