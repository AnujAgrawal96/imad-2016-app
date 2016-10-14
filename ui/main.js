//counter code
var button = document.getElementById('counter');

button.onclick = function() {
    
    //create a request object
    var request = new XMLHttprequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttprequest.DONE) {
            //Take some action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }    
        //not yet done
    };
    
    //make the request
    request.open('GET','http://anujagrawal96.imad.hasura-app.io/counter',true);
    request.send(null);

};