window.onload = function() {
  var bSort = new BubbleDOMAnimator();
  var main = document.getElementById('mainContainer');
  var rowContainer = document.getElementById('rowContainer');
  var inputField = document.createElement('input');
  inputField.setAttribute('type', 'text');
  inputField.id = 'inputField';

  var generateBtn = document.createElement('div');
  generateBtn.innerHTML = "Generate";
  generateBtn.id = 'generateBtn';
  generateBtn.addEventListener('click', function() {
    bSort.randomize(inputField.value);
  });

  var startBtn = document.createElement('div');
  startBtn.innerHTML = 'START!';
  startBtn.id = 'startBtn';
  startBtn.addEventListener('click', function() {
    bSort.start();
  });


var resetBtn = document.createElement('div');
resetBtn.innerHTML = 'Reset';
resetBtn.addEventListener('click', function() {

  bSort.reset();
});

  main.appendChild(resetBtn);
  main.appendChild(inputField);
  main.appendChild(startBtn);
  main.appendChild(generateBtn);

}
