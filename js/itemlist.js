function test(){
	alert("success");
}

function chprc1(){
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
}