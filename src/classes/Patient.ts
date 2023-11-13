// Patient.ts

export class Patient {
    id: number;
    name: string;
    age: number;
    gender: string;
    avatar: string;

    constructor(id: number, name: string, age: number, gender: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.avatar = '';
    }

    getPatientInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
    }
}
