//Create divs;
function BubbleDOMAnimator() {
  //////////////////DOM Main Elements and Nodes//////////////////
  var mainContainer = document.getElementById('mainContainer');
  var rowContainer = document.createElement('div');
  rowContainer.id = 'rowContainer';
  var i;
  var widthArr;
  //////////////////////////////////////////////////////////////

  generateLength = function(length) {
    widthArr = [];
    for (i = 0; i < length; i++) {
      var randomNum = Math.floor(Math.random() * ((length * 2) - 2) + 2);
      widthArr.push(randomNum);
    }
    this.length = length;
    return widthArr;
  }

  this.randomize = function(length) {
    widthArr = generateLength(length);
    
    for (i = 0; i < length; i++) {
      var row = document.createElement('div');
      row.id = 'row' + i;
      row.style.width = widthArr[i] + 'px';
      row.className = 'bubbleRow';
      rowContainer.appendChild(row);
    }
    mainContainer.appendChild(rowContainer);
  }

  this.sort = function() {
    var base, next;
    if (document.getElementById('rowContainer')) {
      for (i = 0; i < this.length - 1; i++) {
        base = document.getElementById('row' + i).style.width;
        next = document.getElementById('row' + (i + 1)).style.width;

        if (parseInt(base) > parseInt(next)) {
          document.getElementById('row' + i).style.width = next;
          document.getElementById('row' + (i + 1)).style.width = base;
        }
      }
    }
  }
  this.start = function() {
    setInterval(this.sort, 50);
  }
  this.reset = function() {
    document.getElementById('mainContainer').removeChild(document.getElementById('rowContainer'));
  }
}
