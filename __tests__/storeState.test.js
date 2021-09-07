import { stateControl, changeState } from "./../src/plantState.js";

describe('stateControl', () => {
    const newState = stateControl;

    test('should show the empty states of the plants', () => {
        var newWater = changeState("water")(0);
        newState = stateControl(newWater)
        expect(newState).toEqual(0);
    });
});

