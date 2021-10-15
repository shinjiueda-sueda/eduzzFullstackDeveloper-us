function getName() {
  return 'Guilherme Cabrini da Silva';
}

function logFn(fn) {
  console.log(fn());
}

const logFnResult = logFn;

//const obj = {
  //logFn: logFn
//}
//
//const arr = [logFn]

logFnResult(getName);

//conceitos de funções de primeira classe para

