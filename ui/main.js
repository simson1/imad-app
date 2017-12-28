var counter=document.getElementById('name');
var ti=document.getElementById('name');

 counter.click(function() {
    $('.main').animate({
      left: "0px"
	  
    }, 100);


  });
  


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
