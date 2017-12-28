//var counter=document.getElementById('click');
var main = function() {

  $('#name').click(function() {
    $('ul').animate({
      left: "0px"
	  
    }, 200);

    $('body').animate({
      left: "200px"
    }, 200);

  });
  
};
$(document).ready(main);

/*counter.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
    if(request.readyState==XMLHttpRequest.DONE){
        if(request.status==200){
            var count = request.responseText;
            var c=document.getElementById('j');
            c.innerHTML=count.toString();
            
        }
        
    }
        
    };


    request.open('GET','http://jaydave422.imad.hasura-app.io/ui/cout',true);
    request.send(null);
};*/
