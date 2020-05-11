function list(names = []){
    return names.map(ele=>ele["name"]).join(", ").replace(/,\s+(?=\w+$)/g," & ");
}

console.log(list([]));
console.log(list([ {name: 'Bart'}]));
console.log(list([ {name: 'Bart'}, {name: 'Lisa'}]));
console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));
console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Maggie'} ]));
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));