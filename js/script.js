var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var upperDinosaur = dinosaur.toUpperCase();
console.log(upperDinosaur);

var replaceText = text.replace('Velociraptor', upperDinosaur);
console.log(text.length);

var partOfreplaceText = replaceText.slice(0,72);

console.log(partOfreplaceText);