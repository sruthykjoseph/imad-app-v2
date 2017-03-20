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
             // Caputure a list of names and render it as a list
            var names = ['name1', 'name2', 'name3', 'name4'];
            var list = '';
            for (var i=0; i< names.length; i++) {
                list += '<li>' + names[i] + '</li>';
            }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
         }
     }
    
    // Not done yet
  };
  
  //Make the request
  request.open('GET', 'http://sruthykjoseph.imad.hasura-app.io/counter', true);
  request.send(null);
  
};
//Submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    // Make a request to the server and send the name
    
    // Create the request object
  var request = new XMLHttpRequest();
  
  // Capture the response and store it in a variable
  request.onreadystatechange = function () {
     if (request.readyState === XMLHttpRequest.DONE) {
         //Take an action
         if (request.status === 200) {
             // Caputure a list of names and render it as a list
            //var names = ['name1', 'name2', 'name3', 'name4'];
            var names = request.responseText;
            names = JSON.parse(names);
            var list = '';
            for (var i=0; i< names.length; i++) {
                list += '<li>' + names[i] + '</li>';
            }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
         }
     }
    
    // Not done yet
  };
  
  //Make the request
  var  nameInput = document.getElementById('name');
  var name = nameInput.value;
  request.open('GET', 'http://sruthykjoseph.imad.hasura-app.io/submit-name?name=' + name, true);
  request.send(null);
};