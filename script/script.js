let folder1 = {
  firstName: "Ulmas",
  lastName: "Khamrakulov",
  age: 29,
  male: true,
  female: false,
  height: 185,
  weight: 80,
  specialSigns: false,
}

console.log(folder1);

let folder2 = {
  firstName: "Malika",
  lastName: "Khamrakulova",
  age: 31,
  skin: "mulatto",
  male: false,
  female: true,
  height: 175,
  weight: 60,
  specialSigns: false,
}

console.log(folder2);

let twoInOne = Object.assign({}, {folder1}, {folder2})

console.log(twoInOne);

let key = Object.keys(twoInOne.folder1)

console.log(key);

let value1 = Object.values(twoInOne.folder1)
let value2 = Object.values(twoInOne.folder2)
let value = value1.concat(value2)

console.log(value);

let mass = key.concat(value)

console.log(mass);

let types = {
  number: [],
  string: [],
  boolean: [],
  object: []
}
for(let i = 0; i < mass.length; i++) {
  if (typeof mass[i] == 'string') {
    types.string.push(mass[i])
  } else if (typeof mass[i] == 'number') {
    types.number.push(mass[i])
  } else if (typeof mass[i] == 'boolean') {
    types.boolean.push(mass[i])
  } else if (typeof mass[i] == 'object') {
    types.object.push(mass[i])
  } else {
  }
}

console.log(types);
