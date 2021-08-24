
class Wagon{
    constructor (capacidade){
        this.capacity =capacidade;
        this.passageiros=[];
        this.quarentena = false;
        this.totalFoods =0;
    }

   join(name){
      if(this.capacity>0){
          
          this.passageiros.push(name);
           return this.capacity-=1

        }else
        console.log("o individo não pode embarcar");
  }
    getAvailableSeatCount(){
    return  this.capacity;
    }
    shouldQuarantine(){
      for(let contador=0; contador<this.passageiros.length;contador++){
        if(this.passageiros[contador].isHealthy===false){
          return true;
        }
      }
  }
  totalFood(){
    this.totalFoods =0;
    for(let contador=0; contador<this.passageiros.length;contador++){
     this.totalFoods += this.passageiros[contador].food;
    }
    return this.totalFoods;
  }  
}
    


class Traveler{
    constructor (nome){
        this.name= nome;
        this.food =1;
        this.isHealthy=true;
     
    } 
     get isHealthy(){
      if(this.food>0){
        return this.isHealthy = true; ;
       }else if(this.food===0){
         return this.isHealthy = false;}
  
    }
    set  isHealthy(healt){
      this._isHealthy = healt;
    }
    hunt(){
      this.food+=2
      console.log(this.name+" pega mais comida total: "+this.food);
      return this.food;
    }

    eat(){
       if(this.food===0){
       
        console.log(this.name+" agora está com fome (doente)")
       return this.food;
    }else if(this.food>0){
      
      return this.food-=1;
    }

  } 

}




// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

 console.log(`${wagon.getAvailableSeatCount()} should be 2`);

 wagon.join(henrietta);
 console.log(`${wagon.getAvailableSeatCount()} should be 1`);

 wagon.join(juan);
 wagon.join(maude); // Não tem espaço para ela!
 console.log(`${wagon.getAvailableSeatCount()} should be 0`);

 henrietta.hunt(); // pega mais comida
 juan.eat();
 juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);

console.log(`${wagon.totalFood()} should be 3`);