"use strict";
exports.__esModule = true;
exports.Company = void 0;
// @ts-ignore
var faker_1 = require("faker");
var Company = /** @class */ (function () {
    function Company() {
        this.companyName = faker_1["default"].company.companyName();
        this.catchPhrase = faker_1["default"].company.catchPhrase();
        this.location = {
            lat: parseFloat(faker_1["default"].address.latitude()),
            lng: parseFloat(faker_1["default"].address.longitude())
        };
    }
    Company.prototype.markerContent = function () {
        return "\n     <div>\n        <h1>Company Name: " + this.companyName + "</h1>\n        <h3>Comapny Phrase: " + this.catchPhrase + "</h3>\n    </div>\n        ";
    };
    return Company;
}());
exports.Company = Company;
//# sourceMappingURL=Company.js.map