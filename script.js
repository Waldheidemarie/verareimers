document.body.children[0].addEventListener("click", event => {
  const nav = document.querySelector("nav");
  const header = document.querySelector("header");

  if (event.target.dataset.menustate == "closed") {
    event.target.dataset.menustate = nav.dataset.state = header.dataset.menustate =
      "open";
  } else {
    event.target.dataset.menustate = nav.dataset.state = header.dataset.menustate =
      "closed";
  }
});


//about me section 



const quotes = [

  {
      "quote":  "During the last year i started my journey as a web developer." 
  },
  {
      "quote": "I love experimenting with CSS Grids"
  },
  {
      "quote": "In this one year course i was able to build a solid foundation in HTML5, CSS3, Sass and Javascript"
  },
  {
      "quote":  " I got a Bachelor's Degree in German language and history. "
  },
  {
      "quote": "For most of my applications i used React Framework. "
  },
  {
      "quote":  "For 4 years i worked in Online Marketing and SEO for 2 companies besides uni."
  },
  {
      "quote":  "I love being creative and i love to paint."
  },
  {
      "quote": "Trying new things, testing Beta versions and discovering new fields is what i like about web development "
  },
  {
      "quote": "Since my final project i am intrigued by testing several backend options and optimizing it"
  },
  {
      "quote": "I got experience working with Node.js, MongoDB, Mongoose, Redux, Express and Axios. "
  },
  {
      "quote":  "In the last few month i started experimenting with Real Time Databases to handle certain workloads"
  },
  {
      "quote": "Besides learning HTML5, CSS3 and Javascript, i got to work with Frameworks like React or Vue"
  },
  {
      "quote":  "I'm happy that I started web developing as there are so many new things to learn and discover."
  },
  {
      "quote": "In my feetime i enjoy anything related to food: going to markets, grocery shopping, going out for lunch or dinner and cooking."
  },
  {
      "quote":  "Information Architecture and building a solid User Interface is one of the things i love the most about web development in general."
  },
  {
      "quote":  "An appealing UI is crucial in any application in my opinion. Same goes for functionality."
  },
     
];


$('#refresh').on('click', function() {
  randomQuotesGenerator()
});

function randomQuotesGenerator() {
  let getRandomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  let getQuoteElement = document.getElementById("quote-holder");


  getQuoteElement.innerHTML = getRandomQuote.quote;

}