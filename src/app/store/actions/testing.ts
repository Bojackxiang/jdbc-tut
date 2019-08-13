import { Action } from '@ngrx/store';

export const SWITCH_STATUS = 'SWITCH_STATUS';

export class SwitchStatus{
    readonly type = SWITCH_STATUS;
    constructor(public payload: boolean){}
}

export type Action = SwitchStatus;