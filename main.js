var ul = document.getElementById('todos')
var li;
var addButton = document.getElementById('add')
addButton.addEventListener("click",addItem)

// add items
function addItem(){
    var input = document.getElementById('input')
    var item = input.value;
    var textNode = document.createTextNode(item)
    if (item == '')
     {
        (alert('Pl write your task!'))
        return false;

     } else {
        li = document.createElement('li')
         let checkbox = document.createElement('input')
         checkbox.type = 'checkbox'
         checkbox.setAttribute('id','check')

         let label = document.createElement('label')

         ul.appendChild(label)
         li.appendChild(checkbox)
         label.appendChild(textNode)
         li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])
            setTimeout(()=>{
             li.className = 'visual'
         },5)
         input.value = ""
     }
     //delete button
     var span = document.createElement("SPAN");
     var txt = document.createTextNode("\u00D7");
     span.className = "close";
     span.appendChild(txt);
     li.appendChild(span);

//for delete
   for (var i = 0; i < close.length; i++) {
     close[i].onclick=function() {
       if(confirm("are you sure?")){
         var div = this.parentElement;
        div.style.display = "none";
       }else {
               return false;
       }

       }}
}

// Create a "close" button and append it to each list item

var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


// Click on a close button to hide the current list items
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    if(confirm("are you sure?")){
      var div = this.parentElement;
     div.style.display = "none";
    }else {
            return false;
    }
    };
  }
