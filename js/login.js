import { credentials } from './credentials.js';

document.addEventListener('DOMContentLoaded', () => {
    /*=============== SHOW HIDE PASSWORD LOGIN ===============*/
    const passwordAccess = (loginPass, loginEye) => {
        const input = document.getElementById(loginPass),
              iconEye = document.getElementById(loginEye);

        if (input && iconEye) {
            iconEye.addEventListener('click', () => {
                // Change password to text
                input.type === 'password' ? input.type = 'text' : input.type = 'password';

                // Icon change
                iconEye.classList.toggle('ri-eye-fill');
                iconEye.classList.toggle('ri-eye-off-fill');
            });
        }
    };
    passwordAccess('password', 'loginPassword');

    /*=============== SHOW HIDE PASSWORD CREATE ACCOUNT ===============*/
    const passwordRegister = (loginPass, loginEye) => {
        const input = document.getElementById(loginPass),
              iconEye = document.getElementById(loginEye);

        if (input && iconEye) {
            iconEye.addEventListener('click', () => {
                // Change password to text
                input.type === 'password' ? input.type = 'text' : input.type = 'password';

                // Icon change
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
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const user = credentials.find(cred => cred.email === email && cred.password === password);

            if (user) {
                showModal('successModal');
            } else {
                showModal('errorModal');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const names = document.getElementById('names').value;
            const surnames = document.getElementById('surnames').value;
            const emailCreate = document.getElementById('emailCreate').value;
            const passwordCreate = document.getElementById('passwordCreate').value;

            // Aquí puedes simular el registro de un nuevo usuario
            alert(`Account created for ${names} ${surnames} with email ${emailCreate}`);
        });
    }

    /*=============== MODAL FUNCTIONS ===============*/
    const showModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            // Remove any existing event listeners
            const closeModal = modal.querySelector('.close');
            const closeModalHandler = () => modal.classList.remove('show');
            
            // Clean up any existing window click listener
            window.removeEventListener('click', closeModalHandler);
            
            // Show the modal
            modal.classList.add('show');

            if (closeModal) {
                // Remove existing and add new click listener
                closeModal.removeEventListener('click', closeModalHandler);
                closeModal.addEventListener('click', closeModalHandler);
            }

            // Add window click listener
            window.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.classList.remove('show');
                }
            });
        }
    };
});