var counter=document.getElementById('click');
var may=document.getElementById('img2');
may.onclick=function(){
    
    
    
    
};
counter.onclick=function(){
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
};
