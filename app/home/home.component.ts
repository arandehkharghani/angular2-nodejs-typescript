declare var io : {
    connect(url?: string): Socket;
}
interface Socket {
    on(event: string, callback: (data: any) => void );
    emit(event: string, data: any);
}


import { Component  } from "angular2/core";
import {NgFor, NgSwitch, NgSwitchWhen} from "angular2/common";
import { Http, Headers, RequestOptions } from "angular2/http";
import 'rxjs/add/operator/map'

import {HomeService} from './home.service';
import {ChatMessage} from "./message";
import {ChatLogin} from "./login";
import {ChatInput} from "./input";

@Component({
    directives: [NgSwitch, NgSwitchWhen, NgFor,
        ChatMessage, ChatInput, ChatLogin],
    providers:[HomeService],    
    selector: "home",
    templateUrl:'<h1>hello</h1>'
    // config.templateUrl + `home/home.html` 
})
export class HomeComponent {
    userName: string;
    messages: any[];
    response: any;
    data: any;
    error: any;
    user: any = {
        password: "angualr2express",
        username: "john"
    };
    constructor(private http: Http) {
    }
    
    onMessage(message: string) {
        this.http.post("/api/messages/create", JSON.stringify({ user: this.userName, text: message }), new RequestOptions({
            headers: new Headers({ "Content-Type": "application/json" })
        }))
            .map((res: any) => res.json())
            .subscribe(
            (res: any) => {
                this.response = res;
            },
            (error: any) => {
                console.log(error.json());
            }
            );
    }

    onLogin(username: string) {
        this.userName = username;
        
        //this.messages = await(await fetch("/api/messages")).json();

        this.http.get("/api/messages")
            .map(res => res.json())
            .subscribe(
                res => this.data = res,
                err => this.error = err.json()
            );


        let socket = io.connect();
        
        socket.on('connect', function(data) {
            socket.emit('join', 'Hello World from client');
        });
                
        socket.on("message", message => {
            console.log(message);
            this.messages.push(message)
            console.log("New message:", message);
        });
        
    }



    signup() {

        this.http.post("/login/signup", JSON.stringify({ password: this.user.password, username: this.user.username }), new RequestOptions({
            headers: new Headers({ "Content-Type": "application/json" })
        }))
            .map((res: any) => res.json())
            .subscribe(
            (res: any) => {
                this.response = res;
            },
            (error: any) => {
                console.log(error.json());
            }
            );
    }
    call() {

        delete this.error;
        delete this.data;

        this.http.get("/api", new RequestOptions({
            headers: new Headers({ "Auth": localStorage.getItem("jwt"), "Content-Type": "application/json" })
        }))
            .map((data: any) => data.json())
            .subscribe(
            data => {
                this.data = data;
            },
            error => {
                this.error = error.json();
            }
            );
    }
    login() {
        this.http.post("/login", JSON.stringify({ password: this.user.password }), new RequestOptions({
            headers: new Headers({ "Content-Type": "application/json" })
        }))
            .map((res: any) => res.json())
            .subscribe(
            (res: any) => {
                delete this.error;
                this.data = {
                    text: "You can call protected api now",
                    title: "Login succesfull"
                };

                localStorage.setItem("jwt", res.jwt);
            },
            (error: any) => {
                console.log(error);
            }
            );
    }
    remove() {
        this.error = { message: "JWT removed" };
        delete this.data;
        localStorage.removeItem("jwt");
    }
}