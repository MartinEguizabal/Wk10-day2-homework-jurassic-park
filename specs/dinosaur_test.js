var assert = require("assert");
var Dinosaur = require("../dinosaur.js");
var Park = require("../park.js");

describe("Dinosaur", function() {

  var dinosaur1;
  var dinosaur2;
  var dinosaur3;
  var dinosaur4;
  var dinosaur5;

  beforeEach(function(){
    dinosaur1 = new Dinosaur("Tyrannosaurus", 2);
    dinosaur2 = new Dinosaur("Velociraptor", 6);
    dinosaur3 = new Dinosaur("Triceratops", 3);
    dinosaur4 = new Dinosaur("Tyrannosaurus", 2);
    dinosaur5 = new Dinosaur("Velociraptor", 6);
  })

})