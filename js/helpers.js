function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'muza.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);
}

function jmespathLoad(callback) {
/*
  var xobj = new XMLHttpRequest();
  xobj.open('GET', 'jmespath.min.js', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);
*/
  var client = new XMLHttpRequest();
  client.open('GET', 'js/jmespath.min.js');
  client.onreadystatechange = function() {
    //alert(client.responseText);
    if (client.readyState == 4 && client.status == "200") {
      return client.responseText;
    }
  }
  client.send();

}
