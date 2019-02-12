function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }

  function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }
  function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("demo").innerHTML = "Started to drag the p element";
  }
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "The p element was dropped";
  }
