export declare class Crisis {
    id: number;
    name: string;
    constructor(id: number, name: string);
}
export declare class CrisisService {
    getCrises(): Promise<Crisis[]>;
    getCrisis(id: number | string): Promise<Crisis>;
    static nextCrisisId: number;
    addCrisis(name: string): void;
}
