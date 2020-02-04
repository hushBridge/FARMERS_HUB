const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/user");
require("./services/passport");

///////////////////////////////////////
//database connection query
mongoose.connect(keys.mongoURI, { useNewUrlParser: true }, () => {
  return { useNewUrlParser: true };
});
//////////////////////////////////////////////////////
const app = express();
//console.log(process.env.USERNAME);
//
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
///
app.use(passport.initialize());
app.use(passport.session());
/////////////////////////////////////////////////////////////
//mongoose models
// const UserComp = mongoose.model("usersComp");
//mongoose query
//

/////////////////////////////////////////////////////////////////
//ALL ROUTES
//oauth routes
require("./routes/authRoutes")(app);

//proxy configuration
require("./client/src/setupProxy")(app);
//
////////////////////////////////////////
//server ROUTES
//
app.get("/", (req, res) => {
  res.send(`welcome ${process.env.USERNAME}!`);
  //db query
  // new UserComp({
  //   username: process.env.USERNAME,
  //   os: process.env.OS
  // });
  console.log(process.env.OS);
});
//
//
//
//
//
//////////////////////////////////////////////////////////////////////////
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5000"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
//
// app.get("/", function(req, res, next) {
//   // Handle the get for this route
// });
//
// app.post("/", function(req, res, next) {
//   // Handle the post for this route
// });
//port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
