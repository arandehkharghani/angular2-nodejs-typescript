export declare class Hero {
    id: number;
    name: string;
    constructor(id: number, name: string);
}
export declare class HeroService {
    getHeroes(): Promise<Hero[]>;
    getHero(id: number | string): Promise<Hero>;
}
