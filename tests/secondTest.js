
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
    it('it should search click on searcher', function(){
        browser.url('/')
        browser.isExisting("[class='ds-input']");
        browser.click("[class='ds-input']");
        browser.setValue("[class='ds-input']", 'Click')
        var title = browser.getTitle();
        console.log(title);
        var myElem = browser.element("[class='algolia-docsearch-suggestion--title']");
        myElem.waitForVisible();
        browser.isExisting("[class='algolia-docsearch-suggestion--title']")
        browser.click("[class='algolia-docsearch-suggestion--title']");
        chai.expect('#click');
        var url = browser.url();
        console.log(url);
        
    });








});