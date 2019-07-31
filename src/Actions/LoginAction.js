export const login = (email, password) => ({
    type: 'LOG_IN',
    payload: {
        email: email,
        password: password
    }
})
