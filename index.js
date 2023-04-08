var val = 6;
function submit() {
  if(val ==6){
    window.alert("Please choose a rating!");
    return;
  }
  document.getElementById("ty").style.display = "contents";
  document.getElementById("rating").style.display = "none";
  var res = document.getElementById("res");
  var text = document.createTextNode(`you selected ${val} out of 5`);

  res.appendChild(text);
}

function onclickLI(id) {
  val = id;
  if(document.getElementById(id).className == 'select'){
    document.getElementById(id).className = "";
    val = 6;
    return;
  }
  var elems = document.querySelectorAll(".select");

  [].forEach.call(elems, function (el) {
    el.className = el.className.replace(/\bselect\b/, "");
  });
  document.getElementById(id).className = "select";
}



