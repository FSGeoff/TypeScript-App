/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";

export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}

export class CustomMap {
   private readonly googleMap: google.maps.Map;

    constructor(divId : string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
           zoom: 1,
           center: {
               lat: 0,
               lng: 0
           }
        });
    }

    addMarker(canBeMapped: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: canBeMapped.location.lat,
                lng: canBeMapped.location.lng
            },
        });

        marker.addListener('click', ()=> {
            const infoWindow = new google.maps.InfoWindow({
                content: canBeMapped.markerContent();
            });
            infoWindow.open(this.googleMap, marker);
        });
    }


}