function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested.target');
}

function increaseRankBy(n){
  var ranks = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}

function deepestChild(){
  let node = document.getElementById('#grand-node').quertSelectorAll("div");
  var test;
  for(let i = 0; i < lis.length - 1; i++) {
    test = lis[i].querySelector("div");
  }
  return test;
}
