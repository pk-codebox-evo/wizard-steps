var assert = require('assert');
var WizardSteps = require('../src/js/main.js');
describe('WizardSteps', function() {
  describe('exists', function () {
    it('should present in global scope', function () {
      assert.equal(WizardSteps.VERSION, '0.0.0');
    });
  });
});
