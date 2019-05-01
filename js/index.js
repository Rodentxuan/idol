

$(document).ready(function() {
 
  setTimeout(function(){
      $('body').addClass('loaded');
      $('h1').css('color','#222222');
  }, 2500);

});

(function() {
  let card = document.getElementById("swiper-card");
  
  //Simulated JSON data
  const cardInfo = [
    {
      "img": "jpg/1.jpg",
      "name": "Jackson Yee",
      "cardInfo": "Jackson Yee is a Chinese singer, dancer and actor."
    },
    {
      "img": "jpg/2.jpg",
      "name": "Turbo Liu",
      "cardInfo": "Liu Haoran, also known as Turbo Liu, is a Chinese actor."
    },
    {
      "img": "jpg/3.jpg",
      "name": "Leo Wu",
      "cardInfo": "Leo Wu is a Chinese actor. He is known as the Nation's Little Brother in China."
    },
    {
      "img": "jpg/4.jpg",
      "name": "Chen Linong",
      "cardInfo": "Chen Linong is a Taiwanese singer and actor active in China."
    },
    {
      "img": "jpg/5.jpg",
      "name": "Wei Daxun",
      "cardInfo": "Wei Daxun is a Chinese actor."
    },
    {
      "img": "jpg/6.jpg",
      "name": "Vin Zhou",
      "cardInfo": "Zhou Zhennan (Vin) is a singer from Mainland China."
    },
    {
      "img": "jpg/7.jpg",
      "name": "Karry Wang",
      "cardInfo": "Wang Junkai, also known as Karry Wang, is a Chinese singer and actor."
    },
    {
      "img": "jpg/8.jpg",
      "name": "Bai Jingting",
      "cardInfo": "Bai Jingting is a Chinese actor."
    },
    {
      "img": "jpg/9.jpg",
      "name": "Jackson Wang",
      "cardInfo": "Jackson Wang is a Hong Kong rapper, singer and dancer based in South Korea. "
    }
  ];
  let currentCardIndex = 0;
  let startingMouseX = 0;
  let mouseWasDown = false;
  let pre_index = 0;

  //Update swipe-card values from json
  function changeCard(action){
    switch(action){
    	case -1:
    		let temp = currentCardIndex;
    		currentCardIndex = pre_index;
    		pre_index = temp;
    		break;
    	case 2:
    		pre_index = currentCardIndex;
    		currentCardIndex = Math.floor(Math.random() * cardInfo.length);
    		break;
    	case 1:
    		pre_index = currentCardIndex;
    		currentCardIndex++;
    		break;
    	case 0:
    		currentCardIndex = 0;
    		break;
    }
    if (currentCardIndex === cardInfo.length){
      currentCardIndex = 0;
    }
    if (currentCardIndex === -1){
      currentCardIndex = cardInfo.length-1;
    }
    let currentCardData = cardInfo[currentCardIndex];
    let cardImage = document.getElementsByClassName("swiper-card-img")[0]
    let cardName = document.getElementsByClassName("swiper-card-name")[0]
    let cardLocation = document.getElementsByClassName("swiper-card-location")[0]

    cardImage['src'] = currentCardData.img;
    cardName.innerHTML = currentCardData.name
    cardLocation.innerHTML = currentCardData.cardInfo;
  }

  function leftSwipe(){
    card.style.animationName = "leftSwipe"
    setTimeout(function(e){
      card.style.animationName = "fadeDownIn";
      changeCard(1);
    },500);
  }
  function rightSwipe(){
    card.style.animationName = "rightSwipe"
    setTimeout(function(e){
      card.style.animationName = "fadeDownIn";
      changeCard(1);
    },500);
  }
  

 randomCard = function() {
 	changeCard(2);
 }
  
  
  next = function() {
    changeCard(1);
  }
  
   prev = function() {
    changeCard(-1);
  }



 
//---Keyboard Input

  document.onkeydown = function(e){
    const left = 37;
    const right = 39;

    if(e.keyCode === left){
      leftSwipe();
    }
    if(e.keyCode === right){
      rightSwipe();
    }
  };

// ---Mouse Swiping Input
  //Start mouse swipe inside card.
  card.addEventListener("mousedown",function(e){
    startingMouseX = e.clientX;
    mouseWasDown = true;
  });
  

  card.addEventListener("mousemove",function(e){
    if(mouseWasDown){
        let newMouseX = e.clientX;
        if(newMouseX < startingMouseX){
          leftSwipe();
        }
        else if(newMouseX > startingMouseX){
          rightSwipe();
        }
        mouseWasDown = false;
    }
  });
  
//---Mobile Devices Input
  
  card.addEventListener("touchstart",function(e){
    startingMouseX = e.touches[0].clientX;
    mouseWasDown = true;
  });
  

  card.addEventListener("touchmove",function(e){
    if(mouseWasDown){
        let newMouseX = e.touches[0].clientX;
        if(newMouseX < startingMouseX){
          leftSwipe();
        }
        else if(newMouseX > startingMouseX){
          rightSwipe();
        }
        mouseWasDown = false;
    }
  });

  changeCard(0);
})();



