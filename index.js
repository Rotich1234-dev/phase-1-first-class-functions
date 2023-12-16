function receivesAFunction(callback) {
    // It calls the provided callback function
    callback();
  }
  function returnsANamedFunction() {
    return function named(){
        console.log
        ("Named funtion");
    };
  }
  function returnsAnAnonymousFunction() {
    return function(){
        console.log("This returns an AnonymousFunction");
    };
  }