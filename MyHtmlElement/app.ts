
class HtmlElement {
    private tagName: string;
    private tagClosing: boolean;
    private textContent: string;
    private arrayAttributes: Array<string>;
    private arrayStyles: Array<string>;
    private arrayOfNested: Array<HtmlElement>;

    public constructor(name: string, closing: boolean, content: string) {
        this.tagName = name;
        this.tagClosing = closing;
        this.textContent = content;
        this.arrayAttributes = []; 
        this.arrayStyles = [];     
        this.arrayOfNested = [];   
        
    }

    settingAttribute(attributeName: string, attributeSetting: string): void {
       
        if (!this.arrayAttributes) {
            this.arrayAttributes = [];
        }

        const attributeString = `${attributeName}="${attributeSetting}"`;

        
        this.arrayAttributes.push(attributeString);
    }


    settingStyle(styleName: string, styleSetting: string): void {
        
        if (!this.arrayStyles) {
            this.arrayStyles = [];
        }
        const styleString = `${styleName}: ${styleSetting};`;
        this.arrayStyles.push(styleString);
    }


    addingItemToEnd(addElementToEnd: HtmlElement): void {
        

        if (!this.arrayOfNested) {
            this.arrayOfNested = [];
        }
        this.arrayOfNested.push(addElementToEnd);
    }


    addingItemToBeginning(addElementToEnd: HtmlElement): void {
        
        if (!this.arrayOfNested) {
            this.arrayOfNested = [];
        }
        this.arrayOfNested.unshift(addElementToEnd);
    }

    getHtml(): string {
        let html = `<${this.tagName}`;

        
        if (this.arrayAttributes) {
            html += ` ${this.arrayAttributes.join(' ')}`;
        }

        
        if (this.arrayStyles) {
            html += ` style="${this.arrayStyles.join(' ')}"`;
        }

       
        if (this.tagClosing) {
            html += `>${this.textContent}</${this.tagName}>`;
        } else {
            html += '>';
        }

        
        for (const child of this.arrayOfNested) {
            html += child.getHtml();
        }

        return html;
    }

}
/// <reference path="Scripts/typings/jquery/jquery.d.ts"/>
document.addEventListener("DOMContentLoaded", function () {
let wrapper: HtmlElement = new HtmlElement("div", false, "");
    wrapper.settingAttribute("id", "wrapper");
wrapper.settingStyle("display", "flex");


let div1: HtmlElement = new HtmlElement("div", false, "");
div1.settingStyle("width", "300px");
div1.settingStyle("margin", "10px");

    let h3_1: HtmlElement = new HtmlElement("h3", false, "What is Lorem Ipsum?");
let img_1: HtmlElement = new HtmlElement("img", true, "");
img_1.settingStyle("width", "100%");
    img_1.settingAttribute("src", "img/lipsum.jpg");
img_1.settingAttribute("alt", "Lorem Ipsum");

    let p1: HtmlElement = new HtmlElement("p", false, `Lorem Ipsum is simply dummy text of the printing 
and typesetting industry.Lorem Ipsum has been the industrys standard dummy text 
ever since the 1500s, when an unknown printer took a galley of type 
and scrambled it to make a type specimen book.`);
p1.settingStyle("text-align", "justify");
let a1: HtmlElement = new HtmlElement("a", false, "More ...");
 a1.settingAttribute("href", "https://www.lipsum.com");
a1.settingAttribute("target", "_blank");

let div2: HtmlElement = new HtmlElement("div", false, "");
div2.settingStyle("width", "300px");
div2.settingStyle("margin", "10px");

let h3_2: HtmlElement = new HtmlElement("h3", false, "What is Lorem Ipsum?");
let img_2: HtmlElement = new HtmlElement("img", true, "");
img_2.settingStyle("width", "100%");
    img_2.settingAttribute("src", "img/lipsum.jpg");
img_2.settingAttribute("alt", "Lorem Ipsum");

    let p2: HtmlElement = new HtmlElement("p", false, `Lorem Ipsum is simply dummy text of the printing 
and typesetting industry.Lorem Ipsum has been the industrys standard dummy text 
ever since the 1500s, when an unknown printer took a galley of type 
and scrambled it to make a type specimen book.`);
    p2.settingStyle("text-align", "justify");


let a2: HtmlElement = new HtmlElement("a", false, "More...");
    a2.settingAttribute("href", "https://www.lipsum.com");
a2.settingAttribute("target", "_blank");

wrapper.addingItemToBeginning(div1);
wrapper.addingItemToEnd(div2);
div1.addingItemToBeginning(h3_1);
div1.addingItemToEnd(img_1);
div1.addingItemToEnd(p1);
p1.addingItemToEnd(a1);

div2.addingItemToBeginning(h3_2);
div2.addingItemToEnd(img_2);
div2.addingItemToEnd(p2);
p2.addingItemToEnd(a2);

let str = wrapper.getHtml();
document.write(str);


let contentElement = document.getElementById("content");
contentElement.innerHTML = str;

});


