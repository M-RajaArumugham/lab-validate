const form =document.getElementById('form');
const nam =document.getElementById('nam');
const reg =document.getElementById('reg');
const dep =document.getElementById('dep');
const yr =document.getElementById('yr');
const email =document.getElementById('email');
const num =document.getElementById('num');
const pass =document.getElementById('pass');
const cpass =document.getElementById('cpass');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});
function checkInputs() {
	// trim to remove the whitespaces
	const namValue = nam.value.trim();
    const regValue = reg.value.trim();
    const depValue = dep.value.trim();
	const yrValue = yr.value.trim();
	const emailValue = email.value.trim();
    const numValue = num.value.trim();
	const passValue = pass.value.trim();
	const cpassValue = cpass.value.trim();
	
	if(namValue === '') {
		setErrorFor(nam, 'Name cannot be blank');
	} else {
		setSuccessFor(nam);
	}
	
    if(regValue === '') {
		setErrorFor(nam, 'Register Number cannot be blank');
	} else {
		setSuccessFor(reg);
	}

    if(depValue === '') {
		setErrorFor(dep, 'Department Name cannot be blank');
	} else {
		setSuccessFor(dep);
	}

    if(yrValue === '') {
		setErrorFor(yr, 'Year cannot be blank');
	} else {
		setSuccessFor(yr);
	}

    if(numValue === '') {
		setErrorFor(num, 'Phone Number cannot be blank');
	} else {
		setSuccessFor(num);
	}

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passValue === '') {
		setErrorFor(pass, 'Password cannot be blank');
	} else {
		setSuccessFor(pass);
	}
	
	if(cpassValue === '') {
		setErrorFor(cpass, 'Password cannot be blank');
	} else if(passValue !== cpassValue) {
		setErrorFor(cpass, 'Passwords does not match');
	} else{
		setSuccessFor(cpass);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}