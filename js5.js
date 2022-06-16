/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 * 
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
 const students = [
    { firstName: 'Kai', lastName: 'Lyons' },
    { firstName: 'Belle', lastName: 'Norton' },
    { firstName: 'Finnley', lastName: 'Rennie' },
    { firstName: 'Tatiana', lastName: 'Dickerson' },
    { firstName: 'Peyton', lastName: 'Gardner' },
    { firstName: 'Zeyton', lastName: 'Gardner' },
  ];
  const groups = 3;
  
  function result(students, groups) {
    // your code here
    students.sort((a,b) => (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0))
    
    let result = [];
    let len = Object.getOwnPropertyNames(students).length-1;
    let current = (len/groups).toFixed(0);
    let totalStud = 0;
    for(let i = 1; i <= groups; i++){  
        let groupsD = [];
        for(let j = 0; j < current; j++){    
            groupsD.push(students[totalStud]);
            totalStud++;
            if(totalStud == len){
                break;
            }
        }
        result.push(groupsD);  
        if(totalStud == len){
            break;
        }
          
    }
    
    
    return result;
  }
  
  console.log(result(students, groups));