//Create divs;
function BubbleDOMAnimator() {

  var mainContainer = document.getElementById('mainContainer');
  var i;


  this.init = function() {

    for (i = 0; i < 100; i++) {
      var row = document.createElement('div');
      row.id = 'row' + i;
      row.style.width = ((1 + i) * 2) + 'px';
      row.className = 'bubblerow';
      mainContainer.appendChild(row);
    }

  }

  this.randomize = function() {
    var widthArr = this.generateLength();
    console.log(widthArr);
    for (i = 0; i < 100; i++) {
      var row = document.createElement('div');
      row.id = 'row' + i;
      row.style.width = widthArr[i]+'px';
      row.className = 'bubblerow';
      mainContainer.appendChild(row);

    }
  }

  this.generateLength = function() {
    var widthArr = [];
    while (widthArr.length !== 100) {
      var randomNum = Math.floor(Math.random() * (200 - 2) + 2);
      if (widthArr.indexOf(randomNum) === -1)
        widthArr.push(randomNum);
    }
    return widthArr;
  }

}