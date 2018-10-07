"use strict";
//import the class
var protractor_1 = require('protractor');
var HomePage = (function () {
    function HomePage() {
        //Selenium framework development course heading
        this.headings = protractor_1.element(protractor_1.by.xpath("//course-thumb/div/h2[text()='Selenium Framework development']"))
            .element(protractor_1.by.xpath("//span[contains(text(),'4th')]"));
        //All heading
        this.heading = protractor_1.$(".well.hoverwell.thumnail>h2");
    }
    //Open browser
    HomePage.prototype.OpenBrowser = function (url) {
        protractor_1.browser.get(url);
    };
    HomePage.prototype.GetAllHeadings = function () {
        this.headings.getText().then(function (text) {
            console.log("The heading is:" + text);
        });
    };
    HomePage.prototype.ClickFirstHeading = function () {
        this.heading.click();
    };
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=HomePage.js.map