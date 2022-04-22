var form = document.getElementById('addForm');
//const tbody = document.getElementById('tbody');
var table = document.getElementById('list');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
table.addEventListener('click', removeItem);
// Add item
function addItem(e){
 e.preventDefault();
var volunteer =  document.getElementById('Volunteer').value;
var date =  document.getElementById('Participation').value;
var tr =document.createElement('tr');

var td1= tr.appendChild(document.createElement('td'));
var td2= tr.appendChild(document.createElement('td'));
var td3= tr.appendChild(document.createElement('td'));

td1.innerHTML = volunteer
td2.innerHTML = date
td3.innerHTML = '<input type="button" id="add" value="Delete" onclick="removeItem(this);" class="btn btn-danger">'

document.getElementById('list').appendChild(tr);
}
 function removeItem(e){
  var s = e.parentNode.parentNode;
  s.parentNode.removeChild(s)
}

