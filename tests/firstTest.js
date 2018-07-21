
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));
var assert = require('assert');

describe('webdriver.io page', function() {
    it('should have the right title and log the url', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
        var url = browser.url();
        console.log(url);
    });
    it('it should have to be possible to click API button menu', function(){
		browser.url('/')
    	browser.isExisting('=API');
    	browser.click('=API');
    	var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - API Docs');
        browser.isExisting('=click');
        browser.click('=click');
        //browser.debug();
        browser.isExisting('#click');
        chai.expect('#click');
    });








});