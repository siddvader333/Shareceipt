
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
