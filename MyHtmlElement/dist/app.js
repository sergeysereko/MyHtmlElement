var HtmlElement = /** @class */ (function () {
    function HtmlElement(name, closing, content) {
        this.tagName = name;
        this.tagClosing = closing;
        this.textContent = content;
        this.arrayAttributes = [];
        this.arrayStyles = [];
        this.arrayOfNested = [];
    }
    HtmlElement.prototype.settingAttribute = function (attributeName, attributeSetting) {
        if (!this.arrayAttributes) {
            this.arrayAttributes = [];
        }
        var attributeString = "".concat(attributeName, "=\"").concat(attributeSetting, "\"");
        this.arrayAttributes.push(attributeString);
    };
    HtmlElement.prototype.settingStyle = function (styleName, styleSetting) {
        if (!this.arrayStyles) {
            this.arrayStyles = [];
        }
        var styleString = "".concat(styleName, ": ").concat(styleSetting, ";");
        this.arrayStyles.push(styleString);
    };
    HtmlElement.prototype.addingItemToEnd = function (addElementToEnd) {
        if (!this.arrayOfNested) {
            this.arrayOfNested = [];
        }
        this.arrayOfNested.push(addElementToEnd);
    };
    HtmlElement.prototype.addingItemToBeginning = function (addElementToEnd) {
        if (!this.arrayOfNested) {
            this.arrayOfNested = [];
        }
        this.arrayOfNested.unshift(addElementToEnd);
    };
    HtmlElement.prototype.getHtml = function () {
        var html = "<".concat(this.tagName);
        if (this.arrayAttributes) {
            html += " ".concat(this.arrayAttributes.join(' '));
        }
        if (this.arrayStyles) {
            html += " style=\"".concat(this.arrayStyles.join(' '), "\"");
        }
        if (this.tagClosing) {
            html += ">".concat(this.textContent, "</").concat(this.tagName, ">");
        }
        else {
            html += '>';
        }
        for (var _i = 0, _a = this.arrayOfNested; _i < _a.length; _i++) {
            var child = _a[_i];
            html += child.getHtml();
        }
        return html;
    };
    return HtmlElement;
}());
/// <reference path="Scripts/typings/jquery/jquery.d.ts"/>
document.addEventListener("DOMContentLoaded", function () {
    var wrapper = new HtmlElement("div", false, "");
    wrapper.settingAttribute("id", "wrapper");
    wrapper.settingStyle("display", "flex");
    var div1 = new HtmlElement("div", false, "");
    div1.settingStyle("width", "300px");
    div1.settingStyle("margin", "10px");
    var h3_1 = new HtmlElement("h3", false, "What is Lorem Ipsum?");
    var img_1 = new HtmlElement("img", true, "");
    img_1.settingStyle("width", "100%");
    img_1.settingAttribute("src", "img/lipsum.jpg");
    img_1.settingAttribute("alt", "Lorem Ipsum");
    var p1 = new HtmlElement("p", false, "Lorem Ipsum is simply dummy text of the printing \nand typesetting industry.Lorem Ipsum has been the industrys standard dummy text \never since the 1500s, when an unknown printer took a galley of type \nand scrambled it to make a type specimen book.");
    p1.settingStyle("text-align", "justify");
    var a1 = new HtmlElement("a", false, "More ...");
    a1.settingAttribute("href", "https://www.lipsum.com");
    a1.settingAttribute("target", "_blank");
    var div2 = new HtmlElement("div", false, "");
    div2.settingStyle("width", "300px");
    div2.settingStyle("margin", "10px");
    var h3_2 = new HtmlElement("h3", false, "What is Lorem Ipsum?");
    var img_2 = new HtmlElement("img", true, "");
    img_2.settingStyle("width", "100%");
    img_2.settingAttribute("src", "img/lipsum.jpg");
    img_2.settingAttribute("alt", "Lorem Ipsum");
    var p2 = new HtmlElement("p", false, "Lorem Ipsum is simply dummy text of the printing \nand typesetting industry.Lorem Ipsum has been the industrys standard dummy text \never since the 1500s, when an unknown printer took a galley of type \nand scrambled it to make a type specimen book.");
    p2.settingStyle("text-align", "justify");
    var a2 = new HtmlElement("a", false, "More...");
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
    var str = wrapper.getHtml();
    document.write(str);
    var contentElement = document.getElementById("content");
    contentElement.innerHTML = str;
});
