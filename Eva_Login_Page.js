var assert = require('assert'),
test = require('C:/Program Files (x86)/nodejs/node_modules/selenium-webdriver/testing'),
webdriver = require('C:/Program Files (x86)/nodejs/node_modules/selenium-webdriver');
 
test.describe('Eva Login page', function() {
  test.it('should work', function() {
    var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
driver.get('http://172.29.221.77');
    var UserNameBox = driver.findElement(webdriver.By.name('UserName'));
    UserNameBox.sendKeys('eqruuwq');
    UserNameBox.getAttribute('value').then(function(value) {
      assert.equal(value, 'eqruuwq');
    });
    driver.quit();
  });
});
