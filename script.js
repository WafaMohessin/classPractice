
console.log(this) // window

var planet= {
    name: "earth",
    age: "4.234 billion years",
    moons: 1,
    continents: ['America','Asia','Afica', {test:3}],
    supportsLife: true,
    //Occeans: { IndianOceani: {...console.}},
    "has + a magnatic feild": true,
    
    
    //method

logFacts:function(){
    console.log(this.name)
    console.log(this.age) //
},

    tellFun: function() {
        console.log ("the earth is the only planet.");
    }, 
    showAlert: function() {
        console.log ("the sun is ");
    }

}

var Mars = {
    name: 'mars',
    logFacts: function(){
        console.log(this.name)
    },
}

planet.logFacts()
Mars. logFacts()