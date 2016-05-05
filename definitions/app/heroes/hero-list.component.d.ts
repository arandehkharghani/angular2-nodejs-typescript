import { OnInit } from 'angular2/core';
import { Hero, HeroService } from './hero.service';
import { Router, RouteParams } from 'angular2/router';
export declare class HeroListComponent implements OnInit {
    private _service;
    private _router;
    heroes: Hero[];
    private _selectedId;
    constructor(_service: HeroService, _router: Router, routeParams: RouteParams);
    isSelected(hero: Hero): boolean;
    onSelect(hero: Hero): void;
    ngOnInit(): void;
}
