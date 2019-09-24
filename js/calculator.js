var num=document.getElementsByClassName("inputnum");

function calc_add(){
	document.getElementById("result").value=parseFloat(num[0].value)+parseFloat(num[1].value);
}

function calc_min(){
	document.getElementById("result").value=parseFloat(num[0].value)-parseFloat(num[1].value);
}

function calc_time(){
	document.getElementById("result").value=parseFloat(num[0].value)*parseFloat(num[1].value);
}

function calc_dvd(){
	if(num[1].value==0){
		alert("Exception_Divided_By_Zero!");
	}else{
		document.getElementById("result").value=parseFloat(num[0].value)/parseFloat(num[1].value);
	}
}