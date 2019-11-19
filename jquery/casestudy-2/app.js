$(document).ready(function(){
    $("#input").keyup(function(e){
        if(e.keyCode == 13)
        {
            var texts=document.getElementById('input');
            var newLi=document.createElement('li');
            newLi.setAttribute('id','hot');
            var newList=document.createTextNode('-'+texts.value);
            newLi.appendChild(newList);
            var pos=document.getElementsByTagName('ul')[0];
            pos.appendChild(newLi);
            texts.value='';

        }

    });
    var listItems = document.getElementsByTagName("li"); // or document.querySelectorAll("li");
    for (var i = 0; i < listItems.length; i++) {
    listItems[i].onclick = function() {this.parentNode.removeChild(this);}
});
