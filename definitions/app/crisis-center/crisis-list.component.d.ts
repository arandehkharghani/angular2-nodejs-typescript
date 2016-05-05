import { OnInit } from 'angular2/core';
import { Crisis, CrisisService } from './crisis.service';
import { Router, RouteParams } from 'angular2/router';
export declare class CrisisListComponent implements OnInit {
    private _service;
    private _router;
    crises: Crisis[];
    private _selectedId;
    constructor(_service: CrisisService, _router: Router, routeParams: RouteParams);
    isSelected(crisis: Crisis): boolean;
    ngOnInit(): void;
    onSelect(crisis: Crisis): void;
}
