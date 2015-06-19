//Create divs;
function BubbleDOMAnimator() {

  generateLength = function() {
    var widthArr = [];
    while (widthArr.length !== 100) {
      var randomNum = Math.floor(Math.random() * (200 - 2) + 2);
      if (widthArr.indexOf(randomNum) === -1)
        widthArr.push(randomNum);
    }
    return widthArr;
  }
  //////////////////DOM Main Elements and Nodes//////////////////
  var mainContainer = document.getElementById('mainContainer');
  var i;
  //////////////////////////////////////////////////////////////

  this.randomize = function() {
    var widthArr = generateLength();
    console.log(widthArr);
    for (i = 0; i < 100; i++) {
      var row = document.createElement('div');
      row.id = 'row' + i;
      row.style.width = widthArr[i] + 'px';
      row.className = 'bubblerow';
      mainContainer.appendChild(row);
    }
  }

  this.sort = function() {
    var base, next;
    for (var j = 0; j < 99; j++) {
      base = document.getElementById('row' + j).style.width;
      next = document.getElementById('row' + (j + 1)).style.width;

      if (parseInt(base) > parseInt(next)) {
        document.getElementById('row' + j).style.width = next;
        document.getElementById('row' + (j + 1)).style.width = base;
      }
    }
  }
  this.start = function(){
    setInterval(this.sort,100);
  }
}