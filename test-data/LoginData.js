// test-data/loginData.js

module.exports = {
  validUser: {
    username: "admin",
    password: "admin123"
  },
  invalidUser: {
    username: "wronguser",
    password: "wrongpass"
  },
  emptyFields: {
    username: "",
    password: ""
  },
  specialChars: {
    username: "admin@#$%",
    password: "pass@123!"
  }
};
