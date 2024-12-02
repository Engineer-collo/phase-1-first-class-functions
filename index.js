function receivesAFunction(callback) {
  callback()
}

const returnsANamedFunction = () => {
  return function named() {
    console.log("The girl is Arya.")
  }
}

const returnsAnAnonymousFunction = () => {
  return function() {
    console.log('The girl has no name.')
  }
}