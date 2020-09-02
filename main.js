var insertText = document.getElementById('input'),
     items = document.querySelectorAll('#todos li'),
          tab =  [], index;

      //populate array with li values
      for(var i=0; i < items.length; i++){
        tab.push(items[i].innerHTML);
      }
      //get li index onclick
      for (var i = 0; i < items.length; i++) {
        items[i].onclick = function(){
           index = tab.indexOf(this.innerHTML);
           console.log(this.innerHTML + 'INDEX=' +index);
            //set the selected li value into insert text
            insertText.value = this.innerHTML;
        };
      }
      //on enter event
       document.getElementById('input').onkeydown = function(e){
          if(e.keyCode == 13){

            var listNode =document.getElementById('todos'),
             textNode = document.createTextNode(insertText.value),
            liNode = document.createElement('Li');

            liNode.appendChild(textNode);
            listNode.appendChild(liNode);
            refreshArray();

            //clear the input
           var clearInput =document.getElementById('input').value = '';

            //add event to new li
            liNode.onclick = function(){
               index = tab.indexOf(liNode.innerHTML);
               console.log(liNode.innerHTML + 'INDEX=' +index);

            //set the selected li value into insert text
              insertText.value = liNode.innerHTML;
            };
            return false;

              }
             };

    function refreshArray() {
          //clear arrary
          tab.length = 0;
           items = document.querySelectorAll('#todos li');
          //fill arrary
          for (var i = 0; i < items.length; i++) {
            tab.push(items[i].innerHTML);
          }
        }

    function addLi() {
            var listNode =document.getElementById('todos'),
             textNode = document.createTextNode(insertText.value),
             liNode = document.createElement('Li');

             liNode.appendChild(textNode);
             listNode.appendChild(liNode);
             refreshArray();
             //clear the input
            var clearInput =document.getElementById('input').value = '';

             //add event to new li
             liNode.onclick = function(){
                index = tab.indexOf(liNode.innerHTML);
                console.log(liNode.innerHTML + 'INDEX=' +index);

                //set the selected li value into insert text
                insertText.value = liNode.innerHTML;
                };
                  return false;
              };

    function delLi() {
          if (items.length >= 0) {
           items[index].parentNode.removeChild(items[index]),
           insertText.value = '';
         }
         refreshArray();
        }
