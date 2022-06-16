/**
 * Direction:
 * Find all fields that have different value & must can detect all field dynamically
 *
 * Expected Result:
 * ['firstName', 'lastName']
 *
 */
 const data = [
    { firstName: 'Adi', lastName: 'Nugroho', age: 25 },
    { firstName: 'Deddy', lastName: 'Dores', age: 25 },
  ];
  
  function result(data) {
    let result = [];
    let checkFN = data[0].firstName;
    let checkLN = data[0].lastName;
    let checkA = data[0].age;
    
    for(let i = 1; i < Object.getOwnPropertyNames(data).length-1; i++){
        if (checkFN != data[i].firstName){
            result.push('firstName');
        } 
        if (checkLN != data[i].lastName){
            result.push('lastName');
        }
        if (checkA != data[i].age){
            result.push('age');
        }
    }
    return result;
    }

//console.log();
  console.log(result(data));