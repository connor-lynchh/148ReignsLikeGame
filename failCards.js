failCards = [{
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
    name: "corgis",
    resultText: "",
    image: "./images/manyCorgis.jpg"
  },
  resource:"fox happiness", 
  card: {
    prompt: "You have been overcome by foxes!",
    rightChoiceText: "The Horror",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "The Bliss", 
    leftChoice: function(){location.reload();
    },
    name: "Foxes ",
    resultText: "",
    image: "./images/manyFoxes.jpg"
  },
  resource:"panda happiness",
  card: {
    prompt: "You have been overcome by corgis!",
    rightChoiceText: "The Horror",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "The Bliss", 
    leftChoice: function(){location.reload();
    },
    name: "pandas",
    resultText: "",
    image: "./images/manyPandas.jpg"
  },
  resource:"turtle happiness", 
  card: {
    prompt: "You have been overcome by turtles!",
    rightChoiceText: "The Horror",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "The Bliss", 
    leftChoice: function(){location.reload();
    },
    name: "Turtles",
    resultText: "",
    image: "./images/ManyTurtles.jpg"
  } 

}];


defaultFailCard = {
  prompt: "I know you can take care of these animals. Give it another go",
  rightChoiceText: "oops",
  rightChoice: function(){location.reload();
    },
  
  leftChoiceText: "time to focus", 
  leftChoice: function(){location.reload();
  },
  name: "Narrator",
  resultText: "try again",
  image: "./images/wolfLaugh.jpg"
};
