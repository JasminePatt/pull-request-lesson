const drinks = {
  coffee: [
    {
      title: 'Early Bird',
      price: '$$',
    },
    {
      title: 'Strange Love',
      price: '$$',
    },
    {
      title: 'Fahrenheit',
      price: '$$',
    },
    {
      title: 'Voodoo Child',
      price: '$$',
    },
    {
      title: 'Dark Horse',
      price: '$',
    },
    {
      title: 'Cops',
      price: '$',
    },
    {
      title: 'i deal',
      price: '$',
    },
    {
      title: 'Jimmy\'s',
      price: '$',
    }
  ],
  tea: [
    {
      title: 'Icha',
      price: '$$',
    },
    {
      title: 'Ten Ren\'s',
      price: '$$',
    },
    {
      title: "David's Tea",
      price: '$$',
    },
    {
      title: 'Bubble Lee',
      price: '$$',
    },
    {
      title: 'Chatime',
      price: '$',
    },
    {
      title: 'Tealish',
      price: '$',
    },
    {
      title: 'Kung Fu',
      price: '$',
    },
    {
      title: 'Gong Cha',
      price: '$',
    }
  ]
};


// Our code goes here:

// Take our two input selections and use them to gives us a random from the array
  // we'll need an event lisener
  // we'll need to use a querySelector to store html elemtents
  // we'll need t use Math.floor (Math.random) to give us a random element
  // we might need to loop the array
// Display the seletion to the user
  // create a new element(or attach to an existing one) to display the selection

// 1) store form element
  const formEL = document.querySelector('form');

// 15 Create randomizer function. Comment out or copy paste steps 10-11, and change 'randomItem' to 'optionsArray'
function randomItem(optionsArray) {
   const index = Math.floor(Math.random() * optionsArray.length);

  //  Access the randomizer
  return optionsArray[index];
  // console.log(options); <-From step 11

}
// 2) Attach event Listener to form element on submit event
  formEL.addEventListener('submit', function(event){
    // 3) Prevent the default of the form refresh
    event.preventDefault();
    // console.log('Woo');
  
    // 4) Store user radio button selection (coffe vs tea)
    const type = document.querySelector('input[name=beverage]:checked').value;
    // console.log(type);

    // 5) Store user radio button selection price
    const price = document.querySelector('input[name=price]:checked').value;
    // console.log(type, price);

    // 6) Store drink array (either coffee or tea), depending on user choice
    const choice = drinks[type];
    // console.log(choice);


    // 7) create an array to store the filtered options
    const options = [];

    // 8) Loop to filter our array to match the user selection -> goes to "Options"
    for(let i = 0; i < choice.length; i++) {
      // Create a variable "store" to hold the CURRENT VALUE as we loop through the array, then add it to the options array if it meets these conditions
      const store = choice[i];

    // 9) Your if statement, creating conditions for the loop
      if (store.price === price) {
        options.push(store);
      }
    }
    

  // // 10) Generates a random number between 0-3(the options array length)
    // const index = Math.floor(Math.random() * options.length);

  // // 11) Access the random value of options array
    // const randomItem = options[index];

    // 12)
    // console.log(randomItem.title);

     // 16)
    const suggestion = randomItem(options);
    

    // 13) Get the html element with a class of result
    const results = document.querySelector('.results');

    // 14) Add a child element to result. This child is an h2 elelment that display the randomItem.title
    // results.innerHTML = `<h2 class="choice">${randomItem.title}</h2>`;

    // 17) Change 'randomItem' to 'suggestion'
    results.innerHTML = `<h2 class="choice">${suggestion.title}</h2>`;
    
    // 18)
    console.log(suggestion.title);

  

  })
