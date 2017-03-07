//Counter code
var button = document.getElementById('counter');

button.onclick = function(){
  // Create the request object
  var request = new XMLHttpRequest();
  
  // Capture the response and store it in a variable
  request.onreadystatechange = function () {
     if (request.readyState === XMLHttpRequest.DONE) {
         //Take an action
         if (request.status === 200) {
             var counter = request.responsetext;
             var span = document.getElementById('count');
             span.innerHTML = counter.toString();
             
         }
     }
    
    // Not done yet
  };
  
  //Make the request
  request.open('GET', 'http://sruthykjoseph.imad.hasura-app.io/counter', true);
  request.send(null);
  
};
