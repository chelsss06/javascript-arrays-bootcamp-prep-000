var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array(4), element) {
  
  [element, ...chocolateBars]
  
  return chocolateBars
  
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  
  chocolateBars.unshift(element)
  
  return chocolateBars
  
}
