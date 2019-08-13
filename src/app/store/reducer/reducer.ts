import * as stateAction from '../actions/testing';

let initialState = { currentState: true }

// HOW TO IMPORT ALL ACTIONS AT THIS PART?: solved
export function stateReducer(state = initialState, action: stateAction.Action) {
    switch (action.type) {
        case stateAction.SWITCH_STATUS:
            let newState = { ...state, currentState: action.payload }
            return newState;
        default:
            return state
    }
}