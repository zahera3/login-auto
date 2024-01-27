class Login {
    //here are the page selectors
    usernameSelector = '#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input';
    passwordSelector = '#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input';
    LoginButtonSelector = '#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button';
    dashboardSelector = '#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-title > span > h6';
    invalidCredsSelector = '#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > div > div.oxd-alert.oxd-alert--error > div.oxd-alert-content.oxd-alert-content--error > p';
    forgetPasswordSelector = '#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.orangehrm-login-forgot > p';
    usernameForgetPasswordSelector = '#app > div.orangehrm-forgot-password-container > div.orangehrm-forgot-password-wrapper > div > form > div.oxd-form-row > div > div:nth-child(2) > input';
    resetPasswordButtonSelector = '#app > div.orangehrm-forgot-password-container > div.orangehrm-forgot-password-wrapper > div > form > div.orangehrm-forgot-password-button-container > button.oxd-button.oxd-button--large.oxd-button--secondary.orangehrm-forgot-password-button.orangehrm-forgot-password-button--reset';
    resetMsgSelector = '#app > div.orangehrm-forgot-password-container > div.orangehrm-forgot-password-wrapper > div > h6';
    requiredUsernameSelector = "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > span";
    requiredPasswordSelector = "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > span";

    //Page methods
    setUserName(username) {
        cy.get(this.usernameSelector).type(username);
    }

    setPassword(password) {
        cy.get(this.passwordSelector).type(password);
    }

    clickOnLoginButton() {
        cy.get(this.LoginButtonSelector).click();
    }

    ensureLoginSuccessfully() {
        cy.fixture('Login').then((data) => {
            cy.get(this.dashboardSelector).should('have.text', data.dashboardtxt);
        })
    }

    checkInvalidCreds() {
        cy.fixture('Login').then((data) => {
            cy.get(this.invalidCredsSelector).should('have.text', data.invalidCredsMsg);
        })
    }

    checkRequiredUsernameMsg() {
        cy.fixture('Login').then((data) => {
            cy.get(this.requiredUsernameSelector).should('have.text', data.requiredFieldMsg);
        })
    }

    checkRequiredPasswordMsg() {
        cy.fixture('Login').then((data) => {
            cy.get(this.requiredPasswordSelector).should('have.text', data.requiredFieldMsg);
        })
    }

    clickOnForgetPassword() {
        cy.get(this.forgetPasswordSelector).click();
    }

    setForgetUsername(username) {
        cy.get(this.usernameForgetPasswordSelector).type(username);
    }

    clickResetPasswordButton() {
        cy.get(this.resetPasswordButtonSelector).click();
    }

    verifyResetMsg() {
        cy.fixture('Login').then((data) => {
            cy.get(this.resetMsgSelector).should('have.text', data.forgetPasswordMsg);
        })
    }
}
export default Login;