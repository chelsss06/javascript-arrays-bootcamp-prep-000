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
  
  [...chocolateBars, element)
  
  return chocolateBars
  
}


