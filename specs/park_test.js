var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js");

describe("Park", function() {

  var park;
  var dinosaur1;
  var dinosaur2;
  var dinosaur3;
  var dinosaur4;
  var dinosaur5;

  beforeEach(function(){
    park = new Park();
    dinosaur1 = new Dinosaur("Tyrannosaurus", 2);
    dinosaur2 = new Dinosaur("Velociraptor", 6);
    dinosaur3 = new Dinosaur("Triceratops", 3);
    dinosaur4 = new Dinosaur("Tyrannosaurus", 1);
    dinosaur5 = new Dinosaur("Velociraptor", 6);
  });

  it("count starts at 0", function(){
    assert.strictEqual(park.countDinosaurs(), 0);
  })

  it("can add dinosaur to enclosure", function(){
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.countDinosaurs(), 1);
  })

  it("can find dinosaur of given type", function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur4);
    assert.strictEqual(park.countDinosaursByType("Tyrannosaurus"), 2);
  })

  it("remove dinosaurs of particular type", function(){
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur5);
    park.removeDinosaursByType("Velociraptor");
    assert.strictEqual(park.countDinosaursByType("Velociraptor"), 0);
    // assert.strictEqual(park.countDinosaurs(), 0);
  })

  it("get dinosaurs with offspring count of +2", function(){
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    assert.strictEqual(park.getDinosaursOffsping2Plus(), 2);
  })

  it("get dinosaurs after one year with 1 dinosaur", function(){
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.dinosaurOffspring(1), 2);
  })
})