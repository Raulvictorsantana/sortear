
var ola = document.getElementById('btn');
function sortear(){
    var min = document.getElementById ('min').value;
    var max = document.getElementById ('max').value;
    

     var sort = Math.floor(Math.random()*Math.floor(max))
    while(sort <= min){
      sort = Math.floor(Math.random()*Math.floor(max));
      
    }
    document.getElementById('resultado').innerHTML=sort;

    if(max===""){
      alert('preencha o campo');
    }
  }

