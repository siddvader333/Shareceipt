
function changeColor(r){
    var row = r.parentNode.parentNode.rowIndex;
    var col = r.parentNode.parentNode.cellIndex;
  document.getElementById("myTable")[rowIndex][cellIndex].style.backgroundColor = "red";
}


function populate(){
	var transform = {"tag":"table", "children":[
    {"tag":"tbody","children":[
        {"tag":"tr","children":[
            {"tag":"td","html":"${name}"},
            {"tag":"td","html":"${age}"}
        ]}
    ]}
]};

var data = [
    {'name':'Bob','age':40},
    {'name':'Frank','age':15},
    {'name':'Bill','age':65},
    {'name':'Robert','age':24}
];

$('#target_div').html(json2html.transform(data,transform));
	
}
