var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, element) {
  
  [element, ...chocolateBars]
  
  return chocolateBars
  
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element) {
  
  chocolateBars.unshift(element)
  
  return chocolateBars
  
}

function addElementToEndOfArray(chocolateBars, element) {
  
  [...chocolateBars, element]
  
  return chocolateBars
  
}

function destructivelyAddElementToEndOfArray(chocolateBars, element) {
  
  chocolateBars.push(element)
  
  return chocolateBars
  
}

function accessElementInArray(chocolateBars, index) {
  
  return chocolateBars[3]
  
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  
  chocolateBars.shift()
  
  return chocolateBars
  
}

