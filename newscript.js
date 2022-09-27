function validate(){

	var name=document.forms.Signupform.nam.value;
	var reg=document.forms.Signupform.reg.value;
	var dep=document.forms.Signupform.department.value;
	var year=document.forms.Signupform.year.value;
	var email=document.forms.Signupform.email.value;
	var phone=document.forms.Signupform.num.value;
	var pass=document.forms.Signupform.pass.value;
	var cpass=document.forms.Signupform.cpass.value;
	var genderselected = document.querySelector(   
                'input[name="gender"]:checked');  

	var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    var regPhone=/^\d{10}$/;                                        // Javascript reGex for Phone Number validation.
    var regName = /^[A-Za-z ]+$/; 
    var regreg=/^\d{10}$/;  

    var error=0;

	if (name == ""){
		
		error++;
		document.getElementById('name_error').innerHTML = 'Name must be filled out';		
	}else if (!regName.test(name)){
		error++;
		document.getElementById('name_error').innerHTML = 'Name must not contain numbers or special characters';
	}

	if (reg == ""){
		error++;
		document.getElementById('reg_error').innerHTML = 'Register Number must be filled out';
	}else if (!regreg.test(reg)){
		error++;
		document.getElementById('reg_error').innerHTML = 'Register Number only contains numbers';
	}

	if (dep == "sel"){
		error++;
		document.getElementById('dep_error').innerHTML = 'Department must be selected';
	}

	if (year == "sel"){
		error++;
		document.getElementById('year_error').innerHTML = 'Year must be selected';
	}

	if (email == "" ){
		error++;
		document.getElementById('email_error').innerHTML = 'Email must not be empty';
	}else if(!regEmail.test(email)){
		error++;
		document.getElementById('email_error').innerHTML = 'Email must be filled out correctly';
	}

	if (phone == ""){
		error++;
		document.getElementById('phone_error').innerHTML = 'Phone number must be filled out';
	}else if (!regPhone.test(phone)){
		error++;
		document.getElementById('phone_error').innerHTML = 'Phone number must contain 10 digits';
	}

	

	if (pass == ""){
		error++;
		document.getElementById('pass_error').innerHTML = 'Password must be filled out';

	}else if (pass.length < 8){
		error++;
		document.getElementById('pass_error').innerHTML ="Password should be atleast 8 characters long";

	}

	

	if (cpass == ""){
		error++;
		document.getElementById('cpass_error').innerHTML = 'Re-enter Password must be filled out';

	}else if(cpass != pass){
		error++;
		document.getElementById('cpass_error').innerHTML = 'Re-enter Password should match the Password';
	}

	if(genderselected == null)
	{
		error++;
		document.getElementById('gender_error').innerHTML = 'Gender must be choosed';
	}

	if(error > 0){
		return false;
	}

	return true;


}