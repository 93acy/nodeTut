const myfunc = function(a, b, c) {
    const args = Array.from(arguments);
    console.log(args) // [1, 2, 3]
  }
  
  
  console.log(myfunc(1, 2, 3))
  