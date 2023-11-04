export const formValidationMixin = {
    data() {
        return {
            formErrors: {},
        };
    },
    methods: {
        validateForm() {
            this.formErrors = {}; 
            if (!this.formData.login || this.formData.login.length > 15) {
                this.formErrors.login = 'Логін повинен бути не більше 15 символів.';
            }

            if (!this.formData.email || !this.formData.email.endsWith('@gmail.com')) {
                this.formErrors.email = 'Електронна пошта повинна мати закінчення на @gmail.com.';
            }

            if (!this.formData.password || this.formData.password.length < 5) {
                this.formErrors.password = 'Пароль повинен бути не менше 5 символів.';
            }

            if (Object.keys(this.formErrors).length === 0) {
                return true;
            } else {
                return false;
            }
        },
    },
};
