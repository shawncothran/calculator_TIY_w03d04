var answer = function(a, b){
  var a = parseInt(document.getElementById('num_one').value);

  var b = parseInt(document.getElementById('num_two').value);

  var output = a + b
  document.getElementById('answer').innerHTML = output
};

calculateBtn.addEventListener('click', answer);
