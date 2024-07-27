import $ from "https://esm.sh/jquery";
import jqueryUi from "https://esm.sh/jquery-ui";

// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
$(document).ready(function() {});
 
function fetchData() {
 fetch('https://type.fit/api/quotes')
  .then(response => {
    return response.json();
  })
  .then(data => {
   //console.log(data);
   function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
   console.log(getRandomInt(15));
    let num = getRandomInt(15);
   //console.log('Data received:', data);
      $("#text").text(data[num].text);
      $("#author").text(data[num].author);
      $("#new-quote").click(function(){
        let num2 = getRandomInt(15);
        $("#text").text(data[num2].text);
        $("#author").text(data[num2].author);
    }); 
        $('#tweet-quote').attr('data-text', data[num].text);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}

fetchData();
//let dataFetch = fetchData();
//console.log(dataFetch);

/*
var obj;

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(data => {
    obj = data;
   })
  .then(() => {
    console.log(obj);
   });
   
   
   
   fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      
      
      fetchData=fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json));
      


//console.log(fetchData);
//console.log(typeof fetchData);
//let dataTry = fetchData();
//console.log(typeof dataTry);
//console.log(typeof dataTry);
//console.log(dataTry);
//console.log(dataTry.id);
//console.log(typeof dataTry);
//console.log(dataTry);






var obj;

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json())
  .then(data => {
    obj = data;
   })
  .then(() => {
    console.log(obj);
    console.log(obj.id)
   });
   
   
   fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  
  
  async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();


fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
   
   
   
   */
