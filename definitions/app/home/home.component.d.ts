import { Http } from "angular2/http";
import 'rxjs/add/operator/map';
export declare class HomeComponent {
    private http;
    userName: string;
    messages: any[];
    response: any;
    data: any;
    error: any;
    user: any;
    constructor(http: Http);
    onMessage(message: string): void;
    onLogin(username: string): void;
    signup(): void;
    call(): void;
    login(): void;
    remove(): void;
}
