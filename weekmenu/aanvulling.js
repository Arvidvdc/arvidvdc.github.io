var arrayPizza = {
  'Margeritha': 9.50,
  'Quattro formaggio': 12.50,
  'Al tonno': 15.50,
  'Veggy': 10.00
  },
  rowHTML='<td>Gerecht</td><td>Prijs</td><td>Aantal</td>';

  function tableCreate(){
  // Function for creating the main table and filling products 
  var body = document.body,
  tbl  = document.createElement('table');
  tbl.setAttribute('class','lijst');
  tbl.setAttribute('ID','hoofdTabel');

  // Pizzakaart
  var trSub = tbl.insertRow();
  trSub.setAttribute('class','SGTTitel');
    trSub.innerHTML='<td width=50%>Pizza</td><td width=30%>&nbsp;</td><td>&nbsp;</td>';
  trSub = tbl.insertRow();
  trSub.setAttribute('class','head2');
  trSub.innerHTML=rowHTML;
  
  for(var key in arrayPizza){
    var tr = tbl.insertRow();
    for(var j = 0; j < 3; j++){
      var td = tr.insertCell();
      if(j == 1){
          var getPrice = '\u20AC ' + Number(arrayPizza[key]).toFixed(2);
          td.appendChild(document.createTextNode(getPrice));
      } else if(j == 2) {
          var input=document.createElement('input');
          input.setAttribute('ID',key)
          input.type='number';
          input.value='0';
          input.setAttribute('onchange','editVerzamel()')
          td.appendChild(input);
      } else {
          td.setAttribute('class', 'tabbed');
          td.appendChild(document.createTextNode(key));
      }
    }
  }
  body.appendChild(tbl);
}