import { OnInit } from 'angular2/core';
import { Crisis, CrisisService } from './crisis.service';
import { RouteParams, Router } from 'angular2/router';
import { CanDeactivate, ComponentInstruction } from 'angular2/router';
import { DialogService } from '../dialog.service';
export declare class CrisisDetailComponent implements OnInit, CanDeactivate {
    private _service;
    private _router;
    private _routeParams;
    private _dialog;
    crisis: Crisis;
    editName: string;
    constructor(_service: CrisisService, _router: Router, _routeParams: RouteParams, _dialog: DialogService);
    ngOnInit(): void;
    routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any;
    cancel(): void;
    save(): void;
    gotoCrises(): void;
}
