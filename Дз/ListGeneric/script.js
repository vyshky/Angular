var List = /** @class */ (function () {
    function List() {
        var _this = this;
        this.arr = [];
        this.Lenght = function () {
            return _this.arr.length;
        };
    }
    List.prototype.Add = function (param) {
        if ("" === param) {
            return;
        }
        if (null === param) {
            return;
        }
        if (undefined === param) {
            return;
        }
        this.arr.push(param);
    };
    List.prototype.Remove = function (param) {
        var index = this.arr.indexOf(param, 0);
        if (index < 0) {
            return;
        }
        this.arr.splice(0, 1);
    };
    List.prototype.Contains = function (param) {
        return this.arr.includes(param);
    };
    List.prototype.Get = function () {
        return this.arr;
    };
    List.prototype.printArr = function () {
        console.log(this.arr);
    };
    return List;
}());
var list = new List();
list.Add("Привет");
list.Add("Мир");
list.Add(":D");
list.Add("1");
list.Add("2");
list.Add("3");
var IsContains = list.Contains("Привет");
if (IsContains) {
    list.Remove("Привет");
}
console.log(list.Lenght());
list.printArr();
