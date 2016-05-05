import { OnInit } from 'angular2/core';
import { Hero, HeroService } from './hero.service';
import { RouteParams, Router } from 'angular2/router';
export declare class HeroDetailComponent implements OnInit {
    private _router;
    private _routeParams;
    private _service;
    hero: Hero;
    constructor(_router: Router, _routeParams: RouteParams, _service: HeroService);
    ngOnInit(): void;
    gotoHeroes(): void;
}
