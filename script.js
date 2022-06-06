// using validation function for firstname and lastname to allow number of letters between 2 to 20//
function vfirstname(){
    var fname=document.getElementById("firstname").value;
    var rel=/^[a-zA-Z\s\'\-]{2,20}$/;
	if(rel.test(fname)){
		document.getElementById("firstname1").style.color="green";
		document.getElementById("firstname1").innerHTML="<strong>Valid Firstname</strong>";
		return true;
	}
        else{
		    document.getElementById("firstname1").style.color="red";
		    document.getElementById("firstname1").innerHTML="<b>No of letters should be between 2 to 20</b>";
		    return false;
    	}      
	}
function vlastname(){
    var lname=document.getElementById("lastname").value;
    var rel=/^[a-zA-Z\s\'\-]{2,20}$/;
	if(rel.test(lname)){
		document.getElementById("lastname1").style.color="green";
		document.getElementById("lastname1").innerHTML="<strong>Valid Lastname</strong>";
		return true;
	}
        else{
		    document.getElementById("lastname1").style.color="red";
		    document.getElementById("lastname1").innerHTML="<b>No of letters should be between 2 to 20</b>";
		    return false;
    	}      
	}
//vage() allow only persons above 18 to purchase//
function vage(){
    var agev=document.getElementById("age").value;
	if(agev>18){
		document.getElementById("age1").style.color="green";
		document.getElementById("age1").innerHTML="<strong>Valid age</strong>";
		return true;
	}
        else{
		    document.getElementById("age1").style.color="red";
		    document.getElementById("age1").innerHTML="<b>only 18+ age user are allowed to purchase</b>";
		    return false;
    	}      
	}
	//it allows numbers of format xxx-xxx-xxxx//
function vnumber(){
    var phoneno=document.getElementById("number").value;
    var rel=/^\d{3}-\d{3}-\d{4}$/;
	if(rel.test(phoneno)){
		document.getElementById("number1").style.color="green";
		document.getElementById("number1").innerHTML="<strong>Valid Number</strong>";
		return true;
	}
        else{
		    document.getElementById("number1").style.color="red";
		    document.getElementById("number1").innerHTML="<b>Number Should be in this xxx-xxx-xxxx formate</b>";
		    return false;
    	}      
	}
// it checks whether password entered or not//
function vpassword(){
    var pass=document.getElementById("password").value;
	if(pass==""){
		document.getElementById("password1").style.color="red";
		document.getElementById("password1").innerHTML="<strong>Enter password</strong>";
		return false;
	}
        else{
		    document.getElementById("password1").style.color="green";
		    document.getElementById("password1").innerHTML="<b>Password entered</b>";
		    return true;
    	}      
	}
//it checks password and repassword are matched or not//
function vrepassword(){
    var pass=document.getElementById("password").value;
	var repass=document.getElementById("repassword").value;
	if(pass==repass){
		document.getElementById("repassword1").style.color="green";
		document.getElementById("repassword1").innerHTML="<strong>Password matched</strong>";
		return true;
	}
        else{
		    document.getElementById("repassword1").style.color="red";
		    document.getElementById("repassword1").innerHTML="<b>Password not matched</b>";
		    return false;
    	}      
	}
//it gives output purchased if customer press the purchase now button//
function calpurchase(){
	var fname=document.getElementById("firstname").value;
	var lname=document.getElementById("lastname").value;
	alert("Product Purchased")
	document.getElementById("output").innerHTML=fname+" "+lname+" your purchase is successful";
	
}
