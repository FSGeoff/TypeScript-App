"use strict";
exports.__esModule = true;
/// <reference types="@types/google.maps" />
var User_1 = require("./User");
var CustomMap_1 = require("./CustomMap");
// @ts-ignore
var user = new User_1.User();
var customMap = new CustomMap_1.CustomMap('map');
customMap.addUserMarker(user);
//# sourceMappingURL=index.js.map