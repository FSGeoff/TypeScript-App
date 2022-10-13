//import { faker } from "@faker-js/faker";
// @ts-ignore
import faker from 'faker';

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor(props) {
    this.name = faker.name.firstName();
    this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude())
    }

    }

}