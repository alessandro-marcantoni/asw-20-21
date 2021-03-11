// The objects will be exposed to everyone calls the require of this module.
exports = module.exports = {
    a: 1,
    b: 2
}

exports.c = 3;

exports.greet = () => {
    console.log("Hello from module!");
}