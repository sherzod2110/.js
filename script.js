alert("Assalomu alaykum");
var studentAge = 16
var enterAge =parseInt(prompt("Yoshingizni kiriting?"),10);

  
  if( enterAge >=  studentAge){
    var go = "Yoshingiz tug'ri keladi"
    console.log(go);
    var title = document.createElement("h1")
    go.textContent = "enterAge"
    document.body.append(go)
  
  }else {
       var stop = "Yoshingiz tug'ri kelmadi uzur"
       console.log(stop);
  var title = document.createElement("h1")
  stop.textContent = "enterAge"
  document.body.append(stop)
}