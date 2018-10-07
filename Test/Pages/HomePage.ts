//import the class
import {browser, element, by, protractor, $$, $} from 'protractor';

export class HomePage{
    //Selenium framework development course heading
    heading = element(by.xpath("//course-thumb/div/h2[text()='Selenium Framework development']"))
                 .element(by.xpath("//span[contains(text(),'4th')]"));

    //All heading
    headings = $(".well.hoverwell.thumnail>h2");

    //Open browser
    OpenBrowser(url: string){
        browser.get(url);
    }

    GetAllHeadings(){
        this.headings.getText().then((text) =>{
            console.log("The heading is:" + text);
        })
    }

    ClickFirstHeading(){
        this.heading.click();
    }
}