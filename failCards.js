failCards = [{
  resource:"fox happiness", 
  level: "high", 
  card: {
    prompt: "You have been overcome by foxes!",
    rightChoiceText: "The Horror",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "The Bliss", 
    leftChoice: function(){location.reload();
    },
    name: "VeggieDoom ",
    resultText: "",
    image: "./images/legumes.jpg"
  }  ,

  resource:"panda happiness", 
  level: "high", 
  card: {
    prompt: "You have been overcome by pandas!",
    rightChoiceText: "The Horror",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "The Bliss", 
    leftChoice: function(){location.reload();
    },
    name: "VeggieDoom ",
    resultText: "",
    image: "./images/legumes.jpg"
  }  ,

  resource:"turtle happiness", 
  level: "high", 
  card: {
    prompt: "You have been overcome by turtles!",
    rightChoiceText: "The Horror",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "The Bliss", 
    leftChoice: function(){location.reload();
    },
    name: "VeggieDoom ",
    resultText: "",
    image: "./images/legumes.jpg"
  }  ,

  resource:"corgi happiness", 
  level: "high", 
  card: {
    prompt: "You have been overcome by corgis!",
    rightChoiceText: "The Horror",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "The Bliss", 
    leftChoice: function(){location.reload();
    },
    name: "VeggieDoom ",
    resultText: "",
    image: "./images/legumes.jpg"
  }  
}]

defaultFailCard = {
  prompt: "I don't know what you did wrong, but it was something",
  rightChoiceText: "oops",
  rightChoice: function(){location.reload();
    },
  
  leftChoiceText: "PAINTING SUCKS", 
  leftChoice: function(){location.reload();
  },
  name: "Narrator",
  resultText: "You made a mistake",
  image: "./images/legumes.jpg"
}