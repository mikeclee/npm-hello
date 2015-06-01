var sinon = require("sinon");

describe('NpmHello', function() {
  describe('#sayHello', function() {
    // Setup
    var sandbox,
        tester;
    sandbox = sinon.sandbox.create();
    sandbox.stub(console, "log");
    sandbox.stub(console, "error");

    // Test
    tester = require('learn-npm-hello');
    tester.npmHello();

    // Assert
    sinon.assert.notCalled(console.error);
    sinon.assert.callCount(console.log, 1);
    sinon.assert.calledWith(console.log, "Hello in the NPM registory world :)");
  });
});
