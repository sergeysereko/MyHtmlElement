var MyHtmlElement = /** @class */ (function () {
    function MyHtmlElement(name, closing, content) {
        this.tagName = name;
        this.tagClosing = closing;
        this.textContent = content;
    }
    MyHtmlElement.prototype.settingAttribute = function (attributeName, attributeSetting) {
        // ���������, ���� �� � �������� ��� ������ ���������, � ������� ���, ���� ��� ���
        if (!this.arrayAttributes) {
            this.arrayAttributes = [];
        }
        // ��������� ������ ��� ��������
        var attributeString = "".concat(attributeName, "=\"").concat(attributeSetting, "\"");
        // ����� ������� � ������
        this.arrayAttributes.push(attributeString);
    };
    MyHtmlElement.prototype.settingStyle = function (styleName, styleSetting) {
        // ������� ������ ����� � ��������� �� � ������
        var styleString = "".concat(styleName, ": ").concat(styleSetting, ";");
        this.arrayStyles.push(styleString);
    };
    MyHtmlElement.prototype.addingItemToEnd = function (addElementToEnd) {
        // ��������� �������� ������� � ����� ������� arrayOfNested
        this.arrayOfNested.push(addElementToEnd);
    };
    MyHtmlElement.prototype.addingItemToBeginning = function (addElementToEnd) {
        // ��������� �������� ������� � ������ ������� arrayOfNested
        this.arrayOfNested.unshift(addElementToEnd);
    };
    MyHtmlElement.prototype.getHtml = function () {
        var html = "<".concat(this.tagName);
        // ��������� ��������, ���� ��� ����
        if (this.arrayAttributes) {
            html += " ".concat(this.arrayAttributes.join(' '));
        }
        // ��������� �����, ���� ��� ����
        if (this.arrayStyles) {
            html += " style=\"".concat(this.arrayStyles.join(' '), "\"");
        }
        // ��������� ����������� ��� ��� ��������� ����������� ���
        if (this.tagClosing) {
            html += ">".concat(this.textContent, "</").concat(this.tagName, ">");
        }
        else {
            html += '>';
        }
        // ���������� HTML-��� ��� �������� ���������
        for (var _i = 0, _a = this.arrayOfNested; _i < _a.length; _i++) {
            var child = _a[_i];
            html += child.getHtml();
        }
        return html;
    };
    return MyHtmlElement;
}());
var Mywrapper = new MyHtmlElement("div", false, "");
Mywrapper.settingAttribute("id", "wrapper");
Mywrapper.settingStyle("display", "flex");
var div1 = new MyHtmlElement("div", false, "");
div1.settingStyle("width", "300px");
div1.settingStyle("margin", "10px");
var h3_1 = new MyHtmlElement("h3", false, "��� ����� Lorem Ipsum?");
var img_1 = new MyHtmlElement("img", true, "");
img_1.settingStyle("width", "100%");
img_1.settingAttribute("alt", "lipsum.jpg");
img_1.settingAttribute("alt", "Lorem Ipsum");
var p1 = new MyHtmlElement("p", false, 'Lorem Ipsum - ��� �����-"����", ����� ������������ � ������ � ���-�������. Lorem Ipsum �������� ����������� "�����" ��� ������� �� �������� � ������ XVI ����. � �� ����� ����� ���������� �������� ������ ������� ��������� �������� � ���� �������, ��������� Lorem Ipsum ��� ���������� ��������. Lorem Ipsum �� ������ ������� ������� ��� �������� ��������� ���� �����, �� � ���������� � ����������� ������. ��� ������������� � ����� ����� ��������� ���������� ������ Letraset � ��������� Lorem Ipsum � 60-� ����� �, � ����� �������� �����, ��������� ����������� ������ ���� Aldus PageMaker, � �������� ������� ������������ Lorem Ipsum.');
p1.settingStyle("text-align", "justify");
var a1 = new MyHtmlElement("a", false, "More ...");
a1.settingAttribute("href", "hhtps://www.lipsum.com");
a1.settingAttribute("target", "_blank");
var div2 = new MyHtmlElement("div", false, "");
div2.settingStyle("width", "300px");
div2.settingStyle("margin", "10px");
var h3_2 = new MyHtmlElement("h3", false, "��� ����� Lorem Ipsum?");
var img_2 = new MyHtmlElement("img", true, "");
img_2.settingStyle("width", "100%");
img_2.settingAttribute("src", "lipsum.jpg");
img_2.settingAttribute("alt", "Lorem Ipsum");
var p2 = new MyHtmlElement("p", false, 'Lorem Ipsum - ��� �����-"����", ����� ������������ � ������ � ���-�������. Lorem Ipsum �������� ����������� "�����" ��� ������� �� �������� � ������ XVI ����. � �� ����� ����� ���������� �������� ������ ������� ��������� �������� � ���� �������, ��������� Lorem Ipsum ��� ���������� ��������. Lorem Ipsum �� ������ ������� ������� ��� �������� ��������� ���� �����, �� � ���������� � ����������� ������. ��� ������������� � ����� ����� ��������� ���������� ������ Letraset � ��������� Lorem Ipsum � 60-� ����� �, � ����� �������� �����, ��������� ����������� ������ ���� Aldus PageMaker, � �������� ������� ������������ Lorem Ipsum.');
var a2 = new MyHtmlElement("a", false, "More...");
a2.settingAttribute("href", "https://www.lipsum.com");
a2.settingAttribute("target", "_blank");
Mywrapper.addingItemToBeginning(div1);
Mywrapper.addingItemToEnd(div2);
div1.addingItemToBeginning(h3_1);
div1.addingItemToEnd(img_1);
div1.addingItemToEnd(p1);
p1.addingItemToEnd(a1);
div2.addingItemToBeginning(h3_2);
div2.addingItemToEnd(img_2);
div2.addingItemToEnd(p2);
p2.addingItemToEnd(a2);
var str = Mywrapper.getHtml();
document.write(str);
// ������� ������� � id "content"
var contentElement = document.getElementById("content");
// �������� ��������������� HTML-��� � �������
contentElement.innerHTML = str;
//# sourceMappingURL=app.js.map