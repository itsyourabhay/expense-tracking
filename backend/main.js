const express = require("express");
const cors = require("cors");

const db = require("./util/db");
const userModel = require("./models/user");
const expenseModel = require("./models/expense");

const loginSignupRoute = require("./routes/login-signup");
const expenseRoute = require("./routes/expense");

const auth = require("./middlewears/auth");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);
app.use(loginSignupRoute);

app.use(auth.auth);

app.use(expenseRoute);

userModel.hasMany(expenseModel);

db.sync().then(() => {
  app.listen("9000");
});
