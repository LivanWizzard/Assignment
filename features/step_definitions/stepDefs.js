const assert = require('assert');
const { Given, When, Then } = require('cucumber');


Given(/^The homepage from Enroute$/, function(){
    browser.url("http://www.enroutesystems.com/");
});

When(/^Have the right title$/, function(){
    var title = browser.getTitle()
    assert.strictEqual(title, 'Enroute')
});

Then(/^Scroll to an specific point 1$/, function(){
    const point = $('.entry-content');
    point.scrollIntoView(true);
    browser.pause(5000);
});

Then(/^click the tab QA & testingt$/, function(){
    const elem  = $('=QA & Testing').click();
    browser.pause(3000);
});

Then(/^click the tab software development$/, function(){
    const elem  = $('=Software Development').click();
    browser.pause(3000);
});

Then(/^click the tab Inventory Management$/, function(){
    const elem  = $('=Inventory Management').click();
    browser.pause(3000);
});

Then(/^click the tab Data Management$/, function(){
    const elem  = $('=Data Management').click();
    browser.pause(3000);
});

Then(/^click the tab Application Maintenance$/, function(){
    const elem  = $('=Application Maintenance').click();
    browser.pause(3000);
});

Then(/^scroll to an specific point 2$/, function(){
    const point = $('.menu-main-container');
    point.scrollIntoView(true);
    browser.pause(5000);
});

Then(/^click the button from home to the CONTACT page$/, function(){
        const elem  = $('=Contact').click();
        const title = browser.getTitle()
        assert.strictEqual(title, 'Contact – Enroute')
        url = browser.getUrl()
        browser.pause(2000);
});

Then(/^scroll to an specific point 3$/, function(){
    const point = $('.reach-out-to-us');
        point.scrollIntoView(true);
        browser.pause(5000);
});

Then(/^set value on an input section name$/, function(){
    const input = $('input[name=your-name]');
        input.setValue('Livan Martínez Gacría');
        browser.pause(2000);
});

Then(/^set value on an input section email$/, function(){
    const input = $('input[name=your-email]');
        input.setValue('livan.martinez@enroutesystems.com');
        browser.pause(2000);
});

Then(/^set value on an input section subject$/, function(){
    const input = $('input[name=your-subject]');
        input.setValue('Automation Assignment');
        browser.pause(2000);
});

Then(/^set value on an input section message$/, function(){
    const input = $('textarea[name=your-message]');
        input.setValue('This is an automation message created for the Automation Assinment');
        browser.pause(2000);
});

Then(/^is send button enable$/, function(){
    browser.url(url)
        browser.isElementEnabled('input[type=submit]')
        browser.pause(2000);
});