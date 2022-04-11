alert("Assalomu alaykum");

var enterAge =parseInt(prompt("Yoshingizni kiriting?"),10);

  
  if( enterAge >= 16){
    var go = "Poygada qatnashishingiz mumkin"
    console.log(go);
    var title = document.createElement("h1")
    go.textContent = "enterAge"
    document.body.append(go)
  
  }else {
       var stop = "Poygada qatnasha olmaysiz uzr"
       console.log(stop);
  var title = document.createElement("h1")
  stop.textContent = "enterAge"
  document.body.append(stop)
}