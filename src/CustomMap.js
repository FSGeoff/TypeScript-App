"use strict";
exports.__esModule = true;
exports.CustomMap = void 0;
var CustomMap = /** @class */ (function () {
    function CustomMap(divId) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
    return CustomMap;
}());
exports.CustomMap = CustomMap;
//# sourceMappingURL=CustomMap.js.map