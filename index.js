var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(element) {
  var Ralph = element
  kittens.push(Ralph)
  return kittens
}

function destructivelyPrependKitten(element) {
  var Ralph = element
  kittens.unshift(Ralph)
  return kittens
}

function destructivelyRemoveLastKitten(element) {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(element) {
  kittens.shift()
  return kittens
}

