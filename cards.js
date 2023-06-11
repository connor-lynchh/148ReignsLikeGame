
firstCard = {
  prompt: "what is paint???",
  rightChoiceText: "I like paint",
  rightChoice: function(){
    addResource("panda happiness", 20)
    addPackToDeck("petOwner")
    addToTopDeck("VanGoghHappy")
    },
  
  leftChoiceText: "PAINTING SUCKS", 
  leftChoice: function(){
    addResource("fox happiness", 20)
    addPackToDeck("petOwner")
   addToTopDeck("VanGoghBetrayed")
    enemiesMade += 1;
  },
  name: "Van Gogh",
  resultText: "",
  image: "./images/turtle.jpg",
  priority: 2,
  pack : "petOwner"
}


cardPool = {
  "uniqueIDList" : ["VanGoghHappy", "VanGoghBetrayed","hamburger","hotdog"],
  
  "VanGoghHappy" : {
    prompt: "Really? Let's be friends",
    rightChoiceText: "Lol Okay",
      rightChoice: function(){
      addResource("panda happiness", 10)
      },
    leftChoiceText: "XD HAHA. . .No", 
    leftChoice: function(){
      addResource("fox happiness", 20)
      addToTopDeck("VanGoghBetrayed")
    enemiesMade += 1;
    },
    name: "Van Gogh",
    resultText: "",
    image: "./images/VanGosh.png",
    priority: 2,
    pack : "none"
  },


  "VanGoghBetrayed": {
    prompt: "To Heck with you",
    rightChoiceText: ". . . ",
      rightChoice: function(){
      addResource("panda happiness", 20)
      addToTopDeck("hamburger")
      },
    leftChoiceText: "Fine. . . ", 
    leftChoice: function(){
      addResource("fox happiness", 100)
    },
    name: "Van Gogh",
    resultText: "",
    image: "./images/VanGosh.png",
    priority: 2,
    pack : "none"
  },

    "hamburger" : {
    prompt: "Really? Let's be friends",
    rightChoiceText: "Lol Okay",
      rightChoice: function(){
      addResource("panda happiness", 10)
      },
    leftChoiceText: "XD HAHA. . .No", 
    leftChoice: function(){
      addResource("fox happiness", 20)
      addToTopDeck("hotdog")
    enemiesMade += 1;
    },
    name: "Van Gogh",
    resultText: "",
    image: "./images/VanGosh.png",
    priority: 2,
    pack : "none"
  },

  "hotdog" : {
    prompt: "Really? Let's be friends",
    rightChoiceText: "Lol Okay",
      rightChoice: function(){
      addResource("panda happiness", 10)
      },
    leftChoiceText: "XD HAHA. . .No", 
    leftChoice: function(){
      addResource("fox happiness", 20)
      //addToTopDeck("VanGoghBetrayed")
    enemiesMade += 1;
    },
    name: "Van Gogh",
    resultText: "",
    image: "./images/fox.png",
    priority: 2,
    pack : "none"
  },


}




