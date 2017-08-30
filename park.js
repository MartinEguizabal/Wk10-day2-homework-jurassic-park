var Park = function(){
  this.enclosure = [];
}

  Park.prototype.addDinosaur = function(dinosaur){
    this.enclosure.push(dinosaur);
  }

  Park.prototype.countDinosaurs = function(){
    return this.enclosure.length;
  }

  Park.prototype.countDinosaursByType = function(type){
    var dinosaurType = [];

    for(var i = 0; i < this.enclosure.length; i++){
      if(this.enclosure[i].type === type){
        dinosaurType.push(this.enclosure[i]);
      }
    }
    return dinosaurType.length;
  }

  Park.prototype.removeDinosaursByType = function(type){
    // for(var i = 0; i < this.enclosure.length; i++){
      for( var i = this.enclosure.length - 1; i > -1; i--){
      if(this.enclosure[i].type === type){
        this.enclosure.splice([i], 1);
      }
    }
  }

  Park.prototype.getDinosaursOffsping2Plus = function(){
    var offspring2Plus = [];

    for(var i = 0; i < this.enclosure.length; i++){
      if(this.enclosure[i].offspring >= 2){
        offspring2Plus.push(this.enclosure[i]);
      }
    }
    return offspring2Plus.length;
  }

  Park.prototype.dinosaurOffspring = function(years){
    var allTheDinosaurTypes = [];
    var offspring = {};
    totalOffspring = 0;

    for(var i = 0; i < this.enclosure.length; i++){
        allTheDinosaurTypes.push(this.enclosure[i].type);
      }
    for(var dType = 0; dType < allTheDinosaurTypes.length; dType++){
      numberByType = this.countDinosaursByType[dType];
      numberOfOffspring = allTheDinosaurTypes[dType].offspring;

      offspring[dType] = (numberByType * numberOfOffspring * years);
    }

    for(dinosaurType in offspring){
      totalOffspring += offspring[key];
    }


    
  }

  module.exports = Park;