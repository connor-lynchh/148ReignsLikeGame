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
    image: "./images/manyFoxes.jpg"
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
    image: "./images/manyPandas.jpg"
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
    image: "./images/ManyTurtles.jpg"
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
    image: "./images/manyCorgis.jpg"
  }  
}]

defaultFailCard = {
  prompt: "I know you can take care of these animals. Give it another go",
  rightChoiceText: "oops",
  rightChoice: function(){location.reload();
    },
  
  leftChoiceText: "time to focus", 
  leftChoice: function(){location.reload();
  },
  name: "Narrator",
  image: "./images/wolfLaugh.jpg"
}