import { HomePage } from "./Pages/HomePage";

describe("Going to write first test", function(){

    //Globally
    var homePage = new HomePage();

    it("Test with PageObject and Protractor",() =>{
        //open browser
        homePage.OpenBrowser("http://localhost:8808/")

        //Get the heading
        homePage.GetAllHeadings();

        //Click the first Heading
        homePage.ClickFirstHeading();
    })

    it("should pass without any issue", function(){
        let a = 12
        expect(a).toBe(12)
    });
    it("should not pass as the values are undefined", function(){
        let u=1;
        expect(u).toBeDefined("Not defined")
    });
    it("without any expectation", function(){

    });
})