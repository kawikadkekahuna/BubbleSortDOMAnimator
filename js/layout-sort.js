window.onload = function(){

var bSort = new BubbleDOMAnimator();
var main = document.getElementById('mainContainer');
var inputField = document.createElement('input');
inputField.setAttribute('type','text');
inputField.id='inputField';
var generateBtn = document.createElement('div');
generateBtn.innerHTML = "Generate";
generateBtn.addEventListener('click',function(){
    bSort.randomize(inputField.value);
    // this.bSort.start();
  });
var startBtn = document.createElement('div');
startBtn.innerHTML = 'start';
startBtn.addEventListener('click',function(){

  bSort.start();
});







main.appendChild(startBtn);
main.appendChild(generateBtn);
main.appendChild(inputField);

}


