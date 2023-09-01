const express = require("express");
const cors = require("cors");

const db = require("./util/db");
const userModel = require("./models/user");
const expenseModel = require("./models/expense");
const orderModel = require("./models/order");
const totalExpenseModel = require("./models/totalExpense");

const loginSignupRoute = require("./routes/login-signup");
const expenseRoute = require("./routes/expense");
const paymentRoute = require("./routes/payment");
const premiumRoute = require("./routes/premium");

const auth = require("./middlewears/auth");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);
app.use(loginSignupRoute);
userModel.hasOne(orderModel);

app.use(auth.auth);

app.use("/premium", premiumRoute);
app.use(paymentRoute);
app.use(expenseRoute);

userModel.hasMany(expenseModel);
userModel.hasOne(totalExpenseModel);

db.sync().then(() => {
  app.listen("9000");
});
