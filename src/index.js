"use strict";
exports.__esModule = true;
/// <reference types="@types/google.maps" />
var User_1 = require("./User");
var Company_1 = require("./Company");
var CustomMap_1 = require("./CustomMap");
// @ts-ignore
var user = new User_1.User();
var company = new Company_1.Company();
var customMap = new CustomMap_1.CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);
//# sourceMappingURL=index.js.map