const callback = () => {}

const receivesAFunction = callback => {callback()}

function returnsANamedFunction() {
    return function named() {
        console.log("nice.")
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("not nice")
    }
}