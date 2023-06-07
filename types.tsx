export interface User {
    racers: Racer[];
}

export interface Racer {
    name: string;
    length: number;
    color: string;
    weight: number;
}
