import { changeState, stateControl } from "./plantState";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// We create four functions using our function factory. We could easily create many more.
const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);

const light = changeState("light")(1);
const solarCharge = changeState("light")(5);

$(document).ready(function () {
    $('.states').hide();
    // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
    //Note that we only use one of our functions to alter soil. You can easily add more.
    $('#feed').click(function () {
        const newState = stateControl(feed);
        $('#soil-value').text(`Soil: ${newState.soil}`);
    });

    $('#blueFeed').click(function () {
        const newState = stateControl(blueFood);
        $('#soil-value').text(`Soil: ${newState.soil}`);
    });

    $('#hydrate').click(function () {
        const newState = stateControl(hydrate);
        $('#water-value').text(`Water: ${newState.water}`);
    });

    $('#superHydrate').click(function () {
        const newState = stateControl(superWater);
        $('#water-value').text(`Water: ${newState.water}`);
    });

    $('#light').click(function () {
        const newState = stateControl(light);
        $('#light-value').text(`Light: ${newState.light}`);
    });

    $('#solar').click(function () {
        const newState = stateControl(solarCharge);
        $('#light-value').text(`Light: ${newState.light}`);
    });

    // This function doesn't actually do anything useful in this application - it just demonstrates how
    // we can "look" at the current state (which the DOM is holding anyway). However, students often do
    // need the ability to see the current state without changing it so it's included here for reference.

    $('#show-state').click(function () {
        // We just need to call stateControl() without arguments to see our current state.
        $('.states').show();
        const currentState = stateControl();
        $('#soil-value').text(`Soil: ${currentState.soil}`);
        $('#water-value').text(`Water: ${currentState.water}`);
        $('#light-value').text(`Light: ${currentState.light}`);
    });
});