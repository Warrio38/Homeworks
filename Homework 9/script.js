const obj = {name: 'Alina', age: 23, adress: { country: 'UA', city: 'Kyiv'}} 
function copy(object) {
  let retObj = {};
  for(let objectKeys in obj){
    retObj[objectKeys] = object[objectKeys];
  }
  return retObj;
}
const objCopy = copy(obj) 
console.log(objCopy)