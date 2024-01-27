import Login from '../PageObject/LoginPage'

describe('Login Test Cases', () => {
    const login = new Login();

    it('#1 Login With Valid Credentials', () => {
        cy.visit("/auth/login");
        cy.fixture('Login').then((data) => {
            login.setUserName(data.validUsername);
            login.setPassword(data.validPassword);
            login.clickOnLoginButton();
            login.ensureLoginSuccessfully();
        })
    })

    it('#2 Login With Invalid Password', () => {
        cy.visit("/auth/login");
        cy.fixture('Login').then((data) => {
            login.setUserName(data.validUsername);
            login.setPassword(data.invalidPassword);
            login.clickOnLoginButton();
            login.checkInvalidCreds();
        })
    })

    it('#3 Login With Invalid UserName', () => {
        cy.visit("/auth/login");
        cy.fixture('Login').then((data) => {
            login.setUserName(data.invalidUsername);
            login.setPassword(data.validPassword);
            login.clickOnLoginButton();
            login.checkInvalidCreds();
        })
    })

    it('#4 Login With Blank Credentials', () => {
        cy.visit("/auth/login");
        cy.fixture('Login').then((data) => {
            login.clickOnLoginButton();
            login.checkRequiredUsernameMsg();
            login.checkRequiredPasswordMsg();
        })
    })

    it('#5 Forgot Password Verification', () => {
        cy.visit("/auth/login");
        cy.fixture('Login').then((data) => {
            login.clickOnForgetPassword();
            login.setForgetUsername(data.validUsername);
            login.clickResetPasswordButton();
            login.verifyResetMsg();
        })
    })
})
