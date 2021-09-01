
var ul = $('ul')

var arr= [1,2,3,4]

for (var i=0; i<arr.length; i++){
    /*var li= document.createElement('li')
    li.innerText = 'list item'  +  arr[li]
    ul.appendChild(li)

}

ul.addEventListener('click', function(event){
    console.log(event.target)*/

    var li= $ ('<li class + "item" > list item ' + arr [i] +  '</li>') 
    ul.append(li)

}

    ul.on('click', 'li', function(event){

})