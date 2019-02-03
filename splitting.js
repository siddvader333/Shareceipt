
function selectPerson(btn){
    var count=1;
    var property = document.getElementById(btn);
    if (count == 0){
        property.style.backgroundColor = "#ffffff";
        count=1;        
    }
    else{
        property.style.backgroundColor = "#000000"
                count=0;
    }
}

$('input[type="submit"]').click(function(){
    $(this).toggleClass('red');
  });