function showDiv() {
		var s = "http://tinyurl.com/api-create.php?url=";
			var value = document.getElementById('URLval').value;
			var key = ";apikey="+'5C7C70BC90A8CFG93D0';
			var finalstr = s+value+key;
		  var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				    if (this.readyState == 4 && this.status == 200) {
						console.log(this.responseText);
						document.getElementById('chotaURLValue').innerHTML = this.responseText;
}
 	};
	 xhttp.open("GET", finalstr, true);
 xhttp.send();


		};
