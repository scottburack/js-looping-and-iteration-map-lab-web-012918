// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(function (ele) {return ele.toLowerCase()})
}

function nameToAttributes(drivers) {
  return drivers.map(function (name) {
    return {firstName: name.split(' ')[0], lastName: name.split(' ')[1]}
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return (`${driver.name} is from ${driver.hometown}`)
  })
}
