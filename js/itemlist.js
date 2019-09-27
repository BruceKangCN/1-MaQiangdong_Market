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

/* function chprc1(){
	var crc=document.getElementById("slt1").value;
	//alert(crc); //usd or cny
	if(parseInt(document.getElementById("qtt1").value)>=0){
		switch(crc){
		case "CNY":
			document.getElementById("price1").innerText="4999.00";
			document.getElementById("crc1").innerText="¥";
			document.getElementById("totalprice1").value=parseInt(document.getElementById("qtt1").value)*4999.00;
			break;
		case "USD":
			document.getElementById("price1").innerText="499.00";
			document.getElementById("crc1").innerText="$";
			document.getElementById("totalprice1").value=parseInt(document.getElementById("qtt1").value)*499.00;
			break;
		}
	}else{
		document.getElementById("qtt1").value=0;
	}
}

function additem1(){
	document.getElementById("qtt1").value=parseInt(document.getElementById("qtt1").value)+1;
	chprc1();
}

function minitem1(){
	if(parseInt(document.getElementById("qtt1").value)>0){
		document.getElementById("qtt1").value=parseInt(document.getElementById("qtt1").value)-1;
		chprc1();
	}
}

function chprc2(){
	var crc=document.getElementById("slt2").value;
	if(parseInt(document.getElementById("qtt2").value)>=0){
		switch(crc){
		case "CNY":
			document.getElementById("price2").innerText="2999.00";
			document.getElementById("crc2").innerText="¥";
			document.getElementById("totalprice2").value=parseInt(document.getElementById("qtt2").value)*2999.00;
			break;
		case "USD":
			document.getElementById("price2").innerText="399.00";
			document.getElementById("crc2").innerText="$";
			document.getElementById("totalprice2").value=parseInt(document.getElementById("qtt2").value)*399.00;
			break;
		}
	}else{
		document.getElementById("qtt2").value=0;
	}
}

function additem2(){
	document.getElementById("qtt2").value=parseInt(document.getElementById("qtt2").value)+1;
	chprc2();
}

function minitem2(){
	if(parseInt(document.getElementById("qtt2").value)>0){
		document.getElementById("qtt2").value=parseInt(document.getElementById("qtt2").value)-1;
		chprc2();
	}
} */