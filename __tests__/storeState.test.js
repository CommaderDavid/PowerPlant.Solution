import { stateControl, changeState } from "./../src/plantState.js";

describe('stateControl', () => {
    let newState = stateControl;

    test('should show the empty states of the plants', () => {
        let newWater = changeState("water")(0);
        newState = stateControl(newWater);
        expect(newState).toEqual({ water: 0 });
    });

    test('should show the states incrementing for the plants on button push', () => {
        let goodWater = changeState("water")(5);
        newState = stateControl(goodWater);
        expect(newState).toEqual({ water: 5 });
    });
});

