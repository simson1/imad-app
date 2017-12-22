var counter=document.getElementById('click');
var count=0;
counter.onclick=function(){
    
    count=count+1;
    var c=document.getElementById('j');
    c.innerHTML=count.toString();
    
    
    
}
