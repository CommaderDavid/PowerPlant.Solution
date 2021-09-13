export function plant(power) {
    return function (total) {
        return Math.trunc(total + power);
    }
}