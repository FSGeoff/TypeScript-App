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
    CustomMap.prototype.addMarker = function (canBeMapped) {
        var _this = this;
        var marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: canBeMapped.location.lat,
                lng: canBeMapped.location.lng
            },
        });
        marker.addListener('click', function () {
            var infoWindow = new google.maps.InfoWindow({
                content: canBeMapped.markerContent()
            });
            infoWindow.open(_this.googleMap, marker);
        });
    };
    return CustomMap;
}());
exports.CustomMap = CustomMap;
//# sourceMappingURL=CustomMap.js.map