const credentials = [
    {
        email: "admin@gmail.com",
        password: "admin123"
    },
    {
        email: "user@gmail.com",
        password: "user123"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    /*=============== SHOW HIDE PASSWORD LOGIN ===============*/
    const passwordAccess = (loginPass, loginEye) => {
        const input = document.getElementById(loginPass),
              iconEye = document.getElementById(loginEye);

        if (input && iconEye) {
            iconEye.addEventListener('click', () => {
                input.type = input.type === 'password' ? 'text' : 'password';
                iconEye.classList.toggle('ri-eye-fill');
                iconEye.classList.toggle('ri-eye-off-fill');
            });
        }
    };
    passwordAccess('password', 'loginPassword');

    const passwordRegister = (loginPass, loginEye) => {
        const input = document.getElementById(loginPass),
              iconEye = document.getElementById(loginEye);

        if (input && iconEye) {
            iconEye.addEventListener('click', () => {
                input.type = input.type === 'password' ? 'text' : 'password';
                iconEye.classList.toggle('ri-eye-fill');
                iconEye.classList.toggle('ri-eye-off-fill');
            });
        }
    };
    passwordRegister('passwordCreate', 'loginPasswordCreate');

    /*=============== SHOW HIDE LOGIN & CREATE ACCOUNT ===============*/
    const loginAcessRegister = document.getElementById('loginAccessRegister'),
          buttonAccess = document.getElementById('loginButtonAccess');

    if (buttonAccess && loginAcessRegister) {
        buttonAccess.addEventListener('click', () => {
            loginAcessRegister.classList.remove('active');
        });
    }

    /*=============== SIMULATE LOGIN ===============*/
    const loginForm = document.querySelector('.login__access .login__form');
    const registerForm = document.querySelector('.login__register .login__form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');

            if (!emailInput || !passwordInput) {
                console.error('Form fields not found');
                return;
            }

            const email = emailInput.value;
            const password = passwordInput.value;

            console.log('Attempting login with:', email, password); // Debugging line

            const user = credentials.find(cred => 
                cred.email === email && 
                cred.password === password
            );

            if (user) {
                console.log('Login successful'); // Debugging line
                // Show success modal
                showModal('successModal');
                
                // Store login status
                localStorage.setItem('isLoggedIn', 'true');
                
                // Wait 2.5 seconds before redirecting
                setTimeout(() => {
                    window.location.href = '../index.html';
                }, 2500);
            } else {
                console.log('Login failed'); // Debugging line
                // Show error modal
                showModal('errorModal');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const names = document.getElementById('names');
            const surnames = document.getElementById('surnames');
            const emailCreate = document.getElementById('emailCreate');
            const passwordCreate = document.getElementById('passwordCreate');

            if (!names || !surnames || !emailCreate || !passwordCreate) {
                console.error('Register form fields not found');
                return;
            }

            // Simulate register
            showModal('successModal');
            setTimeout(() => {
                alert(`Account created for ${names.value} ${surnames.value}`);
            }, 500);
        });
    }

    /*=============== MODAL FUNCTIONS ===============*/
    const showModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        const closeModal = modal.querySelector('.close');
        const closeModalHandler = () => {
            modal.classList.remove('show');
            // Remove event listeners when closing
            if (closeModal) {
                closeModal.removeEventListener('click', closeModalHandler);
            }
            window.removeEventListener('click', windowClickHandler);
        };

        const windowClickHandler = (event) => {
            if (event.target === modal) {
                closeModalHandler();
            }
        };

        // Show modal
        modal.classList.add('show');

        // Add event listeners
        if (closeModal) {
            closeModal.addEventListener('click', closeModalHandler);
        }
        window.addEventListener('click', windowClickHandler);
    };

    // Close modals when ESC key is pressed
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => modal.classList.remove('show'));
        }
    });
});