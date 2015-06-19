//Create divs;
function BubbleDOMAnimator() {

  generateLength = function(length) {
    var widthArr = [];
    for(var i = 0; i < length; i++){
      var randomNum = Math.floor(Math.random() * ((length*2) - 2) + 2);
      widthArr.push(randomNum);
    }
    this.length = length;
    return widthArr;
  }
  //////////////////DOM Main Elements and Nodes//////////////////
  var mainContainer = document.getElementById('mainContainer');
  var i;
  //////////////////////////////////////////////////////////////

  this.randomize = function(length) {
    var widthArr = generateLength(length);
    console.log(widthArr);
    for (i = 0; i < length; i++) {
      var row = document.createElement('div');
      row.id = 'row' + i;
      row.style.width = widthArr[i] + 'px';
      row.className = 'bubblerow';
      mainContainer.appendChild(row);
    }
  }

  this.sort = function() {
    var base, next;
    for (var j = 0; j < this.length - 1; j++) {
      base = document.getElementById('row' + j).style.width;
      next = document.getElementById('row' + (j + 1)).style.width;

      if (parseInt(base) > parseInt(next)) {
        document.getElementById('row' + j).style.width = next;
        document.getElementById('row' + (j + 1)).style.width = base;
      }
    }
  }
  this.start = function(){
    setInterval(this.sort,50);
  }
}

