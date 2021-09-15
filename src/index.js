import { changeState, stateControl } from "./plantState";
import { plant } from "./newPlants";
import $ from "jquery";
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
    const normalPlant = plant(1);
    const normalStrong = plant(4);
    const normalPosion = plant(-3);
    let userSelectedPlant;
    $('#plantSelection').submit(function (e) {
        e.preventDefault();
        const plants = $("#plants").val();
        if (plants == "normal") {
            userSelectedPlant = normalPlant;
            return userSelectedPlant;
        } else if (plants == "super") {
            userSelectedPlant = normalStrong;
            return userSelectedPlant;
        } else if (plants == "posion") {
            userSelectedPlant = normalPosion;
            return userSelectedPlant;
        }
    });
    // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
    //Note that we only use one of our functions to alter soil. You can easily add more.
    $('#feed').click(function () {
        const newState = stateControl(feed);
        const currentPlant = userSelectedPlant(newState.soil);
        $('#soil-value').text(`${currentPlant}`);
    });

    $('#blueFeed').click(function () {
        const newState = stateControl(blueFood);
        const currentPlant = userSelectedPlant(newState.soil);
        $('#soil-value').text(`${currentPlant}`);
    });

    $('#hydrate').click(function () {
        const newState = stateControl(hydrate);
        const currentPlant = userSelectedPlant(newState.water);
        $('#water-value').text(`${currentPlant}`);
    });

    $('#superHydrate').click(function () {
        const newState = stateControl(superWater);
        const currentPlant = userSelectedPlant(newState.water);
        $('#water-value').text(`${currentPlant}`);
    });

    $('#light').click(function () {
        const newState = stateControl(light);
        const currentPlant = userSelectedPlant(newState.light);
        $('#light-value').text(`${currentPlant}`);
    });

    $('#solar').click(function () {
        const newState = stateControl(solarCharge);
        const currentPlant = userSelectedPlant(newState.light);
        $('#light-value').text(`${currentPlant}`);
    });

    // This function doesn't actually do anything useful in this application - it just demonstrates how
    // we can "look" at the current state (which the DOM is holding anyway). However, students often do
    // need the ability to see the current state without changing it so it's included here for reference.

    $('#show-state').click(function () {
        // We just need to call stateControl() without arguments to see our current state.
        $('.states').show();
        const currentState = stateControl();
        $('#soil-value').text(`${currentState.soil}`);
        $('#water-value').text(`${currentState.water}`);
        $('#light-value').text(`${currentState.light}`);
    });
});