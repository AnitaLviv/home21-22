"use strict";

/*var dom = {
    //fields
    divText      : "Тест по програмуванню",
    parText      : ". Запитання № ",
    labelText    : "Варіант відповіді № ",
    buttonText   : "Перевірити мої результат",
    

    
    addBR        : function () {
        document.body.appendChild(document.createElement('br'));
    },

    addCheckBox  : function () {
        for (var i = 1; i <= 3; i += 1) {
            var input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
            var text = this.labelText + i;
            document.body.appendChild(input);
            document.body.appendChild(document.createTextNode(text));
            this.addBR();
        }
    },


    addParagraph : function () {
        for (var i = 1; i <= 3; i += 1) {
            var p = document.createElement('p');
            p.innerHTML = "<p>" + i  + this.parText + i + "</p>";
            document.body.appendChild(p);
            this.addCheckBox();
            this.addBR();
            this.addBR();
        }
    },

    addButton    : function () {
        var button = document.createElement('button');
        button.innerHTML = this.buttonText;
        this.addBR();
        document.body.appendChild(button);
    },

    addDiv       : function () {
        var div = document.createElement('div');
        div.innerHTML = '<h1>'+ this.divText  +  '</h1>';
        document.body.appendChild(div);
    }
    


};

dom.addDiv();
dom.addParagraph();
dom.addButton();*/

var dom = {
    //fields ES6
    divText: "Тест по програмуванню",
    parText: ". Запитання № ",
    labelText: "Варіант відповіді № ",
    buttonText: "Перевірити мої результат",

    addBR: function addBR() {
        document.body.appendChild(document.createElement('br'));
    },
    addCheckBox: function addCheckBox() {
        for (var i = 1; i <= 3; i += 1) {
            var input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
            var text = this.labelText + i;
            document.body.appendChild(input);
            document.body.appendChild(document.createTextNode(text));
            this.addBR();
        }
    },
    addParagraph: function addParagraph() {
        for (var i = 1; i <= 3; i += 1) {
            var p = document.createElement('p');
            p.innerHTML = "<p>" + i + this.parText + i + "</p>";
            document.body.appendChild(p);
            this.addCheckBox();
            this.addBR();
            this.addBR();
        }
    },
    addButton: function addButton() {
        var button = document.createElement('button');
        button.innerHTML = this.buttonText;
        this.addBR();
        document.body.appendChild(button);
    },
    addDiv: function addDiv() {
        var div = document.createElement('div');
        div.innerHTML = "<h1>" + this.divText + "</h1>";
        document.body.appendChild(div);
    }
};

dom.addDiv();
dom.addParagraph();
dom.addButton();