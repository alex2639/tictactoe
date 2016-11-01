//tictactoe javascript
var selectedNode=document;
function selectNode(node){
  node.className ='selected';
  selectedNode=node;
  console.log(selectedNode);
}

function checkIfFinished(slots){
  var messages=document.getElementById('message');
  if (slots[0].innerHTML===slots[1].innerHTML && slots[1].innerHTML===slots[2].innerHTML && slots[0].innerHTML==='<p class="selected">X</p>'//rows match
      || slots[3].innerHTML===slots[4].innerHTML && slots[4].innerHTML===slots[5].innerHTML && slots[5].innerHTML==='<p class="selected">X</p>'
      || slots[6].innerHTML===slots[7].innerHTML && slots[7].innerHTML===slots[8].innerHTML && slots[8].innerHTML==='<p class="selected">X</p>'
      || slots[0].innerHTML===slots[3].innerHTML && slots[6].innerHTML===slots[0].innerHTML && slots[0].innerHTML==='<p class="selected">X</p>'//columns match
      || slots[1].innerHTML===slots[4].innerHTML && slots[7].innerHTML===slots[1].innerHTML && slots[1].innerHTML==='<p class="selected">X</p>'
      || slots[2].innerHTML===slots[5].innerHTML && slots[8].innerHTML===slots[2].innerHTML && slots[8].innerHTML==='<p class="selected">X</p>'
      || slots[0].innerHTML===slots[4].innerHTML && slots[4].innerHTML===slots[8].innerHTML && slots[8].innerHTML==='<p class="selected">X</p>'//diagonals match
      || slots[2].innerHTML===slots[4].innerHTML && slots[6].innerHTML===slots[4].innerHTML && slots[6].innerHTML==='<p class="selected">X</p>'){
      message.innerHTML=message.innerHTML+('<p class="selected"> Player l (X) wins!</p>');
      finished=true;
  }
  if (slots[0].innerHTML===slots[1].innerHTML && slots[1].innerHTML===slots[2].innerHTML && slots[0].innerHTML==='<p class="selected">O</p>'//rows match
      || slots[3].innerHTML===slots[4].innerHTML && slots[4].innerHTML===slots[5].innerHTML && slots[5].innerHTML==='<p class="selected">O</p>'
      || slots[6].innerHTML===slots[7].innerHTML && slots[7].innerHTML===slots[8].innerHTML && slots[8].innerHTML==='<p class="selected">O</p>'
      || slots[0].innerHTML===slots[3].innerHTML && slots[6].innerHTML===slots[0].innerHTML && slots[0].innerHTML==='<p class="selected">O</p>'//columns match
      || slots[1].innerHTML===slots[4].innerHTML && slots[7].innerHTML===slots[1].innerHTML && slots[1].innerHTML==='<p class="selected">O</p>'
      || slots[2].innerHTML===slots[5].innerHTML && slots[8].innerHTML===slots[2].innerHTML && slots[8].innerHTML==='<p class="selected">O</p>'
      || slots[0].innerHTML===slots[4].innerHTML && slots[4].innerHTML===slots[8].innerHTML && slots[8].innerHTML==='<p class="selected">O</p>'//diagonals match
      || slots[2].innerHTML===slots[4].innerHTML && slots[6].innerHTML===slots[4].innerHTML && slots[6].innerHTML==='<p class="selected">O</p>'){
      message.innerHTML=message.innerHTML+('<p class="selected"> Player 2 (O) wins!</p>');
      finished=true;
  }
  if (slots[0].innerHTML!=='' && slots[1].innerHTML!=='' && slots[2].innerHTML!==''
      && slots[3].innerHTML!=='' && slots[4].innerHTML!=='' && slots[5].innerHTML!==''
      && slots[6].innerHTML!=='' && slots[7].innerHTML!=='' && slots[8].innerHTML!==''){
      message.innerHTML='';
      message.innerHTML=message.innerHTML+'<p class="selected">Draw!</p>';
  }
}

var finished=false;
var player1turn=true;
var turn='X';

window.onload=function(){
  selectNode(document);

  //gameplay
  var slots=document.getElementsByTagName('td');
  var message=document.getElementById('message');

  for (var i = 0; i < slots.length; i++) {
    var slot=slots[i];
    slot.onclick=function(){

      if(!finished){
        if (/*player1turn=true*/turn==='X') {//x
            //player1's turn
          if (this.innerHTML==='') {
            this.innerHTML=this.innerHTML+'<p class="selected">'+turn+'</p>';
            player1turn=false;
            turn='O';
          }
        } else {//o
          //player2's turn
          if (this.innerHTML==='') {
            this.innerHTML=this.innerHTML+'<p class="selected">'+turn+'</p>';
            player1turn=true;
            turn='X';
          }
        }
        if(message.innerHTML===''){
        }else{
          message.innerHTML='';
        }
        message.innerHTML=message.innerHTML+('<p class="selected">Player '+turn+' \'s turn</p>');

        checkIfFinished(slots);
      }
    };
  }
};
