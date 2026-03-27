const form = document.getElementById('registrationForm');
const submitBtn = document.getElementById('submitBtn');

const fields = {
    fullName: {
        el: document.getElementById('fullName'),
        error: document.getElementById('nameError'),
        validate: (val) => val.length >= 3 && !/\d/.test(val)
    },
    email: {
        el: document.getElementById('email'),
        error: document.getElementById('emailError'),
        validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
    },
    password: {
        el: document.getElementById('password'),
        
        validate: (val) => validatePassword(val) 
    },
    confirmPassword: {
        el: document.getElementById('confirmPassword'),
        error: document.getElementById('confirmError'),
        validate: (val) => val === fields.password.el.value && val !== ""
    }
};


Object.keys(fields).forEach(key => {
    const input = fields[key].el;
    
    input.addEventListener('input', () => {
        
        if (key === 'fullName') {
     
            input.value = input.value.replace(/[0-9]/g, ''); 
        }

        validateField(key);
        
        if (key === 'password') validateField('confirmPassword');
    });

    input.addEventListener('blur', () => validateField(key));
});


function validatePassword(val) {
    const requirements = {
        reqLength: val.length >= 8,
        reqUpper: /[A-Z]/.test(val),
        reqSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(val)
    };

    
    Object.keys(requirements).forEach(id => {
        const el = document.getElementById(id);
        const isValid = requirements[id];

        if (isValid) {
            el.classList.replace('text-gray-500', 'text-green-600');
            el.classList.replace('text-red-500', 'text-green-600');
        } else {
       
            if (val.length > 0) {
                el.classList.replace('text-gray-500', 'text-red-500');
                el.classList.replace('text-green-600', 'text-red-500');
            } else {
           
                el.classList.add('text-gray-500');
                el.classList.remove('text-red-500', 'text-green-600');
            }
        }
    });

    
    return requirements.reqLength && requirements.reqUpper && requirements.reqSpecial;
}


function validateField(fieldName) {
    const field = fields[fieldName];
    const isValid = field.validate(field.el.value);

    
    if (isValid) {
        field.el.classList.add('border-green-500');
        field.el.classList.remove('border-red-500', 'border-gray-300');
        if (field.error) field.error.classList.add('hidden');
    } else {
        field.el.classList.add('border-red-500');
        field.el.classList.remove('border-green-500', 'border-gray-300');
        if (field.error) field.error.classList.remove('hidden');
    }
    
    checkFormValidity();
}

function checkFormValidity() {
    const allValid = Object.keys(fields).every(key => fields[key].validate(fields[key].el.value));
    submitBtn.disabled = !allValid;
}

Object.keys(fields).forEach(key => {
    const input = fields[key].el;
    
    input.addEventListener('input', () => {
        validateField(key);
        if (key === 'password') validateField('confirmPassword');
    });

    input.addEventListener('blur', () => validateField(key));
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Registration Successful!');
    form.reset();
    
 
    Object.keys(fields).forEach(key => {
        fields[key].el.classList.remove('border-green-500', 'border-red-500');
        fields[key].el.classList.add('border-gray-300');
      
        if(key === 'password') validatePassword("");
    });
    checkFormValidity();
});