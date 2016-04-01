var preferedSizes = ["EU 41", "EU 40.5", "EU 42", "EU 42.5", "EU 43", "EU 44", "EU 44.5", "EU 44.5", "EU 45"];
var amount = 1;

function addToCart() {
	console.log("addToCart heart beat.");

	var sizesList=document.getElementsByName("skuAndSize")[0];
	function setQuantity() {
		document.getElementsByName("qty")[0].selectedIndex = amount-1;
	}
	function setSizeValue() {
		console.log("SizeListLength=" + sizesList.length);
loop:
		for (var i=0; i<sizesList.length; i++){
			console.log("SizeList: " + sizesList.options[i].text);
			for(var j = 0; j < preferedSizes.length; ++j) {
				console.log("PreferedSize: " + preferedSizes[j]);
				if (sizesList.options[i].text == preferedSizes[j]) {
						console.log("Match: " + sizesList.options[i].text);
						document.getElementsByName("skuAndSize")[0].selectedIndex = i;
						setQuantity();
						break loop;
				}
			}
		}
	}
	if(sizesList != undefined) {
	    setSizeValue();
	    //document.getElementsByClassName("js-add-to-cart add-to-cart nsg-button nsg-grad--nike-orange")[0].click();
			document.getElementById("buyingtools-add-to-cart-button").click();
	} else {
	    setTimeout("addToCart()", 250);
	}
}
setTimeout("addToCart()", 250);
