'use strict';

const zip = (...args) => {
    args = args.filter(arg => typeof arg === "object");
    return Object.assign({}, ...args.reverse())
}