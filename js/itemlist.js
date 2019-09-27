function test(){
	alert("success");
}

var i;

function chprc(i){
	var crc=document.getElementsByClassName("slt")[i].value;
	if(parseInt(document.getElementsByClassName("itemquantity")[i].value)>=0){
		switch(crc){
		case "CNY":
			switch(i){
				case 0:document.getElementsByClassName("price")[i].innerText="4999.00";break;
				case 1:document.getElementsByClassName("price")[i].innerText="2999.00";break;
			}
			document.getElementsByClassName("currency")[i].innerText="¥";
			document.getElementsByClassName("totalpricenum")[i].value=parseInt(document.getElementsByClassName("itemquantity")[i].value)*parseFloat(document.getElementsByClassName("price")[i].innerText);
			break;
		case "USD":
			switch(i){
				case 0:document.getElementsByClassName("price")[i].innerText="499.00";break;
				case 1:document.getElementsByClassName("price")[i].innerText="399.00";break;
			}
			document.getElementsByClassName("currency")[i].innerText="$";
			document.getElementsByClassName("totalpricenum")[i].value=parseInt(document.getElementsByClassName("itemquantity")[i].value)*parseFloat(document.getElementsByClassName("price")[i].innerText);
			break;
		}
	}else{
		document.getElementsByClassName("itemquantity")[i].value=0;
	}
}

function additem(i){
	document.getElementsByClassName("itemquantity")[i].value=parseInt(document.getElementsByClassName("itemquantity")[i].value)+1;
	chprc(i);
}

function minitem(i){
	if(parseInt(document.getElementsByClassName("itemquantity")[i].value)>0){
		document.getElementsByClassName("itemquantity")[i].value=parseInt(document.getElementsByClassName("itemquantity")[i].value)-1;
		chprc(i);
	}
}
